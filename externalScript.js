var chaine = "Bonjour tout le monde !";
alert(chaine);

/**
 * Déclaration et portées variables
 */
// var : variable globale
var thingOne = "Hi";
var thingTwo = "Everybody";
console.log(thingOne + " " + thingTwo);

let variable1 = "Test";
// let : variable locale
{
    let variable1 = 1;
    console.log("Afficher variable1 en local " + variable1);
    
    let thingOne = 2;
    console.log("Afficher variable local thingOne " + thingOne);
}
//document.write("Afficher variable1 en global " + variable1); // Erreur
document.write("Afficher variable globale thingOne " + thingOne);
document.write("Afficher variable local variable1 " + variable1);