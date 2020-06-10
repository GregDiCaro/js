/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const red = document.querySelector("#red");

    red.addEventListener('click' , () => {

        document.body.style.backgroundColor = "red";
    })
   

    const green = document.querySelector("#green");

    green.addEventListener('click' , () => {

        document.body.style.backgroundColor = "green";
    })
    

    const yellow = document.querySelector("#yellow");

        yellow.addEventListener('click' , () => {

            document.body.style.backgroundColor = "yellow";
        })
    
    
    const blue = document.querySelector("#blue");

    blue.addEventListener('click' , () => {

        document.body.style.backgroundColor = "blue";
    })
    
})();


// var couleur =document.querySelectorAll


// switch (couleur){

//         case "red" : document.body.style.backgroundColor = "red";

//         break;
//         case "green": document.body.style.backgroundColor = "green";

//         break;

//         case "yellow": document.body.style.backgroundColor = "yellow";

//         break;

//         case "blue": document.body.style.backgroundColor = "blue";

//         break;
        
        

    
// }
