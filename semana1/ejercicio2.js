// Clase 2: Operadores y Condicionales
const { ask } = require('../helpers/input');

async function main() {
  const age = Number(await ask('¿Cuántos años tienes? '));
  const genere = await ask('¿Cuál es tu género? (hombre/mujer) ');

  if ((age >= 1 && age < 18) && (genere === 'hombre')) {
    console.log('Eres un niño');
  } else if ((age >= 18 && age < 65) && (genere === 'hombre')) {
    console.log('Eres un hombre mayor de edad');
  } else if ((age >= 1 && age < 18) && (genere === 'mujer')){
    console.log('Eres una niña');
  } else if ((age >= 18 && age < 65) && (genere === 'mujer')){
    console.log('Eres una mujer mayor de edad')
  }else {
    console.log('No se cumplen los valores de búsqueda');
  }
}

main();
