

//Raymond Arkesteijn

function mijnFunctie() {
    document.getElementById("list").classlist.toggle("demo");} 

function dropdown() {
    var x = document.getElementById("list").value;
    let found = false;
    let i = 0;
    while (!found){
        if(i==x){
            document.getElementById("klantVoornaam02").innerHTML = klantArray[i].voornaam;
            document.getElementById("klantAchternaam02").innerHTML = klantArray[i].achternaam;
            document.getElementById("klantWoonplaats02").innerHTML = klantArray[i].woonplaats;
            document.getElementById("klantTelefoonnummer02").innerHTML = klantArray[i].telefoonnummer;
            document.getElementById("klantEmailadres02").innerHTML = klantArray[i].emailadres;
            found = true;
        }
        i++;
    }
 } 

function Klant(voornaam, achternaam, woonplaats, telefoonnummer, emailadres) {
    this.voornaam = voornaam;
    this.achternaam = achternaam;
    this.woonplaats = woonplaats;
    this.telefoonnummer = telefoonnummer;
    this.emailadres = emailadres;
    } 
 


var klantArray = [
       new Klant(
       "",
       "",
       "",
       "",
       ""
   ),
   new Klant(
       "Jan",
       "Janssen",
       "Parijs",
       "0611889227",
       "jan@tourdefrance.nl"
   ),
       new Klant(
       "Piet",
       "Pietersen",
       "Rotterdam",
       "0606266540",
       "piet@hotmail.com"
   ),
       new Klant(
       "Joris",
       "Jorissen",
       "Den Haag",
       "0703868686",
       "joris@hotmail.com"
   ),
       new Klant(
       "Cornelis",
       "Cornelissen",
       "Voorburg",
       "0703864646",
       "cornelis@hotmail.com"
   ),
       new Klant(
       "Guus",
       "De Vries",
       "Stompwijk",
       "0615677971",
       "raresnuiter@hotmail.com"
   ),

];


function beginOpnieuw() {
    document.getElementById("voornaam").value="";
    document.getElementById("achternaam").value="";
    document.getElementById("woonplaats").value="";
    document.getElementById("telefoonnummer").value="";
    document.getElementById("emailadres").value="";
 
    result.textContext="Geen nieuwe klant opgegeven";
 }
 
 function nieuweArray(){
    let arrayLengte = klantArray.length;
    let voornaam = document.getElementById("voornaam").value;
    let achternaam = document.getElementById("achternaam").value;
    let woonplaats = document.getElementById("woonplaats").value;
    let telefoonnummer = document.getElementById("telefoonnummer").value;
    let emailadres = document.getElementById("emailadres").value;
 
    $: Klant = new Klant(voornaam, achternaam, woonplaats, telefoonnummer, emailadres);
    klantArray.push(Klant);
    arrayLengte++;
    console.log(Klant);
    
    let laatTextZien=" ";
    let nieuwsteKlant = klantArray.length -1;
    laatTextZien = "Nieuwe klant is toegevoegd: " + klantArray[nieuwsteKlant].voornaam + " " + klantArray[nieuwsteKlant].achternaam;
    alert(laatTextZien);
 
    voegNieuweOptie(nieuwsteKlant);
 }
 
 function voegNieuweOptie(i){
    var option = document.createElement("option");
    option.value = i;
    option.text = klantArray[i].voornaam + klantArray[i].achternaam;
    select.appendChild(option);
 }
 
 function addOptionValue(){
 
 }
 
 

function addOptionValue(i){
	var option = document.createElement("option");
	option.value = i;
	optioin.text = KlantArray[i].voornaam;
	select.appendChild(option);
//console.log(option)

}