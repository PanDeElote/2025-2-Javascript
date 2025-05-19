// 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
// 🎯 Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir. El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// 🧩 Instrucciones:
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú:
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir

const { ask } = require('../helpers/input');

async function main(){

    let frutas = [];
    let option = Number;

    while ( option !== 4){
        option = Number(await ask('Qué deseas hacer? \n1)Agregar fruta \n2)Eliminar fruta \n3)Ver lista de frutas \n4)Salir \n'));

        if ( option == 1){
            let frutaNueva = await ask('Escribe el nombre de la fruta que deseas agregar: ');
            frutas.push(frutaNueva);
            console.log(`${frutaNueva} ha sido agregada a la lista exitosamente.`);
            console.log('Si deseas ver la lista de frutas, oprime 2.');
        } else if ( option == 2){
            if (frutas.length == 0){
                console.log('No hay frutas disponibles.');
            } else {
                let eliminarFruta = await ask('Qué fruta deseas eliminar? ');
                let index = frutas.indexOf(eliminarFruta);

                if(index == -1){
                    console.log('La fruta no existe en el arreglo. No se puede eliminar.');
                } else{
                    frutas.splice(index,1);
                    console.log(`${eliminarFruta} ha sido eliminada con éxito.`);
                }
            }
        } else if(option == 3){
            console.log(`${frutas}`);
            continue;
        } else if (option == 4){
            let salirSiNo = await ask('Estás seguro de querer salir del programa? Si o No?');
            if (salirSiNo === "No"){
                console.log('Presione otra opción del menú.');
                option = 3;
            } else{
                console.log('Gracias por usar el programa!');
            }
        } else{
            console.log('Opción no válida.')
        }

    }
}

main();
