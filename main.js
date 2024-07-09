let contador = 0;
let valor = document.getElementById("contador");
let cambiocolor = document.querySelector(".boton");


function Color(){
    let colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let prefix = "#";
    for(let i = 0; i < 6; i++){
        let hex = Math.floor(Math.random() * colors.length);
        prefix += colors[hex];
    }
    return prefix;
}

function generadorColor(){
    let ColorUno = Color();
    let ColorDos = Color();
    gradiente='linear-gradient(to left,' +ColorUno+ ',' +ColorDos+')';
}

document.getElementById('add1').onclick = function Aumento(){
    contador += 1;
    valor.textContent = contador;
}

document.getElementById('rem1').onclick = function Disminucion(){
    contador -= 1;
    valor.textContent = contador;
    generadorColor();
    cambiocolor.style.backgroundImage= gradiente;
}