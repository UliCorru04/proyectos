let sumar = document.querySelector('#sumar');
let mejorar = document.querySelector('#mejorar');
let h1 = document.querySelector('#contador');
let violeta = document.querySelector('#violeta');
let blanco = document.querySelector('#blanco');
let marron = document.querySelector('#marron');
let gradiente = document.querySelector('#gradiente');
violeta.disabled = true;
blanco.disabled = true;
marron.disabled = true;
gradiente.disabled = true;
mejorar.disabled = true;
let limite = 50;
let n = 0;
let sumador = 1;
let diamante = 0;
let clicks = 0;
// Cuantas variables O_o

function sumaMejorar(){
    if (event.target.id == 'sumar'){
        n = +h1.textContent;
        n += sumador;
        h1.textContent = n;
        clicks++;
        if (clicks % 75 == 0){
            let diamantes = document.querySelector('.diamantes');
            diamante = +diamantes.textContent;
            diamante++;
            diamantes.textContent = diamante;
        }
    }
    if (n == limite){
        mejorar.disabled = false;
        sumar.disabled = true;
        if (event.target.id == 'mejorar'){
            mejorar.disabled = true;
            sumar.disabled = false;
            sumador += 1;
            if (sumador < 4){
                limite *= 3;
            } if (sumador == 4){
                limite == 950;
            } if (sumador == 5){
                limite == limite + 650;
            } if (sumador == 6){
                limite == limite + 900;
            } if (sumador == 7){
                limite == limite + 3150;
            } if (sumador == 8){
                limite == limite + 800;
            } if (sumador == 9){
                limite == limite + 900;
            } if (sumador == 10){
                limite == limite + 2750;
            }
        }
        if (n == 10000){
            sumar.disabled = false;
            mejorar.disabled = false;
        }
    }
}

function cambioColor(){

    if ((event.target.id == 'venta-violeta' && diamante < 1)){
        alert('Necesitas 25 diamantes para comprar color VIOLETA');
    } if ((event.target.id == 'venta-blanco' && diamante < 1)){
        alert('Necesitas 25 diamantes para comprar color BLANCO');
    } if ((event.target.id == 'venta-marron' && diamante < 1)){
        alert('Necesitas 25 diamantes para comprar color MARRÓN');
    } if ((event.target.id == 'venta-gradiente' && diamante < 1)){
        alert('Necesitas 50 diamantes para comprar color GRADIENTE');
    } 

    if ((event.target.id == 'venta-violeta' && diamante >= 1)){
        let blockvioleta = document.querySelector('#venta-violeta');
        +diamante--;
        blockvioleta.textContent = null;
        violeta.disabled = false;
    } if ((event.target.id == 'venta-blanco' && diamante >= 1)){
        let blockblanco = document.querySelector('#venta-blanco');
        diamante--;
        blockblanco.textContent = null;
        blanco.disabled = false;
    } if ((event.target.id == 'venta-marron' && diamante >= 1)){
        let blockmarron = document.querySelector('#venta-marron');
        diamante--;
        blockmarron.textContent = null;
        marron.disabled = false;
    } if ((event.target.id == 'venta-gradiente' && diamante >= 1)){
        let blockgradiente = document.querySelector('#venta-gradiente');
        diamante--;
        blockgradiente.textContent = null;
        gradiente.disabled = false;
    } 

    if (event.target.id == 'rojo'){
        let caja = document.querySelector('#caja');
        let caja2 = document.querySelector('#caja2');
        let sumar = document.querySelector('#sumar');
        let mejorar = document.querySelector('#mejorar:enabled');
        caja.style.border = 'solid 1px rgb(255, 0, 0)';
        caja2.style.border = 'solid 1px rgb(255, 0, 0)';
        h1.style.color = 'rgb(255, 0, 0)';
        sumar.style.color = 'rgb(255, 0, 0)';
        sumar.style.border = 'solid 2px rgb(255, 0, 0)';
        mejorar.style.color = 'rgb(255, 0, 0)';
        mejorar.style.border = 'solid 2px rgb(255, 0, 0)';
    }

    if (event.target.id == 'azul'){
        let caja = document.querySelector('#caja');
        let caja2 = document.querySelector('#caja2');
        let sumar = document.querySelector('#sumar');
        let mejorar = document.querySelector('#mejorar:enabled');
        caja.style.border = 'solid 1px rgb(0, 0, 255)';
        caja2.style.border = 'solid 1px rgb(0, 0, 255)';
        h1.style.color = 'rgb(0, 0, 255)';
        sumar.style.color = 'rgb(0, 0, 255)';
        sumar.style.border = 'solid 2px rgb(0, 0, 255)';
        mejorar.style.color = 'rgb(0, 0, 255)';
        mejorar.style.border = 'solid 2px rgb(0, 0, 255)';
    }

    if (event.target.id == 'verde'){
        let caja = document.querySelector('#caja');
        let caja2 = document.querySelector('#caja2');
        let sumar = document.querySelector('#sumar');    
        let mejorar = document.querySelector('#mejorar:enabled');
        caja.style.border = 'solid 1px rgb(0, 255, 0)';
        caja2.style.border = 'solid 1px rgb(0, 255, 0)';
        h1.style.color = 'rgb(0, 255, 0)';
        sumar.style.color = 'rgb(0, 255, 0)';
        sumar.style.border = 'solid 2px rgb(0, 255, 0)';
        mejorar.style.color = 'rgb(0, 255, 0)';
        mejorar.style.border = 'solid 2px rgb(0, 255, 0)';
    }

    if (event.target.id == 'amarillo'){
        let caja = document.querySelector('#caja');
        let caja2 = document.querySelector('#caja2');     
        let sumar = document.querySelector('#sumar');
        let mejorar = document.querySelector('#mejorar:enabled');
        caja.style.border = 'solid 1px rgb(255, 255, 0)';
        caja2.style.border = 'solid 1px rgb(255, 255, 0)';
        h1.style.color = 'rgb(255, 255, 0)';
        sumar.style.color = 'rgb(255, 255, 0)';
        sumar.style.border = 'solid 2px rgb(255, 255, 0)';
        mejorar.style.color = 'rgb(255, 255, 0)';
        mejorar.style.border = 'solid 2px rgb(255, 255, 0)';
    }

    if (event.target.id == 'violeta'){
        let caja = document.querySelector('#caja');
        let caja2 = document.querySelector('#caja2');
        let sumar = document.querySelector('#sumar');
        let mejorar = document.querySelector('#mejorar:enabled');
        caja.style.border = 'solid 1px rgb(255, 0, 255)';
        caja2.style.border = 'solid 1px rgb(255, 0, 255)';
        h1.style.color = 'rgb(255, 0, 255)';
        sumar.style.color = 'rgb(255, 0, 255)';
        sumar.style.border = 'solid 2px rgb(255, 0, 255)';
        mejorar.style.color = 'rgb(255, 0, 255)';
        mejorar.style.border = 'solid 2px rgb(255, 0, 255)';
    }
    if (event.target.id == 'blanco'){
        let caja = document.querySelector('#caja');
        let caja2 = document.querySelector('#caja2');     
        let sumar = document.querySelector('#sumar');
        let mejorar = document.querySelector('#mejorar');
        caja.style.border = 'solid 1px rgb(255, 255, 255)';
        caja2.style.border = 'solid 1px rgb(255, 255, 255)';
        h1.style.color = 'rgb(255, 255, 255)';
        sumar.style.color = 'rgb(255, 255, 255)';
        sumar.style.border = 'solid 2px rgb(255, 255, 255)';
        mejorar.style.color = 'rgb(255, 255, 255)';
        mejorar.style.border = 'solid 2px rgb(255, 255, 255)';
    }

    if (event.target.id == 'marron'){
        let caja = document.querySelector('#caja');
        let caja2 = document.querySelector('#caja2');
        let sumar = document.querySelector('#sumar');
        let mejorar = document.querySelector('#mejorar::enabled');
        caja.style.border = 'solid 1px rgb(77, 36, 13)';
        caja2.style.border = 'solid 1px rgb(77, 36, 13)';
        h1.style.color = 'rgb(77, 36, 13)';
        sumar.style.color = 'rgb(77, 36, 13)';
        sumar.style.border = 'solid 2px rgb(77, 36, 13)';
        mejorar.style.color = 'rgb(77, 36, 13)';
        mejorar.style.border = 'solid 2px rgb(77, 36, 13)';
    }

    if (event.target.id == 'gradiente'){
        let caja = document.querySelector('#caja');
        let caja2 = document.querySelector('#caja2');
        let sumar = document.querySelector('#sumar');
        let mejorar = document.querySelector('#mejorar::enabled');
        caja.style.border = 'solid 1px rgb(77, 36, 13)';
        caja2.style.border = 'solid 1px rgb(77, 36, 13)';
        h1.style.colorImage = 'linear-gradient(to left, rgb(255, 0, 0), rgb(255, 255, 0))';
        h1.style.backgroundClip = 'text';
        sumar.style.border = '2px';
        sumar.style.borderImage = 'linear-gradient(to left, rgb(255, 0, 0), rgb(255, 255, 0))';
        mejorar.style.color = 'rgb(77, 36, 13)';
        mejorar.style.border = 'solid 2px rgb(77, 36, 13)';
    }
}

function tiempoJuego(){
    let segundos1 = 0;
    let segundos2 = 0;
    let minutos1 = 0;
    let minutos2 = 0;
    let horas = 0;
    if (segundos1 == 10){
        segundos2++;
        segundos1 == 0;
    }
    if (segundos2 == 6){
        minutos1++;
        segundos2 == 0;
    }
    if (minutos1 == 10){
        minutos2++;
        minutos1 == 0;
    }
    if (minutos2 == 6){
        horas;
        minutos2 == 0;
    }
}