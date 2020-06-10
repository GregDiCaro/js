/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    for (let nombre = 1 ; nombre <= 100 ; nombre++){
  
        if (nombre %3 === 0 && nombre %5 === 0){
      
              console.log("fizzbuzz");
          
          
          }else if (nombre %3 === 0) {
          
              console.log("fizz");
          
          }if (nombre %5 === 0){
          
              console.log("buzz");
              
          }
      
          console.log(nombre);
          
      }
    

})();

// var readline= require("readline-sync");


// var nombre = readline.questionInt("entre un nombre entre 1 et 100 : ");    
// while (nombre < 1 || nombre > 100) {

//     nombre = readline.questionInt("entre un nombre entre 1 et 100 : ");  

// }
 



