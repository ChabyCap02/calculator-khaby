//control de signo, si este esta activado se puede agregar
let signo = false;
let nNegativo = true

//Pantalla
let operacion =document.getElementById('operacion');
let resultado = document.getElementById('resultado')

const agregarNumero = (tecla) => {
    operacion.innerHTML += tecla.innerHTML;
    calculo.push(tecla.innerHTML);
    console.log(calculo);
    signo = true
}

//Funcion Suma

let calculo = operacion.innerHTML.split('');
const sumar = () => {

    if(signo == true){
        calculo.push('+');
        operacion.innerHTML += '+'.repeat(1);
        signo = false;
    };
    console.log(calculo);
};


const restar = () => {
    if(signo == true || nNegativo == true){
        calculo.push('-');
        operacion.innerHTML += '-'.repeat(1);
        signo = false;
        nNegativo = false
    };
    console.log(calculo);
};
//Funcion para dividir
const dividir = () => {
    if(signo == true){
        calculo.push('/');
        operacion.innerHTML += '/'.repeat(1);
        signo = false;
    };
    console.log(calculo);
};
//Funcion para multiplicar
const multiplicar = () => {
    if(signo == true){
        calculo.push('+');
        operacion.innerHTML += '+'.repeat(1);
        signo = false;
    };
    console.log(calculo);
};

//Funcion IGUal
const igual = () => {
    let resultado1 = eval(operacion.innerHTML);
    resultado.innerHTML = resultado1;
    
     
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

