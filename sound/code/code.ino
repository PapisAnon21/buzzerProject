#include "buzzer.h"
#include "XT_DAC_Audio.h"

XT_Wav_Class Sound_buzzer(buzzer_song);    
//XT_Wav_Class Sound_correct_answer(correct_song);  
//XT_Wav_Class Sound_incorrect_answer(incorrect_song);   
                                      
XT_DAC_Audio_Class DacAudio(26,0);    

uint32_t DemoCounter=0;               

void setup() {
  Serial.begin(115200);               
}


void loop() {
sound_buzzer();
delay(3000);
//sound_correct_answer();
//delay(3000);
//sound_incorrect_answer();
//delay(3000);      
}


void sound_buzzer()
{
  // cette fonction est appelée lorsque un joueur buzz
  DacAudio.FillBuffer();                
  //if(Sound.Playing==false)       
    DacAudio.Play(&Sound_buzzer);       
}
