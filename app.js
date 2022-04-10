const img       =   document.getElementById( 'img' );
const buttons   =   document.getElementById( 'buttons' );

let indexColor  = 0;
let intervalId = null;

buttons.addEventListener('click',(event)=>{
    clearInterval(intervalId);
    turnOn[event.target.id]();
});

const trocarCor = ()=>{
    
    const cores =   ['red','yellow','green'];
    const cor   =   cores[indexColor];    
    turnOn[cor]();
   
    if(indexColor < 2){
        indexColor ++
    }else{
        indexColor = 0;
    }
    console.log(indexColor);
}

const turnOn = {
    'red'    :      ()=> img.src = './img/vermelho.png',
    'yellow' :      ()=> img.src = './img/amarelo.png',
    'green'  :      ()=> img.src = './img/verde.png',
    'automatic':    ()=> intervalId = setInterval(trocarCor,1000)
}
