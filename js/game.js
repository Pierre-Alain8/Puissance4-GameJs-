$(document).ready(function() {

 // 2.  button 'rules'
//  $("section").append("<button id=Rules> RULES </button>");
//  $("#Rules").append("<img id=buttonRules src=img/rules.png alt=rules>");
//  $("section").append("<div id=textRules> <p>Nombre de joueurs : 2 <br>Pour gagner une partie de puissance 4, il suffit d’être le premier à aligner 4 jetons de sa couleur horizontalement, verticalement et diagonalement</p> </div>")
//  $("div").hide();


 $("#Rules").click(function(){
 $("div").toggle();
 
 });

 puissance4 = new Puissance4()


});
