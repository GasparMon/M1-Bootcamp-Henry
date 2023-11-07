"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let pivot = array.splice(Math.floor(array.length / 2), 1);
  let left = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if (pivot >= array[i]) {
      left.push(array[i]);
    }
    if (pivot < array[i]) {
      right.push(array[i]);
    }
  }

  if (left.length > 1) {
    left = quickSort(left);
  }
  if (right.length > 1) {
    right = quickSort(right);
  }

  return left.concat(pivot, right);
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length === 1) {
    return array;
  }

  let arrayDiv = Math.floor(array.length / 2);

  let result = [];

  let left = array.slice(0, arrayDiv);
  let right = array.slice(arrayDiv);

  left = mergeSort(left);
  right = mergeSort(right);

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  result = result.concat(left, right);

  return result;

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
