// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main(){
    let cantidadDeEdades = Number(await ask('Ingresa el número de edades a ingresar: '));
    let edadesLista = [];
    let mayorDeEdad = 0;

    for (i = 0; i < cantidadDeEdades; i++){
        let agregarEdad = Number(await ask('Ingresa una edad: '));
        edadesLista.push(agregarEdad);

        console.log(`${edadesLista[i]} está en la posición ${i}`);

        if (agregarEdad > 18){
            mayorDeEdad++;
        } else{
            continue;
        }
    }

    console.log(`${mayorDeEdad} personas son mayores de edad `);
    
}

main();