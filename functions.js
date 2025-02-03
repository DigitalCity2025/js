a();

function a() {
    console.log(42);
}

const b = function() {
    console.log(43);
}

a();

function a() {
    console.log("j'ai casse la premiere fonction")
}

const c = () => {

}


const somme = (...numbers) => {
    return numbers.reduce((p, c) => p + c, 0);
}

const tableau = [42,17,19,1,2,3,1.5];

console.log(somme(...tableau))
