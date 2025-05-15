const { ask } = require('../helpers/input');

async function main() {
  let opcion = ''; //Me dice que la variable es un dato STRING//
  let frutas = []; //Dice que frutas es UN ARREGLO VACÍO//

  while (opcion !== '3') {
    opcion = await ask('¿Qué deseas hacer? \n1. Agregar una fruta \n2. Eliminar una fruta \n3. Salir\n');
    if (opcion === '1') {
      //Agregar
      let frutaNueva = await ask('¿Qué fruta deseas agregar?: ');
      frutas.push(frutaNueva); //Agrega el coso al arreglo (Le haces el push a frutaNueva)//
      console.log(`Fruta agregada: ${frutaNueva}`);
      console.log('Frutas disponibles: ', frutas);
    } else if (opcion === '2') {
      //Eliminar
      if (frutas.length === 0) {
        console.log('No hay frutas disponibles');
        continue; //Para SALIR DEL IF y seguir con la wea esta//
      } else {
        let frutaEliminar = await ask('¿Qué fruta deseas eliminar?: ');
        let index = frutas.indexOf(frutaEliminar); //Provee la POSICION delobjeto que buscas//

        if (index !== -1) {  // -1 quiere decir que no está en el arreglo //
          frutas.splice(index, 1); //BORRAR ALGO DEL ARREGLO (posicion, cúantos quieres borrar a partir de ahí y contandose a sí mismo) //
          console.log(`${frutaEliminar} ha sido eliminada `)
        } else {
          console.log('Fruta no encontrada ');
        }
        console.log('Frutas disponibles: ', frutas);
      }
    } else if (opcion === '3') {
      //Salir
      console.log('Gracias por usar el programa');
    } else {
      console.log('Opción no válida');
    }
  }
}

main();