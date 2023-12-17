/* 
Maintenat que le xml et le websokcet est configure 
nous testons les requetes dans tous les sens



*/ 
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <WebSocketsServer.h>
#include <Preferences.h>
#include <ESPmDNS.h>
#include "soc/rtc_wdt.h"

#include <FastLED.h>
#include "buzzer.h"
#include "XT_DAC_Audio.h"

#include "FS.h"
#include "SD.h"
#include "SPI.h"

   

// la bibliotheque pour gerer la memoire spiffs
#include "SPIFFS.h"

// initialisation des serveurs
AsyncWebServer server(80);
WebSocketsServer webSocket = WebSocketsServer(81);

// la j'inclus les identifiants wifi

char ssidAP[] = "WIFI_ESP";
char passwordAP[] = "mypassword21";

unsigned int vitesse_de_communication = 115200;
Preferences preferences;

String domaine = "buzzer";

// LES OBJET JOUEURS

typedef struct Joueur {
  String nom_complet;
  int nombre_bonne_reponses;
  int nombre_mauvaiz_reponses;
  //char equipe;
  int position_pin;
  int a_buzzer;
} Joueur;

typedef struct Match {
  String nom_match;
  String equipe_A;
  String equipe_B;
  int current_score_A;
  int current_score_B;
  String current_phase;
  String vainqueur;
  
} Match;

Joueur j_1_A = {"", 0,0, 33,0}; // 
Joueur j_2_A = {"", 0,0, 39,0};
Joueur j_3_A = {"", 0,0, 34,0}, j_4_A  = {"", 0,0, 35,0}, j_1_B = {"", 0,0, 15,0}, j_2_B = {"", 0,0, 4,0}, j_3_B = {"", 0,0, 16,0}, j_4_B = {"", 0,0, 17,0};
Match match;
int pin[] = {j_1_A.position_pin, j_2_A.position_pin, j_3_A.position_pin, j_4_A.position_pin, j_1_B.position_pin, j_2_B.position_pin, j_3_B.position_pin, j_4_B.position_pin};

int counter = 0;

// definissons la position des pin de chaque joueur
//j_1_A.position_pin = 3; 
//j_2_A.position_pin = 4 ;  j_3_A.position_pin = 5 ; j_4_A.position_pin = 6;
//j_1_B.position_pin = 27, j_2_B.position_pin = 26, j_3_B.position_pin = 24,  j_4_B.position_pin =23;

// LES VARIABLES STOCKANT LE NOM DES EQUIPES

// LES LEDS ADRESSABLES

// les pin ou sont branchés les LEDs
// a noter que les leds adressables s'utilise chacun avec un seul pin
// cela veut dire que avec un seul pin on peut controler plusieurs leds ! magnifique
#define DATA_PIN_A  32
#define DATA_PIN_B 21
// le nombre totale de leds adressables de chacun des coté
#define NUM_LED_A 12*4
#define NUM_LED_B 12*4

// enfin le CRGB  DESIGNANT le groupe des leds
// un tableau de type CRGB
CRGB LED_A[NUM_LED_A];
CRGB LED_B[NUM_LED_B];

// initialisation des variables pour le son
XT_Wav_Class Sound_buzzer(buzzer_song);                                          
XT_DAC_Audio_Class DacAudio(26,0); 
//definiton des fonctions

/*pour la sd carrd
#define SCK  14
#define MISO  12
#define MOSI  13
#define CS  17*/

//SPIClass spi = SPIClass(VSPI);

void init_spi_com()
{
  /*spi.begin(SCK, MISO, MOSI, CS);
  if (!SD.begin(CS,spi,80000000)) {
    Serial.println("Card Mount Failed");
    return;*/
    if(!SD.begin(5)){
    Serial.println("Card Mount Failed");
    return;
  }
  
  uint8_t cardType = SD.cardType();

  if(cardType == CARD_NONE){
    Serial.println("No SD card attached");
    return;
  }

  Serial.print("SD Card Type: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }

  uint64_t cardSize = SD.cardSize() / (1024 * 1024);
  Serial.printf("SD Card Size: %lluMB\n", cardSize);
}

bool verified_configuration()
{
  preferences.begin("configuration", false);
  if( preferences.getString("registred") == "yes")
  {
    return true;
  }
  return false;
preferences.end();
  
}
  


void save_in_flash(char key1[] = "", String value1 = "", char key2[] = "" , String value2 = "", char key3[] = "" , String value3 = "", char key4[] = "" , String value4 = "")
{
  preferences.begin("configuration", false);
  preferences.putString(key1, value1);
  preferences.putString(key2, value2);
  preferences.putString(key3, value3);
  preferences.putString(key4, value4);
  Serial.println("les données de la page configuration ont bien ete enregistrées");
  preferences.putString("registred", "yes");
  preferences.end();
}




void setup()
{

  start_serial_communication(vitesse_de_communication, 1000);
  rtc_wdt_protect_off();
  rtc_wdt_disable();
  init_fast_led();
  start_pin_mode();
  //attach_interrupt_pin_j();
  jeux_de_lumiere();
  //init_spi_com();
  //jeux_de_lumiere_blanche();
  start_spiffs_memory();
  start_wifi_ip(ssidAP, passwordAP);
  start_async_server();
  start_dns(domaine);
  start_websocket_server();
  start_routing();
}

void loop()
{
  // put your main code here, to run repeatedly:
  webSocket.loop();
  send_buzzer();
}

// for image : server.on("/sun", HTTP_GET, [](AsyncWebServerRequest *request){
// request->send(SPIFFS, "/sun.png", "image/png");
//});
void wsEvent(uint8_t n, WStype_t type, uint8_t *message, size_t length)
{
  Serial.println("message recu");
  //Serial.println(message.);
}
void start_serial_communication(int vitesse, unsigned int delayy)
{
  Serial.begin(vitesse);
  delay(delayy);
}

void start_pin_mode()
{
  for(int i = 0 ; i <= 7; i++)
  {
    pinMode(pin[i], INPUT);
  }
  /*pinMode(34, INPUT);
  pinMode(35, INPUT);
  pinMode(32, INPUT);
  pinMode(33, INPUT);*/
}
void start_wifi_ip(char ssid[], char password[])
{
  WiFi.mode(WIFI_AP);
  delay(1000);
  WiFi.softAP(ssid, password);

  IPAddress myIP = WiFi.softAPIP();
  Serial.print("l'adresse IP est : ");
  Serial.println(myIP);
}

void start_async_server()
{
  server.begin();
}

void start_websocket_server()
{
  webSocket.begin();
  webSocket.onEvent(wsEvent);
}

void start_dns(String domaine)
{
    if (!MDNS.begin(domaine)) {
    Serial.println("Erreur lors de l'initialisation du service mDNS.");
  }
}
void start_spiffs_memory()
{
  if (!SPIFFS.begin(true))
  {
    Serial.println("Probleme avec la memoire spifss");
  }
}

// cette fonction permet le traitement des gabarits de templates 
// cette fonction suppose effectivement que dans le fichier html avec lequel on le rend il y figure deja les template de la forme
// %j_1_A%



String processor(const String& var)
  {
    
    // traitement du nom des equipes
    if(var == "nom_match")
      return match.nom_match;
    if(var == "equipe_A")
      return match.equipe_A;
    if(var == "equipe_B")
      return match.equipe_B;

    // traitement des nom des joueurs pour chaque equipe
    // pour l'equipe A
    if(var == "j_1_A")
      return j_1_A.nom_complet;
    if(var == "j_2_A")
      return j_2_A.nom_complet;
    if(var == "j_3_A")
      return j_3_A.nom_complet;
    if(var == "j_4_A")
      return j_4_A.nom_complet;

    // pour l'equipe B
    if(var == "j_1_B")
      return j_1_B.nom_complet;
    if(var == "j_2_B")
      return j_2_B.nom_complet;
    if(var == "j_3_B")
      return j_3_B.nom_complet;
    if(var == "j_4_B")
      return j_4_B.nom_complet;
    if(var == "vainqueur")
    {
      // on appelle la fonction vainqueur
      match.vainqueur = vainqueur_du_match();
      return match.vainqueur;
    }
    if(var == "nb_rep_bonn_j_1_A")
      return String(j_1_A.nombre_bonne_reponses);
    if(var == "nb_rep_bonn_j_2_A")
      return String(j_2_A.nombre_bonne_reponses);
    if(var == "nb_rep_bonn_j_3_A")
      return String(j_3_A.nombre_bonne_reponses);
    if(var == "nb_rep_bonn_j_4_A")
      return String(j_4_A.nombre_bonne_reponses);
    if(var == "nb_rep_bonn_j_1_B")
      return String(j_1_B.nombre_bonne_reponses);
    if(var == "nb_rep_bonn_j_2_B")
      return String(j_2_B.nombre_bonne_reponses);
    if(var == "nb_rep_bonn_j_3_B")
      return String(j_3_B.nombre_bonne_reponses);
    if(var == "nb_rep_bonn_j_4_B")
      return String(j_4_B.nombre_bonne_reponses);
    
  
  }

String vainqueur_du_match()
{
  String vainqueur;
  //String vainqueur = match.current_score_A > match.current_score_B ? match.equipe_A : match.equipe_B; un ternaire j'en voulais moi 
  if (match.current_score_A > match.current_score_B)
    vainqueur = match.equipe_A;
  else if (match.current_score_A < match.current_score_B)
    vainqueur = match.equipe_B;
  else
    vainqueur = "MATCH NULL ";
  
  return vainqueur;
}
void start_routing()
{
  // normalement on ne doit pas utiliser server.on mais server.serveStatic
  server.serveStatic("/style_min.css", SPIFFS, "/style_min.css");
  
  server.serveStatic("/bootstrap.bundle.js", SPIFFS, "/bootstrap.bundle.js");

  server.serveStatic("/all_min.js", SPIFFS, "/all_min.js");

  server.serveStatic("/bootstrap_min.css", SPIFFS, "/bootstrap_min.css");

  //server.serveStatic("/configuration", SPIFFS, "/configuration1_min.html");

        server.on("/configuration", HTTP_GET, [](AsyncWebServerRequest *request)
                  {
                     request->send(SPIFFS, "/configuration1_min.html", "text/html");
                     }
                     );

  //server.serveStatic("/configuration", SPIFFS, "/configuration1.html");

  server.on("/configurationSoumise", HTTP_GET, [](AsyncWebServerRequest *request)
            {
    if (request->hasParam("school_name") && request->hasParam("scoreur_name") && request->hasParam("user_name") && request->hasParam("password") && request->hasParam("verified_password")) {
      
      Serial.println("param recu");
      

      if (request->getParam("password")->value() == request->getParam("verified_password")->value())
      {
        Serial.println("enregistrement dans la memoire en cours...");
        delay(1000);
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

              
              //request->send(200);}
    ); // de meme ici

  server.serveStatic("/identification", SPIFFS, "/login1_min.html");
  
  server.on("/identificationSoumise", HTTP_GET, [](AsyncWebServerRequest *request)
        {
          preferences.begin("configuration", false);
          if (request->hasParam("user_name") && request->hasParam("password"))
          {
            // on test si c'est effictement ceux qui sont enregistrés dans la memoir flash
          if(preferences.getString("user_name") == request->getParam("user_name")->value() && preferences.getString("password") == request->getParam("password")->value()  )
          {
        //alores l'identification s'est passe avec success
        //ainsi on retoure la page avant match
         request->redirect("/avantMatch");
        }
        else {
          Serial.println(preferences.getString("user_name"));
          Serial.println("tu reste ici");

        // sinon on reste sur la page et on ne vas nul part
        request->redirect("/identification");
        }

        }
        else {
        Serial.println("erreur sur la requete");
        }
        preferences.end();
        }); // franchement je ne pense pas que sa marcher et donc le plan B est de ramener tout ce qu'il y'a dans la fonction identification ici
                
  server.serveStatic("/avantMatch", SPIFFS, "/add1_min.html");

  server.on("/avantMatchSoumise", HTTP_GET, [](AsyncWebServerRequest *request)
                {
                  // handle avant match soumise ici
                  if (request->hasParam("equipe_A") && request->hasParam("equipe_B") && request->hasParam("j_1_A") && request->hasParam("j_1_B"))
                  {
                    // recuperons toutes les informations dans des variables
                    // le nom du match
                    match.nom_match = request->getParam("nom_match")->value();

                    // d'abord pour l'equipe A
                    match.equipe_A = request->getParam("equipe_A")->value();
                    j_1_A.nom_complet = request->getParam("j_1_A")->value(); j_1_A.nombre_bonne_reponses = 0;
                    j_2_A.nom_complet = request->getParam("j_2_A")->value(); j_2_A.nombre_bonne_reponses = 0;
                    j_3_A.nom_complet = request->getParam("j_3_A")->value(); j_3_A.nombre_bonne_reponses = 0;
                    j_4_A.nom_complet = request->getParam("j_4_A")->value(); j_4_A.nombre_bonne_reponses = 0;

                    // puis pour l'equipe B
                    match.equipe_B = request->getParam("equipe_B")->value();
                    j_1_B.nom_complet = request->getParam("j_1_B")->value(); j_1_B.nombre_bonne_reponses = 0;
                    j_2_B.nom_complet = request->getParam("j_2_B")->value(); j_2_B.nombre_bonne_reponses = 0;
                    j_3_B.nom_complet = request->getParam("j_3_B")->value(); j_3_B.nombre_bonne_reponses = 0;
                    j_4_B.nom_complet = request->getParam("j_4_B")->value(); j_4_B.nombre_bonne_reponses = 0;

                    Serial.println("les données ont bien ete recues");
                    Serial.println(match.nom_match);
                    Serial.println(j_1_A.nom_complet);
                    Serial.println(j_1_B.nom_complet);
                    
                    request->redirect("/matchAdmin");
                   



                  }
                  else
                  {
                    Serial.println("erreur sur la requete");
                  }

                });

  server.serveStatic("/matchAdmin", SPIFFS, "/admin1_min.html").setTemplateProcessor(processor);
  // la fonction processor est defini en haut
  
  server.serveStatic("/matchClient", SPIFFS, "/spectateur1_min.html").setTemplateProcessor(processor);
  // la fonction processor est defini en haut;

  server.serveStatic("/finMatch", SPIFFS, "/finMatch1_min.html").setTemplateProcessor(processor);

  

  server.on("/finMatch_p", HTTP_GET, [](AsyncWebServerRequest *request)
                  {
                     
                      request->redirect("/finMatch"); 
                      
                       String fin_match = "fin_match,!";
                       webSocket.broadcastTXT(fin_match.c_str(), fin_match.length()); 
                        
                     }
                     );
  
  server.serveStatic("/logo.png", SPIFFS, "/logo.png");

  server.serveStatic("/gagnant.png", SPIFFS, "/gagnant.png");

  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request)
               {
              // on verifie si la page de configuration a ete configure
              if (verified_configuration())
              {
                // si oui on envoi la page d'identification
                Serial.println("redirection vers ident");
                request->redirect("/identification");
              }
              // sinon on envoi la page de configuration
              else
              {
                Serial.println("vers conf");
                request->redirect("/configuration");
              } 
 });

server.on("/update_score", HTTP_GET, [](AsyncWebServerRequest *request)
               {
                 Serial.println("demande de mise a jour de score");
               if (request->hasParam("score_A") && request->hasParam("score_B")) 
               {
                 // DANs un premier temps , on recupere les nouveaux scores
                  match.current_score_A = (request->getParam("score_A")->value()).toInt();
                  match.current_score_B = (request->getParam("score_B")->value()).toInt();
                  
                  // dans un second temps on l'envoi a la page client
                }
               
               
               // DANS TOUTS LES CAS   on envoi ces nouveau scores a la page client 
              String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
              webSocket.broadcastTXT(current_score.c_str(), current_score.length());
              
              });
server.on("/update_score_by_j", HTTP_GET, [](AsyncWebServerRequest *request)
            {
              if (request->hasParam("score_A") && request->hasParam("score_B") && request->hasParam("id_joueur")) 
               {
                 // DANs un premier temps , on recupere les nouveaux scores
                  match.current_score_A = (request->getParam("score_A")->value()).toInt();
                  match.current_score_B = (request->getParam("score_B")->value()).toInt();
                 
                    if (request->getParam("id_joueur")->value() == "j_1_A")
                    {
                      Serial.println("le joueur j_1_A a trouvé");
                      j_1_A.nombre_bonne_reponses = j_1_A.nombre_bonne_reponses + 1; // on incremente son nombre de bonnes reponses
                    String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                    webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      //Serial.print(j_1_A.nom_complet);
                      //Serial.println(j_1_A.nombre_bonne_reponses);
                      lumiere_vert("j_1_A"); // on allume sa lumiere en bleue
                      delay(2000);
                      lumiere_orange("j_1_A");
                    }
                       

                    else if (request->getParam("id_joueur")->value() == "j_2_A")
                    {
                      j_2_A.nombre_bonne_reponses = j_2_A.nombre_bonne_reponses + 1;
                      String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                    webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      lumiere_vert("j_2_A"); // on allume sa lumiere en bleue
                      delay(2000);
                      lumiere_orange("j_2_A");
                      //lumiere_bleue("j_2_A");
                    }
                    else if (request->getParam("id_joueur")->value() == "j_3_A")
                    {
                      j_3_A.nombre_bonne_reponses = j_3_A.nombre_bonne_reponses + 1;
                      String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                      webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      //Serial.print(j_1_A.nom_complet);
                      //lumiere_vert("j_1_A");
                      lumiere_vert("j_3_A"); // on allume sa lumiere en bleue
                      delay(2000);
                      lumiere_orange("j_3_A");
                    }
                    else if (request->getParam("id_joueur")->value() == "j_4_A")
                    {
                      j_4_A.nombre_bonne_reponses = j_4_A.nombre_bonne_reponses + 1;
                      String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                      webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      //Serial.print(j_1_A.nom_complet);
                      //lumiere_vert("j_1_A");
                      lumiere_vert("j_4_A"); // on allume sa lumiere en bleue
                      delay(2000);
                      lumiere_orange("j_4_A");
                    }
                  
                    else if (request->getParam("id_joueur")->value() == "j_1_B")
                    {
                      j_1_B.nombre_bonne_reponses = j_1_B.nombre_bonne_reponses + 1;
                      String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                      webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      //Serial.print(j_1_A.nom_complet);
                      lumiere_vert("j_1_B"); // on allume sa lumiere en bleue
                      delay(2000);
                      lumiere_orange("j_1_B");
                    }

                    else if (request->getParam("id_joueur")->value() == "j_2_B")
                    {
                      j_2_B.nombre_bonne_reponses = j_2_B.nombre_bonne_reponses + 1;
                      String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                      webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      //Serial.print(j_1_A.nom_complet);
                      lumiere_vert("j_2_B");
                      delay(2000);
                      lumiere_orange("j_2_B");
                    }
                    else if (request->getParam("id_joueur")->value() == "j_3_B")
                    {
                      j_3_B.nombre_bonne_reponses = j_3_B.nombre_bonne_reponses + 1;
                      String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                      webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      //Serial.print(j_1_A.nom_complet);
                      lumiere_vert("j_3_B");
                      delay(2000);
                      lumiere_orange("j_3_B");
                    } 

                    else if (request->getParam("id_joueur")->value() == "j_4_B")
                    {
                      j_4_B.nombre_bonne_reponses = j_4_B.nombre_bonne_reponses + 1;
                      String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                      webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      //Serial.print(j_1_A.nom_complet);
                      lumiere_vert("j_4_B");
                      delay(2000);
                      lumiere_orange("j_4_B");
                    }

                   /* String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                    webSocket.broadcastTXT(current_score.c_str(), current_score.length());*/
                  }
                
             
            }

);


server.on("/phase", HTTP_GET, [](AsyncWebServerRequest *request)
               {
                  Serial.println("demande de changement de phase");
               if (request->hasParam("current_phase")) 
               {
                 // DANs un premier temps , on recupere les nouveaux scores
                 Serial.println("reception de la phase actuelle du match");
                  match.current_phase = request->getParam("current_phase")->value();
                  
                  // dans un second temps on l'envoi a la page client la phase actuelle du match : 
                  String phase_match = "phase," + match.current_phase;
                  webSocket.broadcastTXT(phase_match.c_str(), phase_match.length());
               }
              });

server.on("/remplacement", HTTP_GET, [](AsyncWebServerRequest *request)
               {
                 Serial.println("demande de remplacement");
               if (request->hasParam("id_joueur") && request->hasParam("nouveau_joueur")) 
               {
                 // DANs un premier temps , on recupere toutes ses informations pour le remplacement
                 // a noter que : Le joueur remplacé transfere ses nombres de points au remplacant
                 // ainsi on conserve pour ce jour le nombre de bonne reponses
                  // puis on envoi ces nouveau scores a la page client via un unicast
                  
                    if (request->getParam("id_joueur")->value() == "j_1_A")
                    {
                      j_1_A.nom_complet = request->getParam("nouveau_joueur")->value();
                      
                      // la on dit a l'autre page d'effectuer a son tour le remplacemnt
                      String remplacement =   "remplacement,j_1_A," + j_1_A.nom_complet;
                      webSocket.broadcastTXT(remplacement.c_str(), remplacement.length());
                    }
                      

                    else if (request->getParam("id_joueur")->value() == "j_2_A")
                    {
                      j_2_A.nom_complet = request->getParam("nouveau_joueur")->value();
                      // la on dit a l'autre page d'effectuer a son tour le remplacemnt
                      String remplacement = "remplacement,j_2_A," +  j_2_A.nom_complet;
                      webSocket.broadcastTXT(remplacement.c_str(), remplacement.length());
                    }
                      

                    else if (request->getParam("id_joueur")->value() == "j_3_A")
                      {
                        j_3_A.nom_complet = request->getParam("nouveau_joueur")->value();
                        // la on dit a l'autre page d'effectuer a son tour le remplacemnt
                      String remplacement = "remplacement,j_3_A," + j_3_A.nom_complet;
                      webSocket.broadcastTXT(remplacement.c_str(), remplacement.length());
                      }

                    else if (request->getParam("id_joueur")->value() == "j_4_A")
                      {
                        j_4_A.nom_complet = request->getParam("nouveau_joueur")->value();
                        // la on dit a l'autre page d'effectuer a son tour le remplacemnt
                        String remplacement = "remplacement,j_4_A," + j_4_A.nom_complet;
                        webSocket.broadcastTXT(remplacement.c_str(), remplacement.length());
                      }
                  

                  
                    else if (request->getParam("id_joueur")->value() == "j_1_B")
                      {
                        j_1_B.nom_complet = request->getParam("nouveau_joueur")->value();
                        // la on dit a l'autre page d'effectuer a son tour le remplacemnt
                        String remplacement = "remplacement,j_1_B," + j_1_B.nom_complet;
                        webSocket.broadcastTXT(remplacement.c_str(), remplacement.length());
                      }

                    else if (request->getParam("id_joueur")->value() == "j_2_B")
                      {
                        j_2_B.nom_complet = request->getParam("nouveau_joueur")->value();
                        // la on dit a l'autre page d'effectuer a son tour le remplacemnt
                        String remplacement = "remplacement,j_2_B," + j_2_B.nom_complet;
                        webSocket.broadcastTXT(remplacement.c_str(), remplacement.length());
                      }

                    else if (request->getParam("id_joueur")->value() == "j_3_B")
                      {
                        j_3_B.nom_complet = request->getParam("nouveau_joueur")->value();
                        // la on dit a l'autre page d'effectuer a son tour le remplacemnt
                        String remplacement = "remplacement,j_3_B," +  j_3_B.nom_complet;
                        webSocket.broadcastTXT(remplacement.c_str(), remplacement.length());
                      }

                    else if (request->getParam("id_joueur")->value() == "j_4_B")
                      {
                        j_4_B.nom_complet = request->getParam("nouveau_joueur")->value();
                        // la on dit a l'autre page d'effectuer a son tour le remplacemnt
                        String remplacement = "remplacement,j_4_B," +  j_4_B.nom_complet;
                        webSocket.broadcastTXT(remplacement.c_str(), remplacement.length());
                      }
                  

                  

                }
                else {
                  Serial.println("erreur sur la requete");
                }
              });

server.on("/chrono", HTTP_GET, [](AsyncWebServerRequest *request)
               {
                 Serial.println("demande sur le chrono");
                 if (request->hasParam("status")) 
                {
                 String chrono = "chrono," + request->getParam("status")->value();
                 webSocket.broadcastTXT(chrono.c_str(), chrono.length());    
                }
               
              });

server.on("/joueur_fausse", HTTP_GET, [](AsyncWebServerRequest *request)
               {
                 if (request->hasParam("id_joueur")) 
                {
                 
                      if (request->getParam("id_joueur")->value() == "j_1_A")
                      {
                        Serial.println("le joueur j_1_A a fausse");
                          lumiere_rouge("j_1_A");
                          j_1_A.nombre_mauvaiz_reponses++;
                          delay(2000);
                          lumiere_orange("j_1_A");
                      }
                      else if (request->getParam("id_joueur")->value() == "j_2_A")
                      {
                          lumiere_rouge("j_2_A");
                          j_2_A.nombre_mauvaiz_reponses++;
                          delay(2000);
                          lumiere_orange("j_2_A");
                      }
                      else if (request->getParam("id_joueur")->value() == "j_3_A")
                      {
                          lumiere_rouge("j_3_A");
                          j_3_A.nombre_mauvaiz_reponses++;
                          delay(2000);
                          lumiere_orange("j_3_A");
                      }
                      else if (request->getParam("id_joueur")->value() == "j_4_A")
                      {
                          lumiere_rouge("j_4_A");
                          j_4_A.nombre_mauvaiz_reponses++;
                          delay(2000);
                          lumiere_orange("j_4_A");
                      }
                      else if (request->getParam("id_joueur")->value() == "j_1_B")
                      {
                          lumiere_rouge("j_1_B");
                          j_1_B.nombre_mauvaiz_reponses++;
                          delay(2000);
                          lumiere_orange("j_1_B");
                      }
                      else if (request->getParam("id_joueur")->value() == "j_2_B")
                      {
                          lumiere_rouge("j_2_B");
                          j_2_B.nombre_mauvaiz_reponses++;
                          delay(2000);
                          lumiere_orange("j_2_B");
                      }
                      else if (request->getParam("id_joueur")->value() == "j_3_B")
                      {
                          lumiere_rouge("j_3_B");
                          j_3_B.nombre_mauvaiz_reponses++;
                          delay(2000);
                          lumiere_orange("j_3_B");
                      }
                      else if (request->getParam("id_joueur")->value() == "j_4_B")
                      {
                          lumiere_rouge("j_4_B");
                          j_4_B.nombre_mauvaiz_reponses++;
                          delay(2000);
                          lumiere_orange("j_4_B");
                      }
                }
               
              });
 

}

void send_buzzer()
{
  //Serial.println(digitalRead(j_3_B.position_pin));
  if(digitalRead(j_1_A.position_pin) == 1)
  {
    String qui_a_buzzer = "buzzeur,j_1_A_c";
    webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
    Serial.println("le joueur j_1_A a buzze");
    lumiere_bleue("j_1_A");
    //writeFile(SD, "/historique_des_buzz.txt", "Le joueur 1 a buzze : ce texte se trouve dans le fichier historique de la carte sd");
    //readFile(SD, "/historique_des_buzz.txt");
    sound_buzzer();
    delay(3000);
    lumiere_orange("j_1_A");
    /*j_1_A.a_buzzer = 0;
    j_2_A.a_buzzer = 0;
    j_3_A.a_buzzer = 0;
    j_4_A.a_buzzer = 0;

    j_1_B.a_buzzer = 0;
    j_2_B.a_buzzer = 0;
    j_3_B.a_buzzer = 0;
    j_4_B.a_buzzer = 0;*/
  }

   else if(digitalRead(j_2_A.position_pin) == 1)
  {
    String qui_a_buzzer = "buzzeur,j_2_A_c";
    webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
    Serial.println("le joueur j_2_A a buzze");
    lumiere_bleue("j_2_A");
    //writeFile(SD, "/historique_des_buzz.txt", "Le joueur 1 a buzze : ce texte se trouve dans le fichier historique de la carte sd");
    //readFile(SD, "/historique_des_buzz.txt");
    sound_buzzer();
    //j_2_A.a_buzzer = 0;
    delay(3000);
    lumiere_orange("j_2_A");
    /*j_1_A.a_buzzer = 0;
    j_2_A.a_buzzer = 0;
    j_3_A.a_buzzer = 0;
    j_4_A.a_buzzer = 0;

    j_1_B.a_buzzer = 0;
    j_2_B.a_buzzer = 0;
    j_3_B.a_buzzer = 0;
    j_4_B.a_buzzer = 0;*/
  }

   else if(digitalRead(j_3_A.position_pin) == 1)
  {
    String qui_a_buzzer = "buzzeur,j_3_A_c";
    webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
    Serial.println("le joueur j_3_A a buzze");
    lumiere_bleue("j_3_A");
    //writeFile(SD, "/historique_des_buzz.txt", "Le joueur 1 a buzze : ce texte se trouve dans le fichier historique de la carte sd");
    //readFile(SD, "/historique_des_buzz.txt");
    sound_buzzer();
    //j_3_A.a_buzzer = 0;
    delay(3000);
    lumiere_orange("j_3_A");
 /*j_1_A.a_buzzer = 0;
    j_2_A.a_buzzer = 0;
    j_3_A.a_buzzer = 0;
    j_4_A.a_buzzer = 0;

    j_1_B.a_buzzer = 0;
    j_2_B.a_buzzer = 0;
    j_3_B.a_buzzer = 0;
    j_4_B.a_buzzer = 0;*/
  }
  else if(digitalRead(j_4_A.position_pin) == 1)
  {
    String qui_a_buzzer = "buzzeur,j_4_A_c";
    webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
    Serial.println("le joueur j_4_A a buzze");
    lumiere_bleue("j_4_A");
    //writeFile(SD, "/historique_des_buzz.txt", "Le joueur 1 a buzze : ce texte se trouve dans le fichier historique de la carte sd");
    //readFile(SD, "/historique_des_buzz.txt");
    sound_buzzer();
    //j_4_A.a_buzzer = 0;
    delay(3000);
    lumiere_orange("j_4_A");
 /*j_1_A.a_buzzer = 0;
    j_2_A.a_buzzer = 0;
    j_3_A.a_buzzer = 0;
    j_4_A.a_buzzer = 0;

    j_1_B.a_buzzer = 0;
    j_2_B.a_buzzer = 0;
    j_3_B.a_buzzer = 0;
    j_4_B.a_buzzer = 0;*/
    
  }
  else if(digitalRead(j_1_B.position_pin) == 1)
  {
    String qui_a_buzzer = "buzzeur,j_1_B_c";
    webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
    Serial.println("le joueur j_1_B a buzze");
    lumiere_bleue("j_1_B");
    //writeFile(SD, "/historique_des_buzz.txt", "Le joueur 1 a buzze : ce texte se trouve dans le fichier historique de la carte sd");
    //readFile(SD, "/historique_des_buzz.txt");
    sound_buzzer();
    //j_4_A.a_buzzer = 0;
    delay(3000);
    lumiere_orange("j_1_B");
 /*j_1_A.a_buzzer = 0;
    j_2_A.a_buzzer = 0;
    j_3_A.a_buzzer = 0;
    j_4_A.a_buzzer = 0;

    j_1_B.a_buzzer = 0;
    j_2_B.a_buzzer = 0;
    j_3_B.a_buzzer = 0;
    j_4_B.a_buzzer = 0;*/
    
  }
  else if(digitalRead(j_2_B.position_pin) == 1)
  {
    String qui_a_buzzer = "buzzeur,j_2_B_c";
    webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
    Serial.println("le joueur j_2_B a buzze");
    //j_4_A.a_buzzer = 0;
    lumiere_bleue("j_2_B");
    //writeFile(SD, "/historique_des_buzz.txt", "Le joueur 1 a buzze : ce texte se trouve dans le fichier historique de la carte sd");
    //readFile(SD, "/historique_des_buzz.txt");
    sound_buzzer();
    delay(3000);
    lumiere_orange("j_2_B");
 /*j_1_A.a_buzzer = 0;
    j_2_A.a_buzzer = 0;
    j_3_A.a_buzzer = 0;
    j_4_A.a_buzzer = 0;

    j_1_B.a_buzzer = 0;
    j_2_B.a_buzzer = 0;
    j_3_B.a_buzzer = 0;
    j_4_B.a_buzzer = 0;*/
    
  }
  else if(digitalRead(j_3_B.position_pin) == 1)
  {
    String qui_a_buzzer = "buzzeur,j_3_B_c";
    webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
    Serial.println("le joueur j_3_B a buzze");
    lumiere_bleue("j_3_B");
    //writeFile(SD, "/historique_des_buzz.txt", "Le joueur 1 a buzze : ce texte se trouve dans le fichier historique de la carte sd");
    //readFile(SD, "/historique_des_buzz.txt");
    sound_buzzer();
    
    //j_4_A.a_buzzer = 0;
    delay(3000);
    lumiere_orange("j_3_B");
 /*j_1_A.a_buzzer = 0;
    j_2_A.a_buzzer = 0;
    j_3_A.a_buzzer = 0;
    j_4_A.a_buzzer = 0;

    j_1_B.a_buzzer = 0;
    j_2_B.a_buzzer = 0;
    j_3_B.a_buzzer = 0;
    j_4_B.a_buzzer = 0;*/
    
  }
  else if(digitalRead(j_4_B.position_pin) == 1)
  {
    String qui_a_buzzer = "buzzeur,j_4_B_c";
    webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
    Serial.println("le joueur j_4_B a buzze");
    //j_4_A.a_buzzer = 0;
    lumiere_bleue("j_4_B");
    //writeFile(SD, "/historique_des_buzz.txt", "Le joueur 1 a buzze : ce texte se trouve dans le fichier historique de la carte sd");
    //readFile(SD, "/historique_des_buzz.txt");
    sound_buzzer();
    delay(3000);
    lumiere_orange("j_4_B");
 /*j_1_A.a_buzzer = 0;
    j_2_A.a_buzzer = 0;
    j_3_A.a_buzzer = 0;
    j_4_A.a_buzzer = 0;

    j_1_B.a_buzzer = 0;
    j_2_B.a_buzzer = 0;
    j_3_B.a_buzzer = 0;
    j_4_B.a_buzzer = 0;*/
    
  }

}

void IRAM_ATTR j_1_A_callback()
{
  // cette fonction se declenche lorque le j_1_A a buzze
  // dans un premier temps on emet un son
  //son();
  //dans un secodn on envoi a tous les page que le joueur a buzze
  //String donne_recu = Serial.readString() +  "," + "joueurBuzzer";
  //String qui_a_buzzer = "buzzeur,j_1_A_c";
  j_1_A.a_buzzer = 1;
  //webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
  //Serial.println("le joueur j_1_A a buzzé");
  
}

void IRAM_ATTR j_2_A_callback()
{
  // cette fonction se declenche lorque le j_1_A a buzze
  // dans un premier temps on emet un son
  //son();
  //dans un secodn on envoi a tous les page que le joueur a buzze
  //String donne_recu = Serial.readString() +  "," + "joueurBuzzer";
  //String qui_a_buzzer = "buzzeur,j_2_A_c";
  //webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
   j_2_A.a_buzzer = 1;
}

void IRAM_ATTR j_3_A_callback()
{
  // cette fonction se declenche lorque le j_1_A a buzze
  // dans un premier temps on emet un son
  //son();
  //dans un secodn on envoi a tous les page que le joueur a buzze
  //String donne_recu = Serial.readString() +  "," + "joueurBuzzer";
   j_3_A.a_buzzer = 1;
  
}

void IRAM_ATTR j_4_A_callback()
{
  // cette fonction se declenche lorque le j_1_A a buzze
  // dans un premier temps on emet un son
  //son();
  //dans un secodn on envoi a tous les page que le joueur a buzze
  //String donne_recu = Serial.readString() +  "," + "joueurBuzzer";
   j_4_A.a_buzzer = 1;
  
}

void IRAM_ATTR j_1_B_callback()
{
  // cette fonction se declenche lorque le j_1_A a buzze
  // dans un premier temps on emet un son
  //son();
  j_1_B.a_buzzer = 1;
  //dans un secodn on envoi a tous les page que le joueur a buzze
  //String donne_recu = Serial.readString() +  "," + "joueurBuzzer";
  //String qui_a_buzzer = "buzzeur,j_1_B_c";
  //webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
  
}

void IRAM_ATTR j_2_B_callback()
{
  // cette fonction se declenche lorque le j_1_A a buzze
  // dans un premier temps on emet un son
  //son();
  //dans un secodn on envoi a tous les page que le joueur a buzze
  //String donne_recu = Serial.readString() +  "," + "joueurBuzzer";
  String qui_a_buzzer = "buzzeur,j_2_B_c";
  webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
  
}

void IRAM_ATTR j_3_B_callback()
{
  // cette fonction se declenche lorque le j_1_A a buzze
  // dans un premier temps on emet un son
  //son();
  //dans un secodn on envoi a tous les page que le joueur a buzze
  //String donne_recu = Serial.readString() +  "," + "joueurBuzzer";
  String qui_a_buzzer = "buzzeur,j_3_B_c";
  webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
  
}

void IRAM_ATTR j_4_B_callback()
{
  // cette fonction se declenche lorque le j_1_A a buzze
  // dans un premier temps on emet un son
  //son();
  // dans un second temps on allume sa lumier
  //lumiere_bleue("j_4_B");
  //dans un 3e temps on envoi a tous les page que le joueur a buzze
  //String donne_recu = Serial.readString() +  "," + "joueurBuzzer";
  String qui_a_buzzer = "buzzeur,j_4_B_c";
  webSocket.broadcastTXT(qui_a_buzzer.c_str(), qui_a_buzzer.length());
  
}

void init_fast_led()
{
    FastLED.addLeds<WS2812B, DATA_PIN_A, GRB>(LED_A, NUM_LED_A);  // GRB ordering is typical
    FastLED.addLeds<WS2812B, DATA_PIN_B, GRB>(LED_B, NUM_LED_B);
}


void lumiere_bleue(String id_joueur)
{

  // cette vaariable a nous permet de savoir le point de depart : a partir de quel led on doit commencer a allumer
  int a;
  if (id_joueur == "j_1_A")
  {
    // alors dans ce cas a = 
    a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Blue;
      FastLED.show();
    }
    //delay(2000);
  }

  else if (id_joueur == "j_2_A")
  {
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Blue;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_3_A")
  {
    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Blue;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_4_A")
  {
    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Blue;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_1_B")
  {
    // alors dans ce cas a = 
    a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Blue;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_2_B")
  {
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Blue;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_3_B")
  {
    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Blue;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_4_B")
  {
    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Blue;
      FastLED.show();
    }
  }
    
}

// lumiere_orange
void lumiere_orange(String id_joueur)
{

  // cette vaariable a nous permet de savoir le point de depart : a partir de quel led on doit commencer a allumer
  int a;
  if (id_joueur == "j_1_A")
  {
    // alors dans ce cas a = 
    a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Orange;
      FastLED.show();
    }
    //delay(2000);
  }

  else if (id_joueur == "j_2_A")
  {
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Orange;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_3_A")
  {
    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Orange;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_4_A")
  {
    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Orange;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_1_B")
  {
    // alors dans ce cas a = 
    a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Orange;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_2_B")
  {
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Orange;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_3_B")
  {
    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Orange;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_4_B")
  {
    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Orange;
      FastLED.show();
    }
  }
    
}

// lumiere rouge
void lumiere_rouge(String id_joueur)
{
  // cette vaariable a nous permet de savoir le point de depart : a partir de quel led on doit commencer a allumer
  int a;
  if (id_joueur == "j_1_A")
  {
    // alors dans ce cas a = 
    a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Red;
      FastLED.show();
    }
  }

  else if (id_joueur == "j_2_A")
  {
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Red;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_3_A")
  {
    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Red;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_4_A")
  {
    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Red;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_1_B")
  {
    // alors dans ce cas a = 
    a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Red;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_2_B")
  {
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Red;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_3_B")
  {
    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Red;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_4_B")
  {
    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Red;
      FastLED.show();
    }
  }

}

// lumiere_vert
void lumiere_vert(String id_joueur)
{
  // cette vaariable a nous permet de savoir le point de depart : a partir de quel led on doit commencer a allumer
  int a;
  if (id_joueur == "j_1_A")
  {
    // alors dans ce cas a = 
    a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Green;
      FastLED.show();
    }
  }

  else if (id_joueur == "j_2_A")
  {
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Green;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_3_A")
  {
    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Green;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_4_A")
  {
    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Green;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_1_B")
  {
    // alors dans ce cas a = 
    a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Green;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_2_B")
  {
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Green;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_3_B")
  {
    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Green;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_4_B")
  {
    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Green;
      FastLED.show();
    }
  }

}



void jeux_de_lumiere()
{
  // ce bout de code sera execute lors de l'etat normal
  // l'etat normal est l'etat ou aucun joueur n'a appuyé
  // sur cet etat on allume tous les leds en orange
  // puisque les leds garde en memoire leur dernier etat 
  // alors pas besoin d'appeler cette fonction tout le temps
  // nous l'appelons unique lorsque rien se passe
  int a;
  a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Orange;
      FastLED.show();
    }
    //delay(2000);
  
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Orange;
      FastLED.show();
    }
  


    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Orange;
      FastLED.show();
    }
  

  
    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Orange;
      FastLED.show();
    }
  

  // alors dans ce cas a = 
    a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Orange;
      FastLED.show();
    }
  

 
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Orange;
      FastLED.show();
    }
  
    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Orange;
      FastLED.show();
    }

    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Orange;
      FastLED.show();
    }
  

}

// JEIX_DE_LUMIER BLANCHE
void jeux_de_lumiere_blanche()
{
  // ce bout de code sera execute lors de l'etat normal
  // l'etat normal est l'etat ou aucun joueur n'a appuyé
  // sur cet etat on allume tous les leds en orange
  // puisque les leds garde en memoire leur dernier etat 
  // alors pas besoin d'appeler cette fonction tout le temps
  // nous l'appelons unique lorsque rien se passe
  int a;
  a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::White;
      FastLED.show();
    }
    //delay(2000);
  
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::White;
      FastLED.show();
    }
  


    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::White;
      FastLED.show();
    }
  

  
    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::White;
      FastLED.show();
    }
  

  // alors dans ce cas a = 
    a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::White;
      FastLED.show();
    }
  

 
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::White;
      FastLED.show();
    }
  
    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::White;
      FastLED.show();
    }

    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::White;
      FastLED.show();
    }
  

}
//pour son de buzzer
void sound_buzzer()
{
  // cette fonction est appelée lorsque un joueur buzz
  DacAudio.FillBuffer();                
  //if(Sound.Playing==false)       
  DacAudio.Play(&Sound_buzzer);       
}

// les fonctions de la carte sd
void readFile(fs::FS &fs, const char * path){
  Serial.printf("Reading file: %s\n", path);

  File file = fs.open(path);
  if(!file){
    Serial.println("Failed to open file for reading");
    return;
  }

  Serial.print("Read from file: ");
  while(file.available()){
    Serial.write(file.read());
  }
  file.close();
}

void writeFile(fs::FS &fs, const char * path, const char * message){
  Serial.printf("Writing file: %s\n", path);

  File file = fs.open(path, FILE_WRITE);
  if(!file){
    Serial.println("Failed to open file for writing");
    return;
  }
  if(file.print(message)){
    Serial.println("File written");
  } else {
    Serial.println("Write failed");
  }
  file.close();
}
/*
void attach_interrupt_pin_j()
{
  // pour l'equipe A

  // pour j_1_A
  attachInterrupt(j_1_A.position_pin, j_1_A_callback, RISING);
  // pour j_2_A
  attachInterrupt(j_2_A.position_pin, j_2_A_callback,HIGH);
  // pour j_3_A
  attachInterrupt(j_3_A.position_pin, j_3_A_callback, HIGH);
  // pour j_4_A
  attachInterrupt(j_4_A.position_pin, j_4_A_callback, HIGH);

  // pour l'equipe B

  // pour j_1_B
  attachInterrupt(j_1_B.position_pin, j_1_B_callback, RISING);
  // pour j_2_B
  attachInterrupt(j_2_B.position_pin, j_2_B_callback, HIGH);
  // pour j_3_B
  attachInterrupt(j_3_B.position_pin, j_3_B_callback, HIGH);
  // pour j_4_A
  attachInterrupt(j_4_B.position_pin, j_4_B_callback, HIGH);
  

}*/

//  CETTE ROUTE PERMET DE RECEVOIR LE SCORE ACTUEL DU MATCH

/*

void attach_interrupt_pin_j()
{
  // pour l'equipe A

  // pour j_1_A
  attachInterrupt(j_1_A.position_pin, j_1_A_callback, HIGH);
  // pour j_2_A
  attachInterrupt(j_2_A.position_pin, j_2_A_callback,HIGH);
  // pour j_3_A
  attachInterrupt(j_3_A.position_pin, j_3_A_callback, HIGH);
  // pour j_4_A
  attachInterrupt(j_4_A.position_pin, j_4_A_callback, HIGH);

  // pour l'equipe B

  // pour j_1_B
  attachInterrupt(j_1_B.position_pin, j_1_B_callback, HIGH);
  // pour j_2_B
  attachInterrupt(j_2_B.position_pin, j_2_B_callback, HIGH);
  // pour j_3_B
  attachInterrupt(j_3_B.position_pin, j_3_B_callback, HIGH);
  // pour j_4_A
  attachInterrupt(j_4_B.position_pin, j_4_B_callback, HIGH);
  

}


// phase du match 





///









// la je met la fonction qui gere l'attachement d'interruption

// la on cree nos fonctions de callback pour gerer l'appui d'un joeur eventuel
// puis que les fonctions callback ne prennent rien en parametre en ne retourne rien de plus 
// nous allons creer pour chaque joueur une fonction callback

// pour j_1_A



void son()
{
  DacAudio.FillBuffer();                
  if(Sound.Playing==false)       
    DacAudio.Play(&Sound);
}

// les lumieres pour les leds adressables
void init_fast_led()
{
    FastLED.addLeds<WS2812B, DATA_PIN_A, GRB>(LED_A, NUM_LED_A);  // GRB ordering is typical
    FastLED.addLeds<WS2812B, DATA_PIN_B, GRB>(LED_B, NUM_LED_B;
}


void lumiere_bleue(String id_joueur)
{

  // cette vaariable a nous permet de savoir le point de depart : a partir de quel led on doit commencer a allumer
  int a;
  if (id_joueur == "j_1_A")
  {
    // alors dans ce cas a = 
    a = 0
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Blue;
      FastLED.show();
    }
  }

  else if (id_joueur == "j_2_A")
  {
    // alors dans ce cas a = 
    a = 12
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Blue;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_3_A")
  {
    // alors dans ce cas a = 
    a = 24
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Blue;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_4_A")
  {
    // alors dans ce cas a = 
    a = 36
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Blue;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_1_B")
  {
    // alors dans ce cas a = 
    a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Blue;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_2_B")
  {
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Blue;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_3_B")
  {
    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Blue;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_4_B")
  {
    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Blue;
      FastLED.show();
    }
  }
    
}



void lumiere_rouge(String id_joueur)
{
  // cette vaariable a nous permet de savoir le point de depart : a partir de quel led on doit commencer a allumer
  int a;
  if (id_joueur == "j_1_A")
  {
    // alors dans ce cas a = 
    a = 0
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Red;
      FastLED.show();
    }
  }

  else if (id_joueur == "j_2_A")
  {
    // alors dans ce cas a = 
    a = 12
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Red;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_3_A")
  {
    // alors dans ce cas a = 
    a = 24
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Red;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_4_A")
  {
    // alors dans ce cas a = 
    a = 36
    for(int i=a;i<(a+12);i++)
    {
      LED_A[i] = CRGB::Red;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_1_B")
  {
    // alors dans ce cas a = 
    a = 0;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Red;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_2_B")
  {
    // alors dans ce cas a = 
    a = 12;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Red;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_3_B")
  {
    // alors dans ce cas a = 
    a = 24;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Red;
      FastLED.show();
    }
  }

   else if (id_joueur == "j_4_B")
  {
    // alors dans ce cas a = 
    a = 36;
    for(int i=a;i<(a+12);i++)
    {
      LED_B[i] = CRGB::Red;
      FastLED.show();
    }
  }

}

*/





// les fonctions configuration et identification sont directement mises dans les routes
/*
############################################## CODE DE CONFIGURATION DES LUMIERES DES JOUEURS ################################"#"
// debut de la configuration des lumieres

// ce sketch a pour but de tester les leds

#include <FastLED.h>

// How many leds in your strip?
#define NUM_LEDS 12*4
#define NUM_LED 12*4

// For led chips like WS2812, which have a data line, ground, and power, you just
// need to define DATA_PIN.  For led chipsets that are SPI based (four wires - data, clock,
// ground, and power), like the LPD8806 define both DATA_PIN and CLOCK_PIN
// Clock pin only needed for SPI based chipsets when not using hardware SPI
#define DATA_PIN_A  7
#define DATA_PIN_B 33

//#define sound_Pin  26
//int joueurs[8] ={27,25,33,32,35,34,36,39};
#define LED_BUILTIN 2
// Define the array of leds
CRGB leds[NUM_LEDS];
CRGB led[NUM_LED];

void setup() { 
  Serial.begin(115200);
  for(int i=0;i<8;i++)
    {
      pinMode(joueurs[i],INPUT);
    }
    
    pinMode(LED_BUILTIN, OUTPUT);
     FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);  // GRB ordering is typical
     FastLED.addLeds<WS2812B, DATA_PI, GRB>(led, NUM_LED);
     //FastLED.addLeds<GS1903, DATA_PI, RGB>(led, NUM_LEDS);
    
}
int a=0;
void loop() { 

  // for(int i=0;i<8;i++)
  //   {
  //     int read = digitalRead(joueurs[i]);
  //     if(read == 1)
  //     {
  //       Serial.print("joueur  ");
  //       Serial.println(i+1);                    
  //     }      
  //   }
  //   Serial.println("+++++++++++loop+++++++++++  ");
  for(int i=a;i<(a+12);i++)
    {
      digitalWrite(LED_BUILTIN, HIGH);
      leds[i] = CRGB::Red;
      led[i] = CRGB::Blue;
      FastLED.show();
    }  
  delay(2000); //Now turn the LED off, then pause
  for(int i=a;i<(a+12);i++)
    {
      digitalWrite(LED_BUILTIN, LOW);
       leds[i] = CRGB::Black;
       led[i] = CRGB::Black;
      FastLED.show();
    }
  delay(2000);
  a+=12;
  if (a==NUM_LEDS) a=0;
}



// fin de la configuration des lumieres
// FIN ########################################################### FIN DE LA CONFIGURATION DES LUMIERES ##########################

################################################# DEBUT CONFIGURATION  SON ##############################

#include "SoundData.h"
#include "XT_DAC_Audio.h"

XT_Wav_Class Sound(sample);     
                                      
XT_DAC_Audio_Class DacAudio(26,0);    

uint32_t DemoCounter=0;               

void setup() {
  Serial.begin(115200);               
}


void loop() {
  DacAudio.FillBuffer();                
  if(Sound.Playing==false)       
    DacAudio.Play(&Sound);       
  Serial.println(DemoCounter++);        
}



################################################ FIN DE LA CONFIGURATION SON ##################################
void configuration(AsyncWebServerRequest *request) {
  
  
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
*/

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
