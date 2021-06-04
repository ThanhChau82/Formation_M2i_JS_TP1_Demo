document.write("Demo boucle, condition");
var passwords = ['123', 'abc', 'ddd'];
var pwd;

// Déclaration de la fonction de vérification
function verifierExistancePassword(pwd, listePwds) { 
    let verifOK = false;
    for (let index = 0; index < listePwds.length; index++) {        
        if (pwd === listePwds[index] && pwd == listePwds[index]) {            
            verifOK = true;
            break;
        } 
    } 
    return verifOK;
}  

// Nous allons donner 3 chances pour donner le bon mot de passe
var i=1;
do{
    pwd = prompt("Donnez le mot de passe");
    // Appel à une fonction dédiée   
    if (verifierExistancePassword(pwd, passwords)){
        console.log("Password correct");
        break;
    }
   
    if(i == 3) {
        alert("Vous avez essayé 3 fois ! Votre compte est bloqué temporairement.");
    }
    i++;
}
while (i <= 3);