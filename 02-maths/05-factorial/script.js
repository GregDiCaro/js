/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    
    // to get the value of an input: document.getElementById("element-id").value
        
    var fact =  document.getElementById("number");
    

        run.addEventListener("click", function() {

        var resultat = 1;
        
        for( var i = 1 ; i <= fact ; i++){

            resultat = resultat * i;

        }document.body =("le resultat de la factorielle de " +fact+ " est " + resultat).value;



    });

})();

        // var fact =  6;
        // var resultat = 1;
        // for( var i = 1 ; i <= fact ; i++){

        //     resultat = resultat * i;

        // }console.log("le resultat de la factorielle de " +fact+ " est " + resultat);
