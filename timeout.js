setTimeout(() => {
    console.log('coucou');
}, 2000);

let i = 0;

let id = setInterval(() => {
    console.log(43);
    i++;
    if(i === 10) {
        clearInterval(id);
    }
}, 1000)