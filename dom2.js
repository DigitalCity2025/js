// créer un element 
const element = document.createElement('img');
element.src = 'https://www.zooplus.be/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats.jpg';

console.log(element);

// ajouter un element dans le body à la fin
document.body.append(element);

// retirer un element
element.remove();

const div1 = document.querySelector('.div1');
div1.append(element);

const div2 = document.querySelector('.div2');
div2.append(element);