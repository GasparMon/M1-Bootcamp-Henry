'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree{

   constructor(value){

      this.value = value;
      this.right = null;
      this. left = null;
   }
}

BinarySearchTree.prototype.insert = function(value){

   if(value > this.value){

       if(!this.right){

           this.right = new BinarySearchTree(value)

       }else{

           return this.right.insert(value)
       }
   }else if(value < this.value){

       if(!this.left){

           this.left = new BinarySearchTree(value)
       }else{

           return this.left.insert(value);

       }
   }
}

BinarySearchTree.prototype.size = function(){

   if(!this.left && !this.right){

      return 1;

   } else if(!this.left){


       return 1 + this.right.size();

   } else if(!this.right){


       return 1 + this.left.size();

   } else if(this.right && this.left){

       return 1 + this.right.size() + this.left.size();
   }
}

BinarySearchTree.prototype.contains = function(value){

   if(this.value === value){

       return true;

   } else if(value < this.value && this.left){

       return this.left.contains(value);

   } else if (value > this.value && this.right){

       return this.right.contains(value);

   } else {

       return false;
   }

}

BinarySearchTree.prototype.depthFirstForEach = function (callback, order) {
   if (order === 'pre-order') {
     callback(this.value);
   }
 
   if (this.left) {
     this.left.depthFirstForEach(callback, order);
   }
 
   if (order === 'in-order' || order === null || order === undefined) {
     callback(this.value);
   }
 
   if (this.right) {
     this.right.depthFirstForEach(callback, order);
   }
 
   if (order === 'post-order') {
     callback(this.value);
   }
 };

 BinarySearchTree.prototype.breadthFirstForEach = function (callback) {
   const queue = [this];
   while (queue.length > 0) {
     const node = queue.shift();
     callback(node.value);
     if (node.left) {
       queue.push(node.left);
     }
     if (node.right) {
       queue.push(node.right);
     }
   }
 };
 

 




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
