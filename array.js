const tab = [3,2,1,6,7,8,-1,2,7,42,-3]

tab.sort((a, b) => a > b ? -1 : 1);

const mots = ['maison', 'àrbre', 'Paquebot', 'biberon'];

// mots.sort((a, b) => a < b ? -1 : 1);

mots.sort((a, b) => a.localeCompare(b));

const t1 = ['Khun', 'Mike'];
const t2 = ['Thierry', 'Aurelien'];
const t3 = [...t1, ...t2]; //['Khun', 'Mike','Thierry', 'Aurelien']

// js => c#
// transformer chaque élément d'un tableau
// map => Select
t3.map(n => n.toUpperCase()); //['KHUN', 'MIKE','THIERRY', 'AURELIEN']

// checher le premier élément d'un tabeau qui répond à une condition
// find => Find
t3.find(n => n.startsWith('M')); //Mike

// checher tous les élément d'un tabeau qui répondent à une contition
// filter => Where
t3.find(n => n.length === 4); // ['Khun', 'Mike']

// vérifie si au moins un élément du tabeau répond à une contition
// some => Any
t3.some(n => n.length === 4); // true

// vérifie si tous les éléments du tabeau répondent à une contition
// every => All
t3.every(n => n.length === 4); // false

// trier un tableau
// toSorted => OrderBy // OrderByDescending
t3.toSorted((a, b) => a.localeCompare(b)); // ['Aurelien', 'Khun', 'Mike', 'Thierry']


// reduce => GroupBy // Sum // Average
const somme = t3.reduce((prev, n) => prev + n.length, 0);

// 0 + 4 + 4 + 7 + 8

const moyenne = t3.reduce((prev, n) => prev + (n.length / t3.length), 0);
const noms = t3.reduce((prev, current) => prev + current + ',' , '')
// '' + 'Khun' + ',' + 'Mike' + ',' + 'Thierry' + ',' + 'Aurelien' + ','

console.log(noms);

t3.forEach((n, i) => {
    console.log(i, n);
});

// parcourir les element d'un tableau
for(let n of t3) {
    console.log(n);
}

// parcourir les indices 
for(let i in t3) {
    console.log(i);
}

const person = { id: 42, nom: 'Khun', age: 42, job: 'Dev' }
for(let property in person) {
    console.log(property); // id // nom // age // job
    console.log(person[property]); // 42 // Khun // 42 // Dev
}

// Map

const eleves = new Map();

eleves.set('John', 12);
eleves.set('Paul', 15);
eleves.set('Georges', 9);
eleves.set('Ringo', 11);

for(let [key, value] of eleves) {
    console.log(key, value);
}

const reussis = [...eleves].filter(([key, value]) => value >= 12);
console.log(reussis);

const m = [...eleves]
    .reduce((prev, [key, value]) => prev + value / eleves.size , 0);
console.log(m);

const tableau = [];
tableau.push(42); 
tableau.push(1); 
tableau.push(42);

console.log(tableau); // [42, 1, 42];

const set = new Set();
set.add(42); 
set.add(1); 
set.add(42);

console.log(set); // [42, 1];

// retirer les doublons d'un tableau
tableau = [...new Set(tableau)];