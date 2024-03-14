// const array = [
//     'Patate',
//     'Latte',
//     'Cioccolato',
//     'Bistecca vegana',
//     'Lanciafiamme'
// ];

// for (let index = 0; index < 10; index++) {
//     const element = array[index];
//     console.log(element);
// }

// let whileIndex = 0;
// while( whileIndex < array.length){
//     const element = array[whileIndex];
//     console.log(element)
//     whileIndex++;
// }


// let userNumber = parseInt( prompt('Inserisci un numero casuale'));

// while ( isNaN(userNumber) ){
//     userNumber = parseInt( prompt('Non hai inserito un numero, gentilmente inseriscine uno'));
// }

// console.log(userNumber, typeof userNumber);


// let prodotto = moltiplica(3,4);
// console.log(prodotto,  moltiplica(3,44),  moltiplica(3,34),  moltiplica(6, 11));

// function moltiplica(moltiplicatore, moltiplicando){
//     return moltiplicatore * moltiplicando;
// }

// console.log(mare);



// function getRandomInt(minimumNumber, maximumNumber){
//     return Math.floor( Math.random() * (maximumNumber - minimumNumber + 1) + minimumNumber );
// }

// for (let index = 0; index < 100; index++) {
//     console.log(getRandomInt(1,10), Math.random());
// }



// // # funzione che prende due argomenti: un array e un elemento da cercare,
// // # se lo trova return true, altrimenti return false

// function findInArray(haystack, needle){
//     for (let index = 0; index < haystack.length; index++) {
//         console.log(index);
//         const element = haystack[index];

//         if (element === needle){
//             return true;
//         }
//     }

//     // let index = 0;
//     // while( index < haystack.length){
//     //     console.log(index);
//     //     const element = haystack[index];

//     //     if (element === needle){
//     //         return true;
//     //     }

//     //     index++;
//     // }

//     return false;
// }

// console.log(findInArray(array, 'Patate'));

// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// const numbers = [];

// let sum = 0;
// while ( sum < 50){
//     const newNumber = parseInt(prompt('Type a new number'));
//     // ? sum = sum + newNumber;
//     if ( !isNaN(newNumber)){
//         sum += newNumber;
//         numbers.push(newNumber);
//     }
// }

// console.log('Numbers: ', numbers);
// console.log('Total sum: ', sum);

/**
 * Snack3
 *
    // % Fai inserire un numero, che chiameremo N, all’utente. 5
    //% genero 5 array, ognuno formato da 10 numeri casuali (da 1 a 100)
    // # Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    // # Ogni volta che ne crei uno, stampalo.
 */

// const userNumber = parseInt(prompt('type a number'));

// for (let index = 0; index < userNumber; index++) {
//     console.log(randomNumsArray());
// }

// function randomNumsArray(){
//     const newArray = [];

//     for (let index = 0; index < 10; index++) {
//         newArray.push( getRndInteger(1,100) );
//     }
//     return newArray;
// }

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// ? scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari

let userNumber = parseInt(prompt('Type a number'));


let result = oddOrEven(userNumber);
console.log(result);

function oddOrEven(number){
    if( number % 2 === 0){
        return 'even';
    } else {
        return 'odd';
    }
}