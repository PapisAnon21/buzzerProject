# Ouvrir le fichier audio en mode binaire
with open('buzzer.wav', 'rb') as audio_file:
    # Lire les données binaires du fichier audio
    audio_data = audio_file.read()

# Convertir les données binaires en une chaîne hexadécimale
hex_data = audio_data.hex()

# Écrire la chaîne hexadécimale dans un fichier de sortie
with open('audio_hex.txt', 'w') as output_file:
    output_file.write(hex_data)
