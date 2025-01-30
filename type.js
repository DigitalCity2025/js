'use strict'

let string = 'toto';

// if(string !== undefined || string != null || string !== 0 || string !== '',... )
if(!string) {
    console.log('La chaine est vide');
} else {
    console.log('La chaine n\'est pas vide');
}


let obj = {
    nom: 'Ly',
    age: 42,
}
Object.seal(obj);

// obj.prenom = 'Khun' // provoquera une erreur

Object.freeze(obj);

// obj.age = 43; // provoquera une erreur

// recupérer les propriétes de l'objet
console.log(Object.keys(obj));

// recupérer les valeurs de l'objet
console.log(Object.values(obj));

// recupérer les clés et valeurs de l'objet
console.log(Object.entries(obj));
