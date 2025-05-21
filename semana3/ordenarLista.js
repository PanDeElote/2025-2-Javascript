const { ask } = require('../helpers/input');

function ordenarLista(numeros){
   return numeros.sort((a, b) => b - a); //El SORT es para ordenar listasssss DE MAYOR A MENOR//
}

function deMenorMayor(numeros){
    return numeros.sort((a, b) => a - b);//De MENOR A MAYOR//
}

const listita = [12, 45, 45678, 87654, 444];
console.log(ordenarLista(listita));
console.log(deMenorMayor(listita));
