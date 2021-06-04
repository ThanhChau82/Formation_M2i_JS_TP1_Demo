document.write("Demo déclaration et portée des variables");

// var : variable globale
var chaine = "Demo Langage JavaScript, prise en mains !";
alert(chaine);

var thingOne = "Hi";
var thingTwo = "Everybody";
console.log(thingOne + " " + thingTwo); // => "Hi Everybody"

// let : variable locale
let thingThree = "Test";
{
    let thingThree = 1;
    console.log("Afficher variable local thingThree : " + thingThree); // => "Afficher variable local thingThree : 1"

    let thingOne = 2;
    console.log("Afficher variable local thingOne : " + thingOne); // "Afficher variable local thingOne : 2"
}

console.log("Afficher variable globale thingOne : " + thingOne); // "Afficher variable globale thingOne : Hi"

// const : constant
const PI = 3.14;
PI = 3; // Erreur