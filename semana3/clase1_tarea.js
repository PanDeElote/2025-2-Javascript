// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

const { ask } = require('../helpers/input');

function numeroDeAprobados(numeros){
    aprobados = 0;
    reprobados = 0;

    for(let i = 0; i < numeros.length; i++){
        if (numeros[i] >= 70){
            aprobados++;
        } else{
            reprobados++;
        }
    }
    return aprobados;
}

function capacesDeVotar(numeros){
    puedeVotar = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] >= 18){
            puedeVotar++;
        }
    } 
    return puedeVotar;
}

function promedio(numeros){
    suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma = suma + numeros[i];
    }
    prom = suma / numeros.length;
    return prom;
} 
function MayorMenor(numeros){
    mayor = numeros[0];
    menor = numeros[0];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < menor){
            menor = numeros[i];
        }
        if (numeros[i] > mayor){
            mayor = numeros[i];
        }
    }
    return{mayor, menor};
}


async function main(){

    let alumnos = [];
    let i = 0;
    let agregar = 'Si';

    while(agregar === 'Si'){
        let alumno = {};

        let nombre = await ask('Ingrese el nombre del alumno: ');
        alumno.nombre = nombre;
        let edad = Number(await ask('Ingresar la edad del alumno: '));
        alumno.edad = edad;
        let calificacion = Number(await ask('Ingrese la calificación del alumno: '));
        if(calificacion <= 100 && calificacion >= 0){
            alumno.calificacion = calificacion;

            alumnos.push(alumno);
            alumnos[i] = alumno;
            i++;
            console.log(alumnos);

            agregar = await ask('Deseas seguir agregando alumnos? Si o No? ');
            if(agregar === 'Si'){
            continue;
            } else{
            agregar = 'No';
            }

        } else{
            console.log('La calificación no es válida, no se guardarán los datos del alumno. Intente de nuevo.')
        }
    }
   
   const edades = alumnos.map(alumno => alumno.edad);
   const calificaciones = alumnos.map(alumno => alumno.calificacion);
   const masAltoMasBajo = MayorMenor(calificaciones);


   console.log(`Cantidad de alumnos aprobados: ${numeroDeAprobados(calificaciones)}`);
   console.log(`Cantidad de alumnos que pueden votar: ${capacesDeVotar(edades)}`);
   console.log(`Promedio de los alumnos: ${promedio(calificaciones)}`);
   console.log(`Calificación más alta: ${masAltoMasBajo.mayor}`);
   console.log(`Calificación más baja: ${masAltoMasBajo.menor}`);

}
main();