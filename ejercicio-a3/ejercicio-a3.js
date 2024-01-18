'Use strict'
/* En base al resultado del ejercicio anterior agrupar en un 
array únicamente las palabras que tengan mas de 3 letras*/

let phrase = 'La programación web es fundamental para el progreso';

// Separo la frase en palabras usando split
let palabras = phrase.split(' ');

// Filtro las palabras que tienen más de 3 letras
let wordsThree = palabras.filter(palabra => palabra.length > 3);

// Mostrar el resultado en un alert
alert(`Las palabras que contienen más de 3 letras son: ${wordsThree.join(', ')}`);