

//Pantalla
let operacion =document.getElementById('operacion');
let resultado = document.getElementById('resultado')

const agregarNumero = (tecla) => {
    operacion.innerHTML += tecla.innerHTML;
    calculo.push(tecla.innerHTML)
}

//Funcion Suma

let calculo = operacion.innerHTML.split(' ');
let signo = true;
const sumar = () => {

    
    if(signo){
        calculo.push('+');
        operacion.innerHTML += ' + ';
        
    }
    
    console.log(calculo)
}

const signo = () => {
    
}

const restar = () => {
    
    operacion.innerHTML += ' - ';
}

const dividir = () => {
    
    operacion.innerHTML += ' / ';
}
const multiplicar = () => {
    
    operacion.innerHTML += ' * ';
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

    let operacion1
    operacion1.innerHTML.substring(0, operacion.innerHTML.length - 1)
    operacion.innerHTML = operacion1;
}

