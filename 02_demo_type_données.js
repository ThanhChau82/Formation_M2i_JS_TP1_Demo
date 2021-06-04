document.writeln("Demo sur les types de données.");
document.writeln("Au contraire de typescript, en JS, les variables ne sont pas typés.");
document.writeln("En JS, il y a 5 types de données susceptibles de contenir des valeurs : string, number, boolean, object, function");
document.writeln("2 types qui ne peuvent pas contenir des objets : null, undefined");

var x = 2;
console.log("La variable x est : " + x + ", elle est de type " + typeof(x));

var y = 2.5;
console.log("La variable y est : " + y + ", elle est de type " + typeof(y));

// string
var z1 = "Hello. I'am Thanh";
var z2 = 'Hi. It\'s six o\'clock.';
var z3 = 'Remember to say "please" and "thank you".';
var z4 = "1";
console.log("La variable z1 est : " + z1 + ", elle est de type " + typeof(z1));
console.log("La variable z2 est : " + z2 + ", elle est de type " + typeof(z2));
console.log("La variable z3 est : " + z3 + ", elle est de type " + typeof(z3));
console.log("La variable z4 est : " + z4 + ", elle est de type " + typeof(z4));

// boolean
var yes = true, no = false;
console.log("La variable yes est : " + yes + ", elle est de type " + typeof(yes));
console.log("La variable no est : " + no + ", elle est de type " + typeof(no));

var w = null;
console.log("La variable w est : " + w + ", elle est de type " + typeof(w));

// undefined
var test;
console.log("La variable test est : " + test + ", elle est de type " + typeof(test));

// Objet
var personne = {
    nom: "Châu",
    prnom: "Thanh",
    age: 39
};
console.log("La variable personne est : " + personne + ", elle est de type " + typeof(personne));

// Fonction
var fonct = function() {
    console.log("Function fonct");
};
console.log("La variable fonct est : " + fonct() + ", elle est de type " + typeof(fonct));


var date1 = Date();
var date2 = Date.now();
console.log("La variable date1 est : " + date1 + ", elle est de type " + typeof(date1));
console.log("La variable date2 est : " + date2 + ", elle est de type " + typeof(date2));