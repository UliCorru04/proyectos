let contador = 0; // Su valor cambiará dependiendo del botón presionado.
let valor = document.getElementById("contador");
let cambiocolor = document.querySelector(".boton");

function Color(){
    // Esta función crea código hexadecimal.
    let colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let prefix = "#";
    for(let i = 0; i < 6; i++){
        let hex = Math.floor(Math.random() * colors.length);
        prefix += colors[hex];
    }
    return prefix;
}

document.getElementById('add1').onclick = function Aumento(){
    // Esta función lleva a cabo el incremento del valor por cada click al botón verde.
    contador += 1;
    valor.textContent = contador;
}

document.getElementById('rem1').onclick = function Disminucion(){
    // Esta función lleva a cabo la disminución del valor por cada click al botón rojo. Ademas
    // del color de fondo aleatorio.
    contador -= 1;
    valor.textContent = contador;
    let ColorUno = Color();
    let ColorDos = Color();
    gradiente='linear-gradient(to left,' +ColorUno+ ',' +ColorDos+')';
    cambiocolor.style.backgroundImage= gradiente;
    let h2 = document.querySelector('h2');
    h2.textContent = `Valores Hexadecimal: ${ColorUno} y ${ColorDos}`;
    h2.append();
}