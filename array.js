const tab = [3,2,1,6,7,8,-1,2,7,42,-3]

tab.sort((a, b) => a > b ? -1 : 1);

const mots = ['maison', 'àrbre', 'Paquebot', 'biberon'];

// mots.sort((a, b) => a < b ? -1 : 1);

mots.sort((a, b) => a.localeCompare(b));

const t1 = ['Khun', 'Mike'];
const t2 = ['Thierry', 'Aurelien'];
const t3 = [...t1, ...t2];

// js => c#
// map => Select
// find => Find
// filter => Where
// some => Any
// every => All
// toSorted => OrderBy // OrderByDescending
// reduce => GroupBy // Sum // Average