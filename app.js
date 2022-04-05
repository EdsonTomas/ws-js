const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;

const semaforo = (event)=>{
    turnOn[event.target.id]();
}

const changeColor = ()=>{
    const colors    = ['red','yellow','green'];
    const color     = colors[colorIndex];
    turnOn[color]();
    if(colorIndex < 2){
        colorIndex++;
    }else{
        colorIndex = 0;
    }
}
buttons.addEventListener('click',semaforo);


const turnOn = {
    'red'       :   ()=> img.src = './img/vermelho.png',
    'yellow'    :   ()=> img.src = './img/amarelo.png',
    'green'     :   ()=> img.src = './img/verde.png',
    'automatic' :   ()=> setInterval(changeColor, 1000)
}