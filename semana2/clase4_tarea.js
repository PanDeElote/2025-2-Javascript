//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

function analizarCalificaciones(numeros){
    let cantidadDeAprobados = 0;
    let cantidadDeReprobados = 0;
    let sumaTotal = 0;
    let menor = numeros[0];
    let mayor = numeros[0];

    for (let i = 0; i < numeros.length; i++){
        if( numeros[i] >= 70){
            cantidadDeAprobados++;
        } else{
            cantidadDeReprobados++;
        }

        if(numeros[i] < menor){
            menor = numeros[i];
        }
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }

        sumaTotal = sumaTotal + numeros[i];
    }

    promedio = sumaTotal / numeros.length;

    return {cantidadDeAprobados, cantidadDeReprobados, promedio, menor, mayor};

}

//NOTAAAAA: A VECES ES MEJOR HACER LAS FUNCIONES POR SEPARADO

async function main(){
    let numDeCalificaciones = Number(await ask('Ingrese la cantidad de calificaciones a analizar: '));
    let calificaciones = [];
    console.log('Escriba la lista de calificaciones a continuación: ')

    for(let i = 0; i < numDeCalificaciones; i++){
        let calificacionNueva = Number(await ask(`Ingrese la calificación ${i + 1}: `));
        if((calificacionNueva <= 100) && (calificacionNueva >= 0)){
            calificaciones.push(calificacionNueva);
        } else{
            console.log('Este número no es válido. Ingresa otro.')
            i--;
        }
    }
    console.log(calificaciones);

    const analisis = analizarCalificaciones(calificaciones);
    console.log(`De la lista de calificaciones la información obtenida es: \nCantidad de aprobados: ${analisis.cantidadDeAprobados}\nCantidad de reprobados: ${analisis.cantidadDeReprobados}\nPromedio del arreglo: ${analisis.promedio}\nCalificación más baja: ${analisis.menor}\nCalificación más alta: ${analisis.mayor}`);
}
main();