#include "BluetoothA2DPSource.h"
#include "SPIFFS.h"

BluetoothA2DPSource a2dp_source;
File sound_file;
const char* file_name = "/buzzer.wav";
const int sd_ss_pin = 5;
const int frame_size_bytes = sizeof(int16_t) * 2;

// callback used by A2DP to provide the sound data
int32_t get_sound_data(Channels* data, int32_t len) {
  // the data in the file must be in int16 with 2 channels 
  size_t result_len_bytes = sound_file.read((uint8_t*)data, len * frame_size_bytes );
  // result is in number of frames
  int32_t result_len = result_len_bytes / frame_size_bytes;
  ESP_LOGD("get_sound_data", "%d -> %d",len );
  return result_len;
}

// Arduino Setup
void setup(void) {
  Serial.begin(115200);

  // Setup SD and open file
  SPIFFS.begin();
  sound_file = SPIFFS.open(file_name, FILE_READ);

  // start the bluetooth
  Serial.println("starting A2DP...");
  a2dp_source.start_raw("BT-SPEAKER", get_sound_data);
  //a2dp_source.write_data(get_sound_data);
  //delay(2000);
  
}

// Arduino loop - repeated processing 
void loop() {
}
