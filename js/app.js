//control de signo, si este esta activado se puede agregar
let signo = false;
let nNegativo = true;



//Pantalla
let operacion =document.getElementById('operacion');
let resultado = document.getElementById('resultado')


const agregarNumero = (tecla) => {
    operacion.innerHTML += tecla.innerHTML;
    calculo.push(tecla.innerHTML);
    console.log(calculo);
    signo = true
}

let calculo = operacion.innerHTML.split('');

//Funcion Sumar

const sumar = () => {
    
    if(signo == true ){
        calculo.push('+');
        signo = false;
        operacion.innerHTML += '+'.repeat(1);   

    }else if(signo == false && nNegativo == false){
        calculo.pop(calculo[-1]);
        calculo.push('+');
        
        if(calculo[0] == '+'){
            calculo[0] = ''

        }
        operacionR = calculo.join('');
        operacion.innerHTML = operacionR;
    }
    console.log(calculo);
};

//Funcion Restar
const restar = () => {
    if(signo == true || nNegativo == true){
        calculo.push('-');
        operacion.innerHTML += '-'.repeat(1);
        signo = false;
        nNegativo = false
    }else if(signo == false){
        calculo.pop(calculo[-1]);
        calculo.push('-');
        operacionR = calculo.join('');
        operacion.innerHTML = operacionR;

    };
    console.log(calculo);
};

//Funcion para dividir
const dividir = () => {
    
    if(signo == true){
        calculo.push('/');
        operacion.innerHTML += '/'.repeat(1);
        signo = false;
    }else if(signo == false && nNegativo == false){
        calculo.pop(calculo[-1]);
        calculo.push('/');

        if(calculo[0] == '/'){
            calculo[0] = '-'
        }

        operacionR = calculo.join('');
        operacion.innerHTML = operacionR;

    };
    console.log(calculo);
};
//Funcion para multiplicar
const multiplicar = () => {
    if(signo == true){
        calculo.push('*');
        operacion.innerHTML += '*'.repeat(1);
        signo = false;
    }else if(signo == false && nNegativo == false){
        calculo.pop(calculo[-1]);
        calculo.push('*');

        if(calculo[0] == '*'){
            calculo[0] = '-'
        }

        operacionR = calculo.join('');
        operacion.innerHTML = operacionR;

    };
    console.log(calculo);
};

//Funcion IGUal
const igual = () => {
    if(signo == false){
        resultado.innerHTML = 'isNaN'
    }
    let resultado1 = eval(operacion.innerHTML);
    resultado.innerHTML = resultado1;
    console.log(typeof calculo); 
    
};

const reset  = () => {
    operacion.innerHTML = '';
    resultado.innerHTML = '';
    calculo = [];
    signo = false;

}

const eliminar = () => {
    calculo.pop(calculo[-1]);
    console.log(calculo);
    operacionR = calculo.join('');
    
    operacion.innerHTML = operacionR;
}

