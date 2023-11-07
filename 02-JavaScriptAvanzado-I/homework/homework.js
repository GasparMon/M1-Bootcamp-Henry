// Ejercicio 01//

x = 1; // esta se declara como var X
var a = 5; // valor de a es 5
var b = 10; // valor de b es 10
var c = function (a, b, c) { //(cambia a (8, 9, 10))
   var x = 10; // se declara una nuevo var X
   console.log(x); // hace console.log de X que seria 10
   console.log(a); // hace un console.log de A (8)
   var f = function (a, b, c) {
      b = a; // el valor de B se iguala al de A (Ahora B es 8)
      console.log(b); // console.log de B (8)
      b = c; //se iguala el valor de B a C (ahora B es 10)
      console.log(b)
      var x = 5; // se declara x dentro del scoope de F "No afecta"
   };
   f(a, b, c); // f tiene los valores de a, b, c fuera del scoope de correccion inicial
   console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);



/// Ejercicio 03 ///
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // console log "Franco"

// Ejercicio 04 //

var instructor = 'Tony';
console.log(instructor); // Console.log "Tony"
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); //Console.log "Franco"
   }
})();
console.log(instructor); // Console.log "Tony"


/// EJERCICIO 05 //

var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash'; // NUEVA VAR INSTRUCTOR
   let pm = 'Reverse Flash'; // VARIABLE PM QUE SOLO TRABAJA EN EL SCOOP
   console.log(instructor); // Console.log THE FLASH
   console.log(pm); // console.log REVERSE FLASH
}
console.log(instructor); //console.log THE FLASH
console.log(pm); // cosole.log FRANCO.


///// COERCION 
/// EJERCICIO 01

console.log(6 / "3") // RESPUESTA 2
console.log("2" * "3") // RESPUESTA "6"
console.log(4 + 5 + "px") // RESPUESTA "9px"
console.log("$" + 4 + 5) // RESPUESTA "$45"
console.log("4" - 2) //RESPUESTA 2
console.log("4px" - 2) //RESPUESTA NaN
console.log(7 / 0) // RESPUESTA Infinity
console.log({}[0]) // Undefined
console.log(parseInt("09")) //RESPUESTA 09
console.log(5 && 2) //RESPUESTA 2
console.log(2 && 5) //RESPUESTA 5
console.log(5 || 0) // RESPUESTA 5  (toma el primer valor diferente a 0)
console.log(0 || 5) //RESPUESTA 5
console.log([3]+[3]-[10]) // RESPUESTA 
console.log(4>2>1) // RESPUESA false
console.log([] == ! []) // RESPUESTA true

////OUTPUT ///

function test() {
    console.log(a); // Undefined
    console.log(foo()); // 2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();

 /// SEGUNDO CODIGO

 var snack = 'Meow Mix';

function getFood(food) {
   if (food) { // al ser false no entra el if
      var snack = 'Friskies';
      console.log (snack);
   }
   console.log(snack); // devolvera UNDEFINED
}

getFood(false);

//// EVENT LOOP

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // retorna Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // retorna undefined??

///EVENT LOOP

function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing(); // 1 - 4 - 3 - 2



///// Ejercicio 2 // ///////////
console.log(bar); // console.log undefined (no esta declarado?)
console.log(baz); // console.log not defined
foo(); // retorna "Hola"
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;

