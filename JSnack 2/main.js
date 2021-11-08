/* A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25] */

function genSquares (element) {
    return element.map(el => el * el);
}

console.log(genSquares([1,10,5,9]));