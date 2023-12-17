// dans un premier temps j'inclus les librairies necessaires
// a la connexion du node mcu 
#include <ESP8266WebServer.h> // include ESP8266WebServer lib add also espwifi : no i chek it not add esp wifi so i included it my_self
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include "page_1.h"
#include "page_2.h"
#include "page_3.h"
#include "page_4.h"
#include "page_5.h"

// dans ce cas le node mcu va se comporter comme un ap

ESP8266WebServer my_server(80); // associate server with library  creating objet server

// setup the wifi esp
char ssidAP[] = "WIFI_ESP"; // WLAN SSID and password
char passwordAP[] = "Scoreurensa2022";

// declarons ici tous les variables qu'on aura besoin
String username , password, nameMatch, nameEquipeA, nameEquipeB, joueurA1, joueurA2, joueurA3, joueurA4;
String joueurB1, joueurB2, joueurB3, joueurB4, json;

void homee()
{

my_server.send(200, "text/html", page_identification);
  
}

void formulaire_page()
{// debut
  
username = my_server.arg("username");
password = my_server.arg("password");
if (username == "team_codeurs" && password == "team_codeurs21")
{
my_server.send(200, "text/html", page_formulaire);
}

} // fin
void admin_page()
{

  nameMatch = my_server.arg("nameMatch");
  nameEquipeA = my_server.arg("nomEquipeA");
  nameEquipeB = my_server.arg("nomEquipeB");
  joueurA1 = my_server.arg("joueurA1");
  joueurA2 = my_server.arg("joueurA2");
  joueurA3 = my_server.arg("joueurA3");
  joueurA4 = my_server.arg("joueurA4");

  joueurB1 = my_server.arg("joueurB1");
  joueurB2 = my_server.arg("joueurB2");
  joueurB3 = my_server.arg("joueurB3");
  joueurB4 = my_server.arg("joueurB4");
  my_server.send(200, "text/html", page_administrateur);
}

void client_page()
{
  my_server.send(200, "text/html", page_client);
}

void vainqueur_page()
{
  my_server.send(200, "text/html", page_vainqueur);
}


void setup() {
  // put your setup code here, to run once:
// on demarre la commmunication serie pour recevoir des donnees de l'arduino micro
Serial.begin(115200); 



// notre esp va se comporter comme un point d'acces
WiFi.mode(WIFI_AP); 
delay(1000); // on attend 1seconde
// etablit le mot de passe et le nom du wifi 
WiFi.softAP(ssidAP, passwordAP); 

IPAddress myIP = WiFi.softAPIP();
Serial.print("l'adresse IP est : ");
Serial.println(myIP);

 // la je demarre le serveur
my_server.begin();

// maintenant les api du serveur
my_server.on("/", homee); 
//  la une fois un client connecte notre serveur va lui generer une page html  qui est l'output de la fonction  base
my_server.on("/demandeForm", formulaire_page); 
// map URLs to functions: replace ledg function
my_server.on("/admin", admin_page); 
my_server.on("/client", client_page); 
my_server.on("/vainqueur_page", vainqueur_page); 

// fin du setup
}


void loop() {
  // put your main code here, to run repeatedly:
  my_server.handleClient();
 /* if(Serial.available()>0)
  {
    str = Serial.
readString();
  }
*/
}
