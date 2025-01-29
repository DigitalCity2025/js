console.log(navigator);
navigator.geolocation.getCurrentPosition(() => {});
console.log(window);
console.log(document);
console.log(document.body);

// récupérer le premier p du document
const p = document.querySelector('p');
console.log(p); // element
// l'ensemble des classes du p;
const classAttribute = p.classList;
console.log(classAttribute);
// texte du document 
const text = p.textContent;
console.log(text);
const tousLesNoeuds = p.childNodes;
console.log(tousLesNoeuds);

const dp = document.getElementById('dp');

// récupérer le button grace à son id
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
    alert('Coucou');
});