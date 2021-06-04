// Objet "menu"
/*
var menu = {
    name : "Salted Caramel Ice Cream",
    price : 2.95,
    ingredients : ['butter', 'ice cream', 'salt', 'sugar']
};
alert(menu.name);
alert(menu.price);
alert(menu.ingredients[0]);
alert(menu.ingredients.toString);
*/

// Objet "moi"
var moi = {
    nom : "Chau",
    prenom : "Thanh", 
    age : 39,
    id : function() {
       return this.nom + " " + this.prenom;
    }
};
alert(typeof(moi));
alert(moi.id);
alert(moi.id());
alert(moi['nom']);
alert(JSON.stringify(moi));