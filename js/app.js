

//Pantalla
let operacion =document.getElementById('operacion');
let resultado = document.getElementById('resultado')

const agregarNumero = (tecla) => {
    operacion.innerHTML += tecla.innerHTML;
    calculo.push(tecla.innerHTML)
}

//Funcion Suma

let calculo = operacion.innerHTML.split(' ');
const sumar = () => {
    calculo
    if(calculo[-1].trim() != '+'){    
        calculo.push('+');
        operacion.innerHTML += '+'
    }else{
        
        calculo.length = calculo.length - 1;
        
    }
    console.log(calculo)
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
    
    


    let resultado1 = eval(calculo)
    resultado.innerHTML = resultado1
    calculo.forEach(sumar)
    
}






const reset  = () => {
    operacion.innerHTML = '';
    resultado.innerHTML = '';
    suma = 0;

}

const eliminar = () => {

    let operacion1
    operacion1.innerHTML.substring(0, operacion.innerHTML.length - 1)
    operacion.innerHTML = operacion1;
}

