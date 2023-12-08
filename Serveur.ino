/* 
Maintenat que le xml et le websokcet est configure 
nous testons les requetes dans tous les sens



*/

/*
nouveau pinout :
Joueur j_1_A = {"", 0,0, 36,0}; // 
Joueur j_2_A = {"", 0,0, 39,0};
Joueur j_3_A = {"", 0,0, 34,0}, j_4_A  = {"", 0,0, 35,0}, j_1_B = {"", 0,0, 4,0}, j_2_B = {"", 0,0, 16,0}, j_3_B = {"", 0,0, 17,0}, j_4_B = {"", 0,0, 5,0};

ancien pinout
Joueur j_1_A = {"", 0,0, 33,0}; // 
Joueur j_2_A = {"", 0,0, 39,0};
Joueur j_3_A = {"", 0,0, 34,0}, j_4_A  = {"", 0,0, 35,0}, j_1_B = {"", 0,0, 15,0}, j_2_B = {"", 0,0, 4,0}, j_3_B = {"", 0,0, 16,0}, j_4_B = {"", 0,0, 17,0};


*/
#include "Arduino.h"
//#include "Audio.h"
//#include "FS.h"
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <WebSocketsServer.h>
#include <Preferences.h>
#include <ESPmDNS.h>
#include "soc/rtc_wdt.h"

#include <FastLED.h>
//#include "buzzer.h"
//#include "driver/i2s.h"

   

// la bibliotheque pour gerer la memoire spiffs
#include "SPIFFS.h"

//Ticker thread;
// 
// initialisation des serveurs
AsyncWebServer server(80);
WebSocketsServer webSocket = WebSocketsServer(81);

// la j'inclus les identifiants wifi

char ssidAP[] = "ENSA_BUZZER";
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
#define DATA_PIN_A  33
#define DATA_PIN_B 21
// le nombre totale de leds adressables de chacun des coté
#define NUM_LED_A 12*4
#define NUM_LED_B 12*4

// enfin le CRGB  DESIGNANT le groupe des leds
// un tableau de type CRGB
CRGB LED_A[NUM_LED_A];
CRGB LED_B[NUM_LED_B];


// initialisation pour le son 

// Wav File reading
   // How many bytes to read from wav file at a time

#define I2S_DOUT      25
#define I2S_BCLK      27
#define I2S_LRC       26

Audio audio;
//  I2S configuration

      
      
   
      
  
//  Global Variables/objects    
                                 // Object for root of SD card directory
 //   ---------------------------------------------------------------------------------------
/*pour la sd carrd
#define SCK  14
#define MISO  12
#define MOSI  13
#define CS  17*/

//SPIClass spi = SPIClass(VSPI);

/*void init_spi_com()
{
  /spi.begin(SCK, MISO, MOSI, CS);
  if (!SD.begin(CS,spi,80000000)) {
    Serial.println("Card Mount Failed");
    return;
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
*/
// les fonctions associees au son
/*
void initSound()
{
  audio.setPinout(I2S_BCLK, I2S_LRC, I2S_DOUT);
  audio.setVolume(100); // 0...100   
}

void playSound(const char* path)
{
  audio.connecttoFS(SPIFFS, path);
  //for(int i = 0; i < 500; i++)
 // {
  
 // }
}
void play()
{
  for(int i = 0; i < 1000; i++)
    audio.loop();
}
*/


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

void ledBuiltinOff()
{

  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);
}





void setup()
{
  ledBuiltinOff();
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
  initSound();
  start_wifi_ip(ssidAP, passwordAP);
  //playSound("/incorrec_song.wav");
  //play();
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
          Serial.println(preferences.getString("password"));
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
                     
                     String fin_match = "fin_match,!";
                       webSocket.broadcastTXT(fin_match.c_str(), fin_match.length()); 
                      //request->redirect("/finMatch"); 
                      
                       
                        
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
                      //delay(2000);
                      lumiere_orange("j_1_A");
                    }
                       

                    else if (request->getParam("id_joueur")->value() == "j_2_A")
                    {
                      j_2_A.nombre_bonne_reponses = j_2_A.nombre_bonne_reponses + 1;
                      String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                    webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      lumiere_vert("j_2_A"); // on allume sa lumiere en bleue
                      //delay(2000);
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
                      //delay(2000);
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
                      //delay(2000);
                      lumiere_orange("j_4_A");
                    }
                  
                    else if (request->getParam("id_joueur")->value() == "j_1_B")
                    {
                      j_1_B.nombre_bonne_reponses = j_1_B.nombre_bonne_reponses + 1;
                      String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                      webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      //Serial.print(j_1_A.nom_complet);
                      lumiere_vert("j_1_B"); // on allume sa lumiere en bleue
                      //delay(2000);
                      lumiere_orange("j_1_B");
                    }

                    else if (request->getParam("id_joueur")->value() == "j_2_B")
                    {
                      j_2_B.nombre_bonne_reponses = j_2_B.nombre_bonne_reponses + 1;
                      String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                      webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      //Serial.print(j_1_A.nom_complet);
                      lumiere_vert("j_2_B");
                      //delay(2000);
                      lumiere_orange("j_2_B");
                    }
                    else if (request->getParam("id_joueur")->value() == "j_3_B")
                    {
                      j_3_B.nombre_bonne_reponses = j_3_B.nombre_bonne_reponses + 1;
                      String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                      webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      //Serial.print(j_1_A.nom_complet);
                      lumiere_vert("j_3_B");
                      //delay(2000);
                      lumiere_orange("j_3_B");
                    } 

                    else if (request->getParam("id_joueur")->value() == "j_4_B")
                    {
                      j_4_B.nombre_bonne_reponses = j_4_B.nombre_bonne_reponses + 1;
                      String current_score = "score," + String(match.current_score_A) + "," + String(match.current_score_B);
                      webSocket.broadcastTXT(current_score.c_str(), current_score.length());
                      //Serial.print(j_1_A.nom_complet);
                      lumiere_vert("j_4_B");
                      //delay(2000);
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
                        
                         //playSound("/incorrec_song.wav");
                            //play();
                        Serial.println("le joueur j_1_A a fausse");
                          lumiere_rouge("j_1_A");
                          j_1_A.nombre_mauvaiz_reponses++;
                          //delay(2000);
                          lumiere_orange("j_1_A");
                      }
                      else if (request->getParam("id_joueur")->value() == "j_2_A")
                      {
                          //playSound("/incorrec_song.wav");
                          //play();
                          Serial.println("le joueur j_2_A a fausse");
                          lumiere_rouge("j_2_A");
                          j_2_A.nombre_mauvaiz_reponses++;
                          //delay(2000);
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
                          //delay(2000);
                          lumiere_orange("j_4_A");
                      }
                      else if (request->getParam("id_joueur")->value() == "j_1_B")
                      {
                          lumiere_rouge("j_1_B");
                          j_1_B.nombre_mauvaiz_reponses++;
                          //delay(2000);
                          lumiere_orange("j_1_B");
                      }
                      else if (request->getParam("id_joueur")->value() == "j_2_B")
                      {
                          lumiere_rouge("j_2_B");
                          j_2_B.nombre_mauvaiz_reponses++;
                          //delay(2000);
                          lumiere_orange("j_2_B");
                      }
                      else if (request->getParam("id_joueur")->value() == "j_3_B")
                      {
                          lumiere_rouge("j_3_B");
                          j_3_B.nombre_mauvaiz_reponses++;
                          //delay(2000);
                          lumiere_orange("j_3_B");
                      }
                      else if (request->getParam("id_joueur")->value() == "j_4_B")
                      {
                          lumiere_rouge("j_4_B");
                          j_4_B.nombre_mauvaiz_reponses++;
                          //delay(2000);
                          lumiere_orange("j_4_B");
                      }
                }
               
              });

             
server.on("/countdown", HTTP_GET, [](AsyncWebServerRequest *request)
               {
                 if (request->hasParam("delay")) 
                {
                 String delay_countdown = request->getParam("delay")->value();
                 String remplacement = "countdown," +  delay_countdown;
                 webSocket.broadcastTXT(remplacement.c_str(), remplacement.length());
                 Serial.println("countdown envoye");
                    
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
    
    //delay(3000);
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
    
    //j_2_A.a_buzzer = 0;
    //delay(3000);
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
    
    //j_3_A.a_buzzer = 0;
    //delay(3000);
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
    
    //j_4_A.a_buzzer = 0;
    //delay(3000);
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
    
    //j_4_A.a_buzzer = 0;
    //delay(3000);
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
   
    //delay(3000);
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
    
    
    //j_4_A.a_buzzer = 0;
    //delay(3000);
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
    
    //delay(3000);
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
/*
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
*/
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
      LED_A[i] = CRGB::White;Play
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


// les fonctions de la carte sd
/*
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
*/
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


// finalement pour le son
/*#include "SPIFFS.h"
#include "driver/i2s.h"                 // Library of I2S routines, comes with ESP32 standard install




void setup() {    
    Serial.begin(115200);                               // Used for info/debug
    if(!SPIFFS.begin(true)){
    Serial.println("Probleme avec la memoire spifss");
    return;
}
    //SDCardInit();
    i2s_driver_install(i2s_num, &i2s_config, 0, NULL);
    i2s_set_pin(i2s_num, &pin_config);
    // get the wav file from the SD card
    WavFile = SPIFFS.open("/buzzer.wav", "r");                   // Open the wav file
    if(WavFile==false)
      Serial.println("Could not open 'wavfile.wav'");
    else
    {
      WavFile.read((byte *) &WavHeader,44);               // Read in the WAV header, which is first 44 bytes of the file. 
                                                          // We have to typecast to bytes for the "read" function
      DumpWAVHeader(&WavHeader);                          // Dump the header data to serial, optional!
      if(ValidWavData(&WavHeader))                        // optional if your sure the WAV file will be valid.
        i2s_set_sample_rates(i2s_num, WavHeader.SampleRate);      //set sample rate 
    }
}


void loop()
{    
    PlayWav(); 
    //// Have to keep calling this to keep the wav file playing

    // Your normal code to do your task can go here
}

void PlayWav()
{
  static bool ReadingFile=true;                       // True if reading file from SD. false if filling I2S buffer
  static byte Samples[NUM_BYTES_TO_READ_FROM_FILE];   // Memory allocated to store the data read in from the wav file
  static uint16_t BytesRead;                          // Num bytes actually read from the wav file which will either be
                                                      // NUM_BYTES_TO_READ_FROM_FILE or less than this if we are very
                                                      // near the end of the file. i.e. we can't read beyond the file.

  if(ReadingFile)                                     // Read next chunk of data in from file if needed
  {
    BytesRead=ReadFile(Samples);                      // Read data into our memory buffer, return num bytes read in
    ReadingFile=false;                                // Switch to sending the buffer to the I2S
  }
  else
  {
    ReadingFile=FillI2SBuffer(Samples,BytesRead); 
  }
           // We keep calling this routine until it returns true, at which point
                                                    // this will swap us back to Reading the next block of data from the file.
                                                      // Reading true means it has managed to push all the data to the I2S 
                                                      // Handler, false means there still more to do and you should call this
                                                      // routine again and again until it returns true.
}

uint16_t ReadFile(byte* Samples)
{
    static uint32_t BytesReadSoFar=0;                   // Number of bytes read from file so far
    uint16_t BytesToRead;                               // Number of bytes to read from the file
    
    if(BytesReadSoFar+NUM_BYTES_TO_READ_FROM_FILE>WavHeader.DataSize)   // If next read will go past the end then adjust the 
      BytesToRead=WavHeader.DataSize-BytesReadSoFar;                    // amount to read to whatever is remaining to read
    else
      BytesToRead=NUM_BYTES_TO_READ_FROM_FILE;                          // Default to max to read
      
    WavFile.read(Samples,BytesToRead);                  // Read in the bytes from the file
    BytesReadSoFar+=BytesToRead;                        // Update the total bytes red in so far
    
    if(BytesReadSoFar>=WavHeader.DataSize)              // Have we read in all the data?
    {
      WavFile.seek(44);                                 // Reset to start of wav data  
      BytesReadSoFar=0;                                 // Clear to no bytes read in so far                            
      delay(5000);
    }
    return BytesToRead;                                 // return the number of bytes read into buffer
}

bool FillI2SBuffer(byte* Samples,uint16_t BytesInBuffer)
{
    // Writes bytes to buffer, returns true if all bytes sent else false, keeps track itself of how many left
    // to write, so just keep calling this routine until returns true to know they've all been written, then
    // you can re-fill the buffer
    
    size_t BytesWritten;                        // Returned by the I2S write routine, 
    static uint16_t BufferIdx=0;                // Current pos of buffer to output next
    uint8_t* DataPtr;                           // Point to next data to send to I2S
    uint16_t BytesToSend;                       // Number of bytes to send to I2S
    
    // To make the code eaier to understand I'm using to variables to some calculations, normally I'd write this calcs
    // directly into the line of code where they belong, but this make it easier to understand what's happening
    
    DataPtr=Samples+BufferIdx;                               // Set address to next byte in buffer to send out
    BytesToSend=BytesInBuffer-BufferIdx;                     // This is amount to send (total less what we've already sent)
    i2s_write(i2s_num,DataPtr,BytesToSend,&BytesWritten,1);  // Send the bytes, wait 1 RTOS tick to complete
    BufferIdx+=BytesWritten;                                 // increasue by number of bytes actually written
    
    if(BufferIdx>=BytesInBuffer)                 
    {
      // sent out all bytes in buffer, reset and return true to indicate this
      BufferIdx=0; 
      return true;                             
    }
    else
      return false;       // Still more data to send to I2S so return false to indicate this
}

/*void SDCardInit()
{        
    pinMode(SD_CS, OUTPUT); 
    digitalWrite(SD_CS, HIGH); // SD card chips select, must use GPIO 5 (ESP32 SS)
    if(!SD.begin(SD_CS))
    {
        Serial.println("Error talking to SD card!");
        while(true);                  // end program
    }
}

bool ValidWavData(WavHeader_Struct* Wav)
{
  
  if(memcmp(Wav->RIFFSectionID,"RIFF",4)!=0) 
  {    
    Serial.print("Invalid data - Not RIFF format");
    return false;        
  }
  if(memcmp(Wav->RiffFormat,"WAVE",4)!=0)
  {
    Serial.print("Invalid data - Not Wave file");
    return false;           
  }
  if(memcmp(Wav->FormatSectionID,"fmt",3)!=0) 
  {
    Serial.print("Invalid data - No format section found");
    return false;       
  }
  if(memcmp(Wav->DataSectionID,"data",4)!=0) 
  {
    Serial.print("Invalid data - data section not found");
    return false;      
  }
  if(Wav->FormatID!=1) 
  {
    Serial.print("Invalid data - format Id must be 1");
    return false;                          
  }
  if(Wav->FormatSize!=16) 
  {
    Serial.print("Invalid data - format section size must be 16.");
    return false;                          
  }
  if((Wav->NumChannels!=1)&(Wav->NumChannels!=2))
  {
    Serial.print("Invalid data - only mono or stereo permitted.");
    return false;   
  }
  if(Wav->SampleRate>48000) 
  {
    Serial.print("Invalid data - Sample rate cannot be greater than 48000");
    return false;                       
  }
  if((Wav->BitsPerSample!=8)& (Wav->BitsPerSample!=16)) 
  {
    Serial.print("Invalid data - Only 8 or 16 bits per sample permitted.");
    return false;                        
  }
  return true;
}


void DumpWAVHeader(WavHeader_Struct* Wav)
{
  if(memcmp(Wav->RIFFSectionID,"RIFF",4)!=0)
  {
    Serial.print("Not a RIFF format file - ");    
    PrintData(Wav->RIFFSectionID,4);
    return;
  } 
  if(memcmp(Wav->RiffFormat,"WAVE",4)!=0)
  {
    Serial.print("Not a WAVE file - ");  
    PrintData(Wav->RiffFormat,4);  
    return;
  }  
  if(memcmp(Wav->FormatSectionID,"fmt",3)!=0)
  {
    Serial.print("fmt ID not present - ");
    PrintData(Wav->FormatSectionID,3);      
    return;
  } 
  if(memcmp(Wav->DataSectionID,"data",4)!=0)
  {
    Serial.print("data ID not present - "); 
    PrintData(Wav->DataSectionID,4);
    return;
  }  
  // All looks good, dump the data
  Serial.print("Total size :");Serial.println(Wav->Size);
  Serial.print("Format section size :");Serial.println(Wav->FormatSize);
  Serial.print("Wave format :");Serial.println(Wav->FormatID);
  Serial.print("Channels :");Serial.println(Wav->NumChannels);
  Serial.print("Sample Rate :");Serial.println(Wav->SampleRate);
  Serial.print("Byte Rate :");Serial.println(Wav->ByteRate);
  Serial.print("Block Align :");Serial.println(Wav->BlockAlign);
  Serial.print("Bits Per Sample :");Serial.println(Wav->BitsPerSample);
  Serial.print("Data Size :");Serial.println(Wav->DataSize);
}

void PrintData(const char* Data,uint8_t NumBytes)
{
    for(uint8_t i=0;i<NumBytes;i++)
      Serial.print(Data[i]); 
      Serial.println();  
}*/
