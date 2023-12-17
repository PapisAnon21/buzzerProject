const char page_formulaire[] PROGMEM = R"=====(
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Formulaire</title>
    <style>
body
{
    font-family: 'Georgia';
}        
        .name_match
{
   display: flex;
   flex-direction: column;
   text-align: center;
   
}
.name_match input
{
    width: 20%;
    margin: auto;
    margin-top: 12px;
}
.grand_conteneur
{
    margin: 40px;
    border: 1px solid gray;
    padding-bottom: 12px;
    background-color: #ffffff;
    font-weight: bold;
    box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
}
fieldset:hover
{
    border: 2px solid rgb(223, 142, 20);
    border-radius: 3px;
}
input
{
    box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
}
fieldset
{
    box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    border: solid 1px rgb(186, 185, 185);
    padding-left: 0cm;
    padding-right: 0cm;
}

h1
{
    text-align: center;
}

.equipes
{
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}
.corpsA
{
    display: flex;
}
.corpsB
{
    display: flex;
}
.name_equipe
{
    margin-top: 70px;
}
.labels_champs
{
    margin-left: 15px;
}
.line
{
    margin: 12px;
}
.equipeA
{
    font-size: 20px;
    width: 40%;
    margin: auto;
}
.equipeB
{
    font-size: 20px;
    width: 40%;
    margin: auto;
}
.enteteA
{
    text-align: center;
    padding-bottom: 0.4cm;
    background-color: rgb(223, 142, 20);
    padding-top: 6px ;
    
}
.enteteB
{
    text-align: center;
    padding-bottom: 0.4cm;
    background-color: rgb(223, 142, 20);
    padding-top: 6px ;
}
Button
{
   margin-left: 45%;
   margin-top: 50px;
   width: 3cm;
   height: 1cm;
   border: solid 1px gray 3px;
   border-radius: 5px;
   background-color: rgb(248, 241, 231);
   
}

Button:hover
{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    cursor: pointer;
    background-color: rgb(223, 142, 20) ;
}

.name_equipe
        {
            margin-left: 0.5cm;
        }
legend
{
    display: block;
    margin-left: 0.2cm;
}

@media (max-width:1000px) {
    .grand_conteneur
{
    padding: 0px;
    margin: 0px;
    border: 1px solid black;
    padding-bottom: 12px;
    background-color: #ffffff;
    font-weight: bold;
    box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
    
.equipeA
{
    font-size: 20px;
    width: 40%;
    margin-left: 0px;
    
}
.equipeB
{
    font-size: 20px;
    width: 40%;
    margin: auto;
}

.enteteA
{
    font-size: 16px;
    text-align: center;             /*rgb(223, 142, 20);*/
    border-bottom: 1px solid black;
    background-color:  rgb(223, 142, 20) ;
    padding-top: 6px ;
}
.enteteB
{
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid black;
    background-color: rgb(223, 142, 20);
    padding-top: 6px ;
}
}
    </style>
</head>
<body>
<a href="send?" id="envoi"></a>    
<div class="grand_conteneur">

    <div class="name_match">
        <h1>EQUIPES</h1>
        <label for="nomatch"> MATCH :  </label>
        <input type="text" id="nomatch" placeholder="nom du match">
    </div>
    
    <div class="equipes">
        <div class="equipeA">
            
            <fieldset>
                <legend>Equipe A</legend>
                    <div class="enteteA">
                            <p>
                                Saisir le Nom de l'Equipe et des Joueurs
                            </p>
                    </div>
                    <div class="corpsA">

                        <div class="name_equipe">
                            <label for="">Nom de l' Equipe : </label>
                            <input type="text" id="teamA" required>

                        </div>
                        <div class="labels_champs">
                                <div class=" line line_1">
                                    <label for="">Joueur 1 : </label>
                                    <input type="text" id="joueur1A" required>
                                </div>
                                <div class="line line_2">
                                    <label for="">Joueur 2 : </label>
                                    <input type="text" id="joueur2A" required>
                                </div>
                                <div class=" line line_3">
                                    <label for="">Joueur 3 : </label>
                                    <input type="text" id="joueur3A" required>
                                </div>
                                <div class=" line line_4">
                                    <label for="">Joueur 4 : </label>
                                    <input type="text" id="joueur4A" required>
                                </div>
                            
                        </div>
                    </div>
                    <div class="footerA">

                    </div>
            </fieldset>
        </div>
        
        
        <div class="equipeB">
            <fieldset>
                <legend>Equipe B</legend>
                    <div class="enteteB">
                            <p>
                                Saisir le Nom de l'Equipe et des Joueurs
                            </p>
                    </div>
                    <div class="corpsB">

                        <div class="name_equipe">
                            <label for="">Nom de l' Equipe : </label>
                            <input type="text" id="teamB" required>

                        </div>
                        <div class="labels_champs">
                                <div class=" line line_1">
                                    <label for="">Joueur 1 : </label>
                                    <input type="text" id="joueur1B" required>
                                </div>
                                <div class="line line_2">
                                    <label for="">Joueur 2 : </label>
                                    <input type="text" id="joueur2B" required>
                                </div>
                                <div class=" line line_3">
                                    <label for="">Joueur 3 : </label>
                                    <input type="text" id="joueur3B" required>
                                </div>
                                <div class=" line line_4">
                                    <label for="">Joueur 4 : </label>
                                    <input type="text" id="joueur4B" required>
                                </div>
                            
                        </div>
                    </div>
                    <div class="footerB">

                    </div>
            </fieldset>
            
        </div>
    
    </div>
    <Button onclick = "enregistrement_teams()">ENVOYER</Button>
</div>
<script>
     function enregistrement_teams(){
        var name_match= document.getElementById("nomatch").value;
        var teamA = document.getElementById("password").value;
        var joueur1A = document.getElementById("joueur1A").value;
        var joueur2A = document.getElementById("joueur2A").value;
        var joueur3A = document.getElementById("joueur3A").value;
        var joueur4A = document.getElementById("joueur4A").value;
        var teamB = document.getElementById("teamB").value; 
        var joueur1B = document.getElementById("joueur1B").value;
        var joueur2B = document.getElementById("joueur2B").value;
        var joueur3B = document.getElementById("joueur3B").value;
        var joueur4B = document.getElementById("joueur4B").value;
        var link = document.getElementById("envoi");
        link.href = link.href +"nameMatch="+ name_match + "&" +"nameEquipeA=" + teamA + "&" + "joueurA1="+ joueur1A + "&" +"joueurA2=" + joueur2A + "&" + "joueurA3="+ joueur3A + "&" +"joueurA4=" + joueur4A + "&" +"nameEquipeB=" + teamB + "&" + "joueurB1="+ joueur1B + "&" +"joueurB2=" + joueur2B + "&" + "joueurB3="+ joueur3B + "&" +"joueurB4=" + joueur4B;
        link.click();
  }
</script>
</body>
</html>
  
)=====";
