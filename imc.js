const calculate =  document.getElementById('calculate');


//acessar propriedade do elemento
 //names.value = 'este valor';


function calImc(){
    const names = document.getElementById('names').value;
    const height =  document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');
    

    if(names !== '' && height !== '' && weight !== ''){
        result.style.color = "black";
        const imc= (weight / (height * height)) .toFixed(1);

        let classifica;

        if(imc < 18.5){
            classifica = 'abaxo do peso!';
        
        }else if(imc < 25){
            classifica =  'com o peso ideal parabens!';
        
        }else if(imc < 30){
            classifica =  'levemente acima do peso !';
        
        }else if(imc < 35){
            classifica =  'com o 1º gral obesidade !';
        
        }else if(imc < 40){
            classifica =  'com o 2º gral obesidade !';
        
        }else{
            classifica =  'com o 3º gral obesidade. Procure se tratar!';
        }

        result.textContent = `  Ola ${names} seu imc é: ${imc} e você está ${classifica}`;
    }else{
        result.style.color = "red";
        result.textContent = 'Preencha direito os campos '
    }

}