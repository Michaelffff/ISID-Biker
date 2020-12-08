function buildImage(url) {
    var img = new Image();
    img.onerror = function() {
      console.log("could not load image on URL " + url);
    };
    img.src = url;
    return img;
  }

function fiets(type, merk, geslacht, maat, foto) {
     this.type = type;
     this.merk = merk;
     this.geslacht = geslacht;
     this.maat = maat;
     this.foto = foto;
     } 

     

function mijnFunctie() {
    document.getElementById("list").classlist.toggle("demo");}

var fietsArray = [
        new fiets(
        "Racefiets",
        "Koga",
        "Heren",
        "58",
        buildImage("https://media.s-bol.com/Yo8Vmyrx22K/1200x808.jpg")
    ),
        new fiets(
        "Stadsfiets",
        "Stella",
        "Dames",
        "53"
    ),
        new fiets(
        "E-Stadsfiets",
        "Gazelle",
        "Heren",
        "58"
    ),
        new fiets(
        "E-Stadsfiets",
        "Stella",
        "Dames",
        "53"
    ),
        new fiets(
        "Kinderfiets",
        "Lego",
        "Unisex",
        "25"
    ),
        ]



function mijnDropDownFunctie() {
    var x = document.getElementById("list").value;
    let found = false;
    let i = 0;
    while (!found){
        if(i==x){
            document.getElementById("fietstype01").innerHTML = fietsArray[i].type;
            document.getElementById("fietsmerk01").innerHTML = fietsArray[i].merk;
            document.getElementById("fietsgeslacht01").innerHTML = fietsArray[i].geslacht;
            document.getElementById("fietsmaat01").innerHTML = fietsArray[i].maat;
            document.getElementById("fietsfoto01").innerHTML = fietsArray[i].foto;
            found = true;
        }
        i++;
    }

    
}