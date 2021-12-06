

//Pantalla
let operacion =document.getElementById('operacion');
let resultado = document.getElementById('resultado')

const agregarNumero = (tecla) => {
    operacion.innerHTML += tecla.innerHTML;
    calculo.push(tecla.innerHTML);
    console.log(calculo);
}

//Funcion Suma

let calculo = operacion.innerHTML.split('');
let signo = true;
const sumar = () => {

    
    if(signo){
        calculo.push('+');
        operacion.innerHTML += '+';
        
    }
    
    console.log(calculo)
}



const restar = () => {
    calculo.push('-');
    operacion.innerHTML += '-';
}

const dividir = () => {
    calculo.push('/');
    operacion.innerHTML += '/';
}
const multiplicar = () => {
    calculo.push('*');
    operacion.innerHTML += '*';
}

//Funcion IGUal
const igual = () => {
    let resultado1 = eval(operacion.innerHTML);
    resultado.innerHTML = resultado1;
    operacion.style.overflow = 'hidden';
    
    
}

const reset  = () => {
    operacion.innerHTML = '';
    resultado.innerHTML = '';
    calculo = []

}

const eliminar = () => {
    calculo.pop(calculo[-1])
    console.log(calculo)
    operacionR = calculo.join('');
   
    
    operacion.innerHTML = operacionR
}

