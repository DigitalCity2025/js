// afficher les erreurs silencieuses
"use strict"

// afficher dans la console
console.log(42);

// afficher une popup
// window.alert('Hello World!');

// encoder dans une popup
// const response = window.prompt('Comment allez vous?');
// console.log(response);

// demande une confirmation
// const ok = window.confirm('Avez vous bien 18 ans ?')
// console.log(ok)

console.log(document.body);

// documenter une variable
/** @var {number} */
// declarer une variable non constante
let mavariable = 42;

// déclarer une variable constante
const PI = 3.14;

// typage

// number
let v1 = 42;
console.log(typeof(v1));

// bigInt
let v2 = BigInt(56465432435453432121321231);
console.log(typeof(v1));

// string
let s1 = 'chaine1 ' + PI;
let s2 = "chaine2 " + PI;
// string interpolation
let s3 = `chaine3 ${7 * 3}`;

console.log(s1);
console.log(s2);
console.log(s3);

console.log(typeof(s1));
console.log(typeof(s2));
console.log(typeof(s3));

// boolean
let v3 = true;
console.log(typeof(v3));

// undefined
let v4;
console.log(typeof(v4));

// object
let v5 = null;
console.log(typeof(v5));
let v6 = {};
console.log(typeof(v6));

// function
let v7 = () => {};
console.log(typeof(v7));

// object
let v8 = [];
console.log(typeof(v8));

let v9 = new Date();
console.log(typeof(v9));
console.log(v9.constructor.name);

class Chat {
    constructor(nom) {
        this.nom = nom;
    }
}
Chat.prototype.miauler = function() {
    console.log('MIAOU !!');
}

let v10 = new Chat('Miaouss');
console.log(v10.nom);
console.log(typeof(v10)); // object
console.log(v10.constructor.name); //Chat
v10.miauler(); // 'MIAOU!!'