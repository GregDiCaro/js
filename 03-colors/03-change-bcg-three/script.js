/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const colorRandom = document.querySelector("#run");

    colorRandom.addEventListener("click" , function(){

        let test= Math.floor(Math.random()*256);
        let test1= Math.floor(Math.random()*256);
        let test2= Math.floor(Math.random()*256);
        let rgb = "rgb("+ test + "," + test1 + ","+ test2+ ")";
        
        document.body.style.backgroundColor = rgb;
        
    })

   
})();
