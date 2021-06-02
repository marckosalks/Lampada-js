//Declaração variaveis

const turnOn  =  document.getElementById( 'turnOn' );
const turnOff  =  document.getElementById( 'turnOff' );
const lampada = document.getElementById( 'lamp' )

//validação 
//ps:usanso indexOf para procurar uma string

checkLamp = () =>{
    return lampada.src.indexOf('quebrada')  > - 1 ;
} 


//ligar / desligar

lampOn = () =>{
    if(!checkLamp() ){

        lampada.src='./img/ligada.jpg';
    }
}


lampOff = () =>{
    
    if(!checkLamp() ){
        lampada.src='./img/desligada.jpg';
    }
}

//quebrar lampada


function brokenLamp(){
    
    if(!checkLamp() ){
        lampada.src='./img/quebrada.jpg';
    }
}


//ao ouvir um evento não precisa colocar on na frente, ex 'click' 


turnOn.addEventListener( 'click', lampOn );
turnOff.addEventListener( 'click', lampOff);

lampada.addEventListener( 'mouseover', lampOn);
lampada.addEventListener( 'mouseout', lampOff);



