/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   let time = new Date();
   let hr = time.getHours()+6;
   let mn = time.getMinutes();

   if(hr < 7 || ( hr >= 18  || (hr >= 17 && mn < 30)) ){

        document.getElementById("target").innerHTML= "good night";

   }else {

        document.getElementById("target").innerHTML= "hello ";


   }
})();
