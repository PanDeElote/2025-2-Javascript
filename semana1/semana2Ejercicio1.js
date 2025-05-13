const { ask } = require('../helpers/input');

/*async function main(){
    let limite = Number(await ask("Hasta qué número quieres que se imprima en pantalla? "));
    let i = 0;
    
    while (i <= limite){
        console.log (i);
        i++;
    }

}
main (); */

async function main(){
    /*Lista loa nombres ascendente y descendente*/
    const personas = [
        "María",
        "Ana",
        "Juan",
        "Luis",
        "Fernaando",
        "Fulano",
        "Sutano",
        "Perengano",
        "UUUIIAIAIIAI"
    ]

    for (let i = 0; i < personas.length; i++){
        console.log(personas[i]);
    }

    for ( let i = personas.length - 1; i >= 0 ; i--){
        console.log(personas[i]);
    }
}

main();


const frutas = ["Fresas", "Mango", "Kiwi", "Manzana", "Uvas"];
const cajon = Number(await ask("Qué cajón quieres abrir? 1-5 "));

for (let j = 1; j <= 5; j++){
    if (j === cajon){
        console.log("En el cajón hay: ", frutas[j - 1]);
    }
}