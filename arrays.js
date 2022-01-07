const hiver = ["Noël", "neige", "cadeau", "froid", "décoration"];
let length =  hiver.length;

document.getElementById("hiver").innerHTML = length;



const animal = ["chien", "lion", "oiseau", "serpent"];
animal.shift();

var divAnimal = document.getElementById("animal");
divAnimal.innerHTML = "<strong>Au zoo il y a: </strong> " + animal;

var paragraphe1 = document.createElement("p");
paragraphe1.innerHTML = "<strong> Le premier animal que j'ai vu était un: </strong>" + animal[1];
divAnimal.appendChild(paragraphe1);

var paragraphe2 = document.createElement("p");
paragraphe2.innerHTML = "<strong> Le deuxième animal que j'ai vu était un: </strong>" + animal[2];
divAnimal.appendChild(paragraphe2);

var paragraphe3 = document.createElement("p");
paragraphe3.innerHTML = "<strong> Le premier animal que j'ai vu était un: </strong>" + animal[0];
divAnimal.appendChild(paragraphe3);



class Chien {
    constructor(race) {
      this.chienName = race;
    }
  }
  
  monChien = new Chien("Berger Allemand");
  document.getElementById("race").innerHTML = "Mon chien est un " + monChien.chienName;



Boolean.prototype.myColor = function() {
    if (this.valueOf() == true) {
        return "green";
      } else {
        return "red";
      }
};
    
let a = true;
document.getElementById("boolean").innerHTML = a.myColor();

