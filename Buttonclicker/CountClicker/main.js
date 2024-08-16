let sumar = document.querySelector('#sumar');
let mejorar = document.querySelector('#mejorar');
let h1 = document.querySelector('#contador');
let limite = 50;
let n = 0;
let sumador = 1;
let monedas = 0;
let clicks = 0;
mejorar.disabled = true;

function sumaMejorar(){
    if (event.target.id == 'sumar'){
        n = +h1.textContent;
        n += sumador;
        h1.textContent = n;
        clicks++;
        if (clicks % 75 == 0){
            let moneda = document.querySelector('#monedas');
            monedas = +moneda.textContent;
            monedas++;
            moneda.textContent = monedas, "💎";
        }
    }
    if (n == limite){
        mejorar.disabled = false;
        sumar.disabled = true;
        if (event.target.id == 'mejorar'){
            mejorar.disabled = true;
            sumar.disabled = false;
            sumador += 1;
                limite *= 3;
        }
    }
}

function cambioColor(){
    if (event.target.id == 'rojo'){
        let caja = document.querySelector('#caja');
        let sumar = document.querySelector('#sumar');
        let mejorar = document.querySelector('#mejorar:enabled');
        caja.style.border = 'solid 1px rgb(255, 0, 0)';
        h1.style.color = 'rgb(255, 0, 0)';
        sumar.style.color = 'rgb(255, 0, 0)';
        sumar.style.border = 'solid 2px rgb(255, 0, 0)';
        mejorar.style.color = 'rgb(255, 0, 0)';
        mejorar.style.border = 'solid 2px rgb(255, 0, 0)';
    }

    if (event.target.id == 'azul'){
        let caja = document.querySelector('#caja');
        let sumar = document.querySelector('#sumar');
        let mejorar = document.querySelector('#mejorar:enabled');
        caja.style.border = 'solid 1px rgb(0, 0, 255)';
        h1.style.color = 'rgb(0, 0, 255)';
        sumar.style.color = 'rgb(0, 0, 255)';
        sumar.style.border = 'solid 2px rgb(0, 0, 255)';
        mejorar.style.color = 'rgb(0, 0, 255)';
        mejorar.style.border = 'solid 2px rgb(0, 0, 255)';
    }

    if (event.target.id == 'verde'){
        let caja = document.querySelector('#caja');
        let sumar = document.querySelector('#sumar');
        let mejorar = document.querySelector('#mejorar:enabled');
        caja.style.border = 'solid 1px rgb(0, 255, 0)';
        h1.style.color = 'rgb(0, 255, 0)';
        sumar.style.color = 'rgb(0, 255, 0)';
        sumar.style.border = 'solid 2px rgb(0, 255, 0)';
        mejorar.style.color = 'rgb(0, 255, 0)';
        mejorar.style.border = 'solid 2px rgb(0, 255, 0)';
    }

    if (event.target.id == 'violeta'){
        let caja = document.querySelector('#caja');
        let sumar = document.querySelector('#sumar');
        let mejorar = document.querySelector('#mejorar:enabled');
        caja.style.border = 'solid 1px rgb(255, 0, 255)';
        h1.style.color = 'rgb(255, 0, 255)';
        sumar.style.color = 'rgb(255, 0, 255)';
        sumar.style.border = 'solid 2px rgb(255, 0, 255)';
        mejorar.style.color = 'rgb(255, 0, 255)';
        mejorar.style.border = 'solid 2px rgb(255, 0, 255)';
    }
}