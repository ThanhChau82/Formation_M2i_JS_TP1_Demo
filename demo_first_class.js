function Voiture(id) {
    this.idVoiture = id; // Constructeur
    this.demarrer = function() { // Méthode
        console.log("Démarrer voiture " + this.idVoiture);
    }
}

let maVoiture1 = new Voiture(1);
maVoiture1.demarrer();

// Ajouter une méthode
Voiture.prototype.arreter = function() {
    console.log("Arrêter voiture " + this.idVoiture);
}
maVoiture1.arreter();

// Ajouter une variable
Voiture.prototype.couleur = "red";
console.log("Couleur voiture " + maVoiture1.idVoiture + " est " + maVoiture1.couleur);

let maVoiture2 = new Voiture(2);
console.log(maVoiture2.idVoiture);
console.log(maVoiture2.demarrer());
console.log(maVoiture2.arreter());
maVoiture2.couleur = "blue";
console.log(maVoiture2.couleur);
document.write(maVoiture2.idVoiture);