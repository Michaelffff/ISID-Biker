function Accessoires(naam, merk, maat, kleur) {
    this.naam = naam;
    this.merk = merk;
    this.maat = maat;
    this.kleur = kleur;
    } 
 

function mijnFunctie() {
   document.getElementById("list").classlist.toggle("demo");}

var accessoiresArray = [
       new Accessoires(
       "",
       "",
       "",
       ""
   ),
   new Accessoires(
       "Helm",
       "Valzacht",
       "L",
       "Zwart"
   ),
       new Accessoires(
       "Hangslot",
       "Slang",
       "XL",
       "Geel"
   ),
       new Accessoires(
       "Kinderzitje",
       "Zitlekker",
       "S",
       "Grijs"
   ),
       new Accessoires(
       "Reparatieset",
       "Panne",
       "M",
       "Rood"
   ),
       new Accessoires(
       "Lampenset",
       "Led",
       "XS",
       "Oranje"
   ),

];


document.getElementById("demo").innerHTML = accessoiresArray[0].naam;
document.getElementById("info").innerHTML = accessoiresArray[0].merk



function dropdown() {
   var x = document.getElementById("list").value;
   let found = false;
   let i = 0;
   while (!found){
       if(i==x){
           document.getElementById("accessoiresNaam01").innerHTML = accessoiresArray[i].naam;
           document.getElementById("accessoiresMerk01").innerHTML = accessoiresArray[i].merk;
           document.getElementById("accessoiresMaat01").innerHTML = accessoiresArray[i].maat;
           document.getElementById("accessoiresKleur01").innerHTML = accessoiresArray[i].kleur;
           
           found = true;
       }
       i++;
   }
} 

