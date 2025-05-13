const { ask } = require('../helpers/input');

async function main() {
    /*IMPRIMIR NÚMEROS PARES DEL 1 AL 100*/

    for (let i = 1; i <= 100; i++){
        if ( i % 2 == 0){
            console.log(i);
        }
    }
    
}
main();