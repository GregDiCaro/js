/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
   
    document.getElementById("run").addEventListener("click" , ()=>{

       
        
        
        
       
        let nombres = [8,35,56,79,87,19,49,65,36,99];
        
            console.log(Math.min(...nombres));
            console.log(Math.max(...nombres));
            
            let resultat = 0;
            for(let i = 0 ; i < nombres.length ; i++){

                    resultat = resultat + nombres[i];

               } console.log(resultat);

            
                console.log(resultat/nombres.length);
               
            
        
        
    });

})();
