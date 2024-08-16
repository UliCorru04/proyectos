let sumar = document.querySelector('#sumar');
let mejorar = document.querySelector('#mejorar');
let limite = 50;
let n = 0;
let sumador = 1;
mejorar.disabled = true;

function sumaMejorar(){
    if (event.target.id == 'sumar'){
        let h1 = document.querySelector('#contador');
        n = +h1.textContent;
        n += sumador;
        h1.textContent = n;
    }
    if (n == limite){
        mejorar.disabled = false;
        sumar.disabled = true;
        if (event.target.id == 'mejorar'){
            mejorar.disabled = true;
            sumar.disabled = false;
            sumador += 1;
            sumador <= 3 ? limite *= 3 : limite *= 2.1;
        }
    }
}