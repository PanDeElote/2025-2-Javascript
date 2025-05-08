// Ejercicio: Crear una calculadora simple que realice operaciones básicas (suma, resta, multiplicación y división) entre dos números.

const { ask } = require('../helpers/input');

async function main() {
  const num1 = Number(await ask('Ingresa el primer número: '));
  const num2 = Number(await ask('Ingresa el segundo número: '));

  const suma = num1 + num2;
  const resta = num1 - num2;
  const multiplicación = num1 * num2;
  const division = num1 / num2;
  // TODO: Implementar la resta, multiplicación y división

  console.log('Suma:', suma);
  console.log('resta:', resta);
  console.log('Multiplicación:', multiplicación);
  console.log('División:', division);

  // TODO: Mostrar el resultado de la resta, multiplicación y división

}

main();

//MI VERSIÓN 
const { ask } = require('../helpers/input.js');

async function main() {
  console.log('Ingresa los números con los que trabajaremos');
  const num = Number(await ask('Ingresa un número: '));
  const otronum = Number(await ask('Ingresa el segundo número: '));
  const operacion = String(await ask('suma, resta, multiplicación o división? (1, 2, 3 o 4 respectivamente): '))
  
  if ( operacion == 1)
  {
    Suma = num + otronum;
    console.log(` ${num} + ${otronum} = ${Suma}`);
  } else 
  {
    if ( operacion == 2){
        Resta = num - otronum;
        console.log(` ${num} - ${otronum} = ${Resta}`);
    }
    else{
        if ( operacion == 3){
            Mult = num * otronum;
            console.log(` ${num} * ${otronum} = ${Mult}`);
        } 
        else{
            Division = num / otronum;
            console.log(` ${num} / ${otronum} = ${Division}`);
        }
    }
    

  }
  
}

main();
