"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  var array = [1];
  var divisor = 2;

  while (num !== 1) {
    if (num % divisor === 0) {
      array.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  var swap = true;

  while (swap) {
    swap = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let current = array[i];
        array[i] = array[i + 1];
        array[i + 1] = current;

        swap = true;
      }
    }
  }

  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > array[i]) {
        let aux = array[j];
        array[j] = array[i];
        array[i] = aux;

        i--;
      }
    }
  }

  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let aux = array[j];
        array[j] = array[i];
        array[i] = aux;
      }
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
