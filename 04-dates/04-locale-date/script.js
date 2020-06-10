/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   var today = new Date();
  
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    document.getElementById("target").innerHTML = days[today.getDay()] + " " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear() + ", " + today.getHours() + "h" + today.getMinutes() + ".";


    
})();


