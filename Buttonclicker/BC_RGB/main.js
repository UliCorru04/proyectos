document.addEventListener('click', handleClick);

function handleClick(e){
    let h1 = document.querySelector('h1');
    let n = h1.textContent;
    if (e.target.id == 'add1'){
        n++;
        h1.textContent = n;
    }
    if (e.target.id == 'rem1' && n >= 10){
        n -=10;
        h1.textContent = n;
        let div = document.querySelector('.boton');
        let r1 = Math.floor(Math.random() * 256);
        let g1 = Math.floor(Math.random() * 256);
        let b1 = Math.floor(Math.random() * 256);
        let r2 = Math.floor(Math.random() * 256);
        let g2 = Math.floor(Math.random() * 256);
        let b2 = Math.floor(Math.random() * 256);
        div.style.background= `linear-gradient(rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
    }
}