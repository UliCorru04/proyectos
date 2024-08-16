let sumar = document.querySelector('#sumar');
let n = 0;
let mejorar = document.querySelector('#mejorar');
mejorar.disabled = true;

function sumaMejora(){
    if (event.target.id == 'sumar'){
        let h1 = Document.querySelector('#contador');
        n = h1.textContent;
        n++;
        h1.textContent = n;
    }
    if (n == 50){
        mejorar.disabled = false;
        sumar.disabled = true;
        if (event.target.id == 'mejora'){
            mejorar.disabled = true;
            sumar.disabled = false;
        }
    }
}