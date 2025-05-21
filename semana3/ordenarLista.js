const { ask } = require('../helpers/input');

function ordenarLista(numeros){
   return numeros.sort((a, b) => b - a);
}

const listita = [12, 45, 45678, 87654, 444];
console.log(ordenarLista(listita));