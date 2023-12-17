
/*
#######################
# Auteur : Mouhamed Dieng
# Date : 14/09/2023
# Script : Serveur Buzzer
# Description : Ce code permet la mise en place d'un serveur pouvant repondre a des requete et renvoyées des reponses
  Il sert des pages web d'une application.
  Au  traveers des fonctions, vous verrez toutes les fonctionnalites que ce seveeur permet de faire
  Un autre aspect important est qu'il traite aussi des informations recu depuis des boutons faisant office de buzzer en utilisant le systemee des
  interruptions.

*/



// dans un premier temps, j'inclus tout ce qui est biblio pour gerer le wifi et le serveur asynchrone*+*+++++++++++++++*+++++++++++++++
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <WebSocketsServer.h>
#include <Preferences.h>
#include <ESPmDNS.h>

// la bibliotheque pour gerer la memoire spiffs
#include "SPIFFS.h"

// initialisation des serveurs
// le serveur nommé serveur gère les requetes entrante tandis que le webscoket serveur permet de maintenir une communication avec tous les clients
AsyncWebServer server(80);
WebSocketsServer webSocket = WebSocketsServer(81);


// identifiant du reseau wifi généré par l'ESP
char ssidAP[] = "WIFI_ESP";
char passwordAP[] = "mypassword21";

// le nom de domaine du serveur
char domaine_name_server[] = "buzzer";

unsigned int vitesse_de_communication = 115200;
Preferences preferences;

// ############################ FONCTION VERIFIANT LA CONFIGURATION DU BUZZER ##############################""

bool verified_configuration()
{
  //cette fonction teste si dans la memoire flash il y'a la clé school_name
  Serial.println(preferences.getString("school_name"));
  return preferences.getString("school_name");
}
  

// ######################### ENREGISTREMENT DES DONNEES RECUES DEPUIS LA PAGE CONFIGURATION DANS LA MEMOIRE SPIFFSS ################

void save_in_flash(char key1[] = "", String value1 = "", char key2[] = "" , String value2 = "", char key3[] = "" , String value3 = "", char key4[] = "" , String value4 = "")
{
  preferences.begin("configuration", false);
  preferences.putString(key1, value1);
  preferences.putString(key2, value2);
  preferences.putString(key3, value3);
  preferences.putString(key4, value4);
  Serial.println("les données de la page configuration ont bien ete enregistrées");
}



// #######################  FONCTION GERANT L'ENREGISTREMENT DES INFORMATIONS ISSUES DE LA PAGE DE CONFIGURATION #################################""
void configuration(AsyncWebServerRequest *request, String filename, size_t index, uint8_t *data, size_t len, bool final) {
  
  
  //dans un premier temps on va sauvegarder le logo recu dans la memoire spiffs
  if (!index) {
    //logmessage = "Upload Start: " + String(filename);
    // open the file on first call and store the file handle in the request object
    request->_tempFile = SPIFFS.open("/logo.png", "w");
    //Serial.println(logmessage);
    Serial.println("Debut de l'enregistrement du logo");
    Serial.println(filename);
  }

  if (len) {
    // stream the incoming chunk to the opened file
    request->_tempFile.write(data, len);
    //logmessage = "Writing file: " + String(filename) + " index=" + String(index) + " len=" + String(len);
    //Serial.println(logmessage);
    Serial.println("Ecriture du fichier : " + String(filename) + " index=" + String(index) + " len=" + String(len));
  }

  if (final) {
    //logmessage = "Upload Complete: " + String(filename) + ",size: " + String(index + len);
    // close the file handle as the upload is now done
    request->_tempFile.close();
    Serial.println("Le logo a bien ete enregistré");
    //request->redirect("/");
  }

  // puis dans un second on recupere les autres informations du formulaire
  if (request->hasParam("school_name") && request->hasParam("scoreur_name")&& request->hasParam("user_name")&& request->hasParam("password")&& request->hasParam("verified_password")) {
      

      if (request->getParam("password")->value() == request->getParam("verified_password")->value())
      {
        save_in_flash("school_name",request->getParam("school_name")->value(), "scoreur_name",request->getParam("scoreur_name")->value(), "user_name",request->getParam("user_name")->value(), "password", request->getParam("password")->value() );
        request->redirect("/identification");
      }
      else
      {
        request->redirect("/configuration");
      }
      //on enregistre toutes ces parametres dans la memoire flash
      
      
      
      
    }
    else {
     Serial.println("erreur sur la requete");
    }
}

// ################################## FONCTION PERMETTANT DE RECUPERER LES INFORMATIONS DEPUIS LA PAGE IDENTIFICATION ET DE LES TESTER ###################""

void identification(AsyncWebServerRequest *request)
{
  if (request->hasParam("user_name") && request->hasParam("password"))
  {
    // on test si c'est effictement ceux qui sont enregistrés dans la memoir flash
    if(preferences.getString("user_name") == request->getParam("user_name")->value() && preferences.getString("password") == request->getParam("password")->value()  )
    {
      //alores l'identification s'est passe avec success
      //ainsi on retoure la page avant match
      request->redirect("/avantMatch");
    }

  }
}



void setup()
{

  start_serial_communication(vitesse_de_communication, 1000);
  start_spiffs_memory();
  start_wifi_ip(ssidAP, passwordAP);
  start_dns(domaine_name_server);
  start_async_server();
  start_websocket_server();
  start_routing();
}

void loop()
{
  // put your main code here, to run repeatedly:
}

// for image : server.on("/sun", HTTP_GET, [](AsyncWebServerRequest *request){
// request->send(SPIFFS, "/sun.png", "image/png");
//});

// ############################# FONCTION MIS EN PLACE POUR RECEVOIR UNE REQUETE DE CONNEXION WEBSOCKET D'UN CLIENT
void wsEvent(uint8_t n, WStype_t type, uint8_t *message, size_t length)
{
  Serial.println("message recu");
  //Serial.println(message.);
}

// ##########################" FONCTION PERMETTANT D'ETABLIR LA COMMUNICATION SERIE ##############################"
void start_serial_communication(int vitesse, unsigned int delayy)
{
  Serial.begin(vitesse);
  delay(delayy);
}


// ######################## FONCTION PERMETTANT DE DEMARRER L'ESP EN MODE AP ################################
void start_wifi_ip(char ssid[], char password[])
{
  WiFi.mode(WIFI_AP);
  delay(1000);
  WiFi.softAP(ssid, password);

  IPAddress myIP = WiFi.softAPIP();
  Serial.print("l'adresse IP est : ");
  Serial.println(myIP);
}


// #################### FONCTION PERMETTANT DE DEMARRER LE SERVEUR ASYNCHRONE ###################################
void start_async_server()
{
  server.begin();
}

// #################### FONCTION PERMETTANT DE DEMARRER LE SERVEUR WEBSOCKET ###################################
void start_websocket_server()
{
  webSocket.begin();
  webSocket.onEvent(wsEvent);
}



// #################### FONCTION PERMETTANT D'INITIALISER LA MEMOIRE SPIFFS ###################################
void start_spiffs_memory()
{
  if (!SPIFFS.begin(true))
  {
    Serial.println("Probleme avec la memoire spifss");
  }
}


// #################### FONCTION GERANT LA RESOLUTION DNS ###################################
void start_dns(char domaine[])
{
  if (!MDNS.begin(domaine)) {
    Serial.println("Erreur lors de l'initialisation du service mDNS.");
  }
}
// #################### FONCTION PERMETTANT DE DEFINIR LES ENDPOINTS ET ROUTAGE ###################################
void start_routing()
{
  // normalement on ne doit pas utiliser server.on mais server.serveStatic
  server.serveStatic("/style_min.css", SPIFFS, "/style_min.css");
  
  server.serveStatic("/bootstrap.bundle.js", SPIFFS, "/bootstrap.bundle.js");

  server.serveStatic("/all_min.js", SPIFFS, "/all_min.js");

  server.serveStatic("/bootstrap_min.css", SPIFFS, "/bootstrap_min.css");

  server.serveStatic("/configuration", SPIFFS, "/configuration_min.html");

      /*  server.on("/configuration", HTTP_GET, [](AsyncWebServerRequest *request)
                  {
                     request->send(SPIFFS, "/configuration.html", "text/html");
                     }
                     );*/

  //server.serveStatic("/configuration", SPIFFS, "/configuration1.html");

  server.on("/configurationSoumise", HTTP_POST, [](AsyncWebServerRequest *request)
            {request->send(200);},configuration); // de meme ici

  server.serveStatic("/identification", SPIFFS, "/login1_min.html");
  
  server.on("/identificationSoumise", HTTP_POST, [](AsyncWebServerRequest *request)
              {
                  request->send(200);
                }); //identification);// franchement je ne pense pas que sa marcher et donc le plan B est de ramener tout ce qu'il y'a dans la fonction identification ici
                
  server.serveStatic("/avantMatch", SPIFFS, "/add_min.html");

  server.on("/avantMatchSoumise", HTTP_POST, [](AsyncWebServerRequest *request)
                {
                  // handle configuration ici
                });

  server.serveStatic("/matchAdmin", SPIFFS, "/admin_min.html");

  server.serveStatic("/matchClient", SPIFFS, "/spectateur_min.html");

  server.serveStatic("/finMatch", SPIFFS, "/finMatch_min.html");
  
  server.serveStatic("/logo.png", SPIFFS, "/logo.png");

  server.serveStatic("/gagnant.png", SPIFFS, "/gagant.png");

  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request)
               {
              // on verifie si la page de configuration a ete configure
              if (verified_configuration())
              {
                // si oui on envoi la page d'identification
                Serial.println("redirection veers la page identification");
                request->redirect("/identification");
              }
              // sinon on envoi la page de configuration
              else
              {
                Serial.println("redirection veers la page conf");
                request->redirect("/configuration");
              } 
              });
}

/*server.on("/demande_data", HTTP_GET, [] (AsyncWebServerRequest *request) {
                                 
}
*/




/*EXEMPLE

// handles uploads
void handleUpload(AsyncWebServerRequest *request, String filename, size_t index, uint8_t *data, size_t len, bool final) {
  String logmessage = "Client:" + request->client()->remoteIP().toString() + " " + request->url();
  Serial.println(logmessage);

  if (!index) {
    logmessage = "Upload Start: " + String(filename);
    // open the file on first call and store the file handle in the request object
    request->_tempFile = SPIFFS.open("/" + filename, "w");
    Serial.println(logmessage);
  }

  if (len) {
    // stream the incoming chunk to the opened file
    request->_tempFile.write(data, len);
    logmessage = "Writing file: " + String(filename) + " index=" + String(index) + " len=" + String(len);
    Serial.println(logmessage);
  }

  if (final) {
    logmessage = "Upload Complete: " + String(filename) + ",size: " + String(index + len);
    // close the file handle as the upload is now done
    request->_tempFile.close();
    Serial.println(logmessage);
    request->redirect("/");
  }
}

String processor(const String& var) {
  if (var == "FILELIST") {
    return listFiles(true);
  }
  if (var == "FREESPIFFS") {
    return humanReadableSize((SPIFFS.totalBytes() - SPIFFS.usedBytes()));
  }

  if (var == "USEDSPIFFS") {
    return humanReadableSize(SPIFFS.usedBytes());
  }

  if (var == "TOTALSPIFFS") {
    return humanReadableSize(SPIFFS.totalBytes());
  }

  return String();
}
// handles uploads
void handleUpload(AsyncWebServerRequest *request, String filename, size_t index, uint8_t *data, size_t len, bool final) {
  String logmessage = "Client:" + request->client()->remoteIP().toString() + " " + request->url();
  Serial.println(logmessage);

  if (!index) {
    logmessage = "Upload Start: " + String(filename);
    // open the file on first call and store the file handle in the request object
    request->_tempFile = SPIFFS.open("/" + filename, "w");
    Serial.println(logmessage);
  }

  if (len) {
    // stream the incoming chunk to the opened file
    request->_tempFile.write(data, len);
    logmessage = "Writing file: " + String(filename) + " index=" + String(index) + " len=" + String(len);
    Serial.println(logmessage);
  }

  if (final) {
    logmessage = "Upload Complete: " + String(filename) + ",size: " + String(index + len);
    // close the file handle as the upload is now done
    request->_tempFile.close();
    Serial.println(logmessage);
    request->redirect("/");
  }
}

String processor(const String& var) {
  if (var == "FILELIST") {
    return listFiles(true);
  }
  if (var == "FREESPIFFS") {
    return humanReadableSize((SPIFFS.totalBytes() - SPIFFS.usedBytes()));
  }

  if (var == "USEDSPIFFS") {
    return humanReadableSize(SPIFFS.usedBytes());
  }

  if (var == "TOTALSPIFFS") {
    return humanReadableSize(SPIFFS.totalBytes());
  }

  return String();
}
ecole = request->getParam("ecole")->value(); 
*/
