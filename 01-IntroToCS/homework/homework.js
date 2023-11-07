'use strict';

function BinarioADecimal(num) {

   let arr = num.split("").reverse();
   let res = 0;

   for(let i = 0; i < arr.length; i++){
       res += (Math.pow(2, i) * arr[i])
   }
   return (res);
}

function DecimalABinario(num) {

   let resultado = [];

   while(num >= 1 ){

      var residuo = Math.floor(num % 2)
      resultado.unshift(residuo);

      num = num /2
   }
   return(resultado.join(""))
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
