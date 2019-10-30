$(document).ready(function() {
    // Insert your JQuery code for the menu

//  1 Button 'start game' redirigeant vers la page (game.html) à l'aide de JQuery
$("section").append("<h1 id=MenuPlay>PUISSANCE 4</h1>");
$("#MenuPlay").append("<p id=ready class=>READY TO PLAY?</p>");
$("section").append("<img id=buttonStart src=img/startButton.png alt=start>");



 $("#buttonStart").click(function() {
 window.location.replace("game.html")
 
 });
    

})

// -----------------------------------------STEP 1--------------------------
// Implémenter un 'launch menu' pour votre jeu sur la page menu, ce menu doit au minimum contenir : 

// 1 Un button 'start game' qui au click devras rediriger vers la page du jeu (game.html) à l'aide de JQuery

// 2 Un button 'rules' qui au click feras apparaitre un nouveau bloc qui détaille les regles du jeu, toujours à l'aide de JQuery
