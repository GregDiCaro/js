/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () =>{
     
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
               
                var y = Number(document.getElementById("year").value);
               
                for(let i=0 ; i <= 11 ; i++){
                    
                    var d = new Date(y, i, 13);

                    if(d.getDay() == 5){
                        alert(months[d.getMonth()] + " has a 13th Friday !")
                    } else {

                        
                    };
                }  
            })

})();
