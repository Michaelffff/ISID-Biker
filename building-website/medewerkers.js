
//Michael Franquet



function mijnFunctie() {
   document.getElementById("list").classlist.toggle("demo");}


function mijnDropDownFunctie() {
   var x = document.getElementById("list").value;
   let found = false;
   let i = 0;
   while (!found){
       if(i==x){
           document.getElementById("medewerkerNaam01").innerHTML = nieuweMedeArray[i].voorNaam2;
           document.getElementById("medewerkerAnaam01").innerHTML = nieuweMedeArray[i].achterNaam2;
           document.getElementById("medewerkerGeslacht01").innerHTML = nieuweMedeArray[i].geslacht2;
           document.getElementById("medewerkerFunctie01").innerHTML = nieuweMedeArray[i].functie2;
           found = true;
       }
       i++;
   }
}
function nieuweMede (voorNaam2, achterNaam2, geslacht2, functie2,) {
    this.voorNaam2 = voorNaam2;
    this.achterNaam2 = achterNaam2;
    this.geslacht2 = geslacht2;
    this.functie2 = functie2;
    
}


var nieuweMedeArray = [
       new nieuweMede(
       "..",
       "...",
       "..",
       ".."
   ),
   new nieuweMede(
       "Michael",
       "Franquet",
       "Man",
       "Developer"
   ),
       new nieuweMede(
       "Ben",
       "Kuiper",
       "Man",
       "Manager"
   ),
       new nieuweMede(
       "Raymond",
       "Arkesteijn",
       "Man",
       "Designer"
   ),
       new nieuweMede(
       "Koos",
       "van Duijn",
       "Man",
       "Developer"
   ),
       new nieuweMede(
       "Ryan",
       "Weetikniet",
       "Man",
       "HR"
   ),

];

function beginOpnieuw() {
    document.getElementById("voorNaam2").value="";
    document.getElementById("achterNaam2").value="";
    document.getElementById("geslacht2").value="";
    document.getElementById("functie2").value="";

    result.textContext="Geen nieuwe medewerker opgegeven";
}

function nieuweArray(){
    let arrayLengte = nieuweMedeArray.length;
    let voorNaam2 = document.getElementById("voorNaam2").value;
    let achterNaam2 = document.getElementById("achterNaam2").value;
    let geslacht2 = document.getElementById("geslacht2").value;
    let functie2 = document.getElementById("functie2").value;

    $: nieuweMede = new nieuweMede(voorNaam2, achterNaam2, geslacht2, functie2);
    nieuweMedeArray.push(nieuweMede);
    arrayLengte++;
    console.log(nieuweMede);
    
    let laatTextZien=" ";
    let nieuwsteMede = nieuweMedeArray.length -1;
    laatTextZien = "Nieuwe medewerker toegevoegd: " + nieuweMedeArray[nieuwsteMede].voorNaam2 + " " + nieuweMedeArray[nieuwsteMede].achterNaam2;
    alert(laatTextZien);

    voegNieuweOptie(nieuwsteMede);
}

function voegNieuweOptie(i){
    var option = document.createElement("option");
    option.value = i;
    option.text = nieuweMedeArray[i].voorNaam2 + nieuweMedeArray[i].achterNaam2;
    select.appendChild(option);
    get.getElementById("voegnieuweoptie").value=option
}

function addSelectValue(){

}








//Koos






