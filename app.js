let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

/*
// ejercicio 1
let listaGenerica = [];

// ejercicio 2
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// ejercicio 3
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

console.log(lenguajesDeProgramacion);
//ejercicio 4
function mostrarElementos(lista){
    let i = 0;
    for(i; i<=lista.length-1; i++){
        console.log(lista[i]);
    }
    return;
}

mostrarElementos(lenguajesDeProgramacion);

console.log('================================')
// ejercicio 5
function mostrarElementosInverso(lista){
    for(let i = lista.length-1; i>=0; i--){
        console.log(lista[i]);
    }
    return;
}

mostrarElementosInverso(lenguajesDeProgramacion);

//ejercicio 6
function promedio(lista){
    let promedio = 0;
    for(let i=0; i < lista.length; i++){
        promedio += lista[i];
    }
    return promedio/lista.length;
}

console.log(promedio([1,2,3,4,5]))

// ejercicio 7
function maxMin(lista){
    let i = 0;
    let longitud = lista.length;
    let maximo = 0;
    let minimo = 100000000;

    //hallas max
    for(i; i<longitud; i++){
        if(lista[i] > maximo){
            maximo = lista[i];
        }
    }

    let j = 0
    //hallar min
    for(j; j<longitud; j++){
        if(lista[j] < minimo){
            minimo = lista[j];
        }
    }

    console.log('=====================================')
    //mostrar maximo
    console.log(maximo);
    //mostrar minimo
    console.log(minimo);
}

maxMin([4,5,3,8,9,10,11]);

// EJERCICIO 8
function sumaElementos(lista){
    let suma = 0;
    for(let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma;
}

console.log('=====================================');
console.log(sumaElementos([4,5,3,8,9,10,11]));

//EJERCICIO 9
function pocisionElemento(lista, elto){
    let pos = -1

    for(let i = 0; i<lista.length; i++){
        if(lista[i] === elto){
            pos = i;
        }
    }
    return pos;
}

console.log(pocisionElemento([4,5,3,8,9,10,11], 10));

// EJERCICIO 10
function sumaLista(lista1, lista2){
    let listaSuma = [];
    let n = lista1.length;

    for(let i = 0; i<n; i++){
        listaSuma.push(lista1[i] + lista2[i]);
    }

    return listaSuma;
}

console.log(sumaLista([1,2,3,4,5,6], [11,12,13,14,15,16]));

//EJERCICIO 11
function cuadradoLista(lista){
    let nuevaLista = [];
    let n = lista.length;
    for(let i = 0; i < n; i++){
        nuevaLista.push(lista[i]*lista[i]);
    }
    return nuevaLista;
}

console.log(cuadradoLista([1,2,3,4,5,6]));

*/