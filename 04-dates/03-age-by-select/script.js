/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {


    document.getElementById("run").addEventListener("click", function() {

        let date = new Date;
        let dobDay= date.getDate();
        let dobMonth= date.getMonth()+1;
        let dobYear= date.getFullYear();
        // console.log("le "+ dobDay +"/"+ dobMonth +"/"+ dobYear);

        let select = document.getElementById("dob-day");
        var annif = select[select.selectedIndex].value;
        var mois= select[select.selectedIndex].value;
        select = document.getElementById("dob-year");
        var annee = select[select.selectedIndex].value;
        alert("le"+annif+"/"+mois+"/"+annee);
        
        var result = dobYear - annee;
            if(dobMonth<=mois){
                if(dobDay<annif){
                    result--;
                }
            }
            alert(result);


        });





})();


//  let now = new Date();
//  let anneEncour = now.getFullYear();
//  let jourDannif = jourDannif.getFullYear();
//  console.log(jourDannif);
 
 

    // let day=22;  
    // let month = 7;
   
    // let year = 1981; 
    // console.log(year+ " "+ month + "  "+ day + "  ");
    
    // let resultYear = 2020;

    // console.log(resultYear - year);
    

    // let resulMonth = 12 ;

    // console.log(resulMonth -month);

    // let resultDay = 30 ;

    // console.log(resultDay - day );
    