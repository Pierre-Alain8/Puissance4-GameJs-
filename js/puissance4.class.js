class Puissance4 {
    constructor(gridDimension = {x: 7, y: 6}){
        console.log("constructor");


        this.gridDimension = gridDimension;
        this.playerOne = 1;
        this.playerTwo = 2;
        this.playerTurn = 1;
        this.maxTurn = this.gridDimension.x * this.gridDimension.y; 
        // définis le nombre de tours maximum jouables au niveau de la hauteur et de la largeur
        this.countTurn = 0;
        this.winner = null; 
        this.grid = []; 

        this.generateGrid();
        
        // L'événément click doit être ajouté dans les fonctionnalités
        $("td").click((event) => this.handleClick(event));

        

    }

    // Méthode permettant de générer la grille du puissance 4 
     generateGrid() { 
         console.log("generateGrid")
        for (let h = 0; h < this.gridDimension.y; h++) {
            this.grid[h] = []
            // This.grid[h] égal un nouveau tableau
            for (let l = 0; l < this.gridDimension.x; l++) {   
            this.grid[h][l] = 0;
            }   
        }
        console.log(this.grid)
         };


    // Méthode handleClick 
    handleClick(event){
        // Le handle click nous retourne les endroits où on a cliqué
        
       
        let x = parseFloat($(event.target).parent().attr("data-col"));
         // Parsefloat ressort en chaîne de caractère en Integer
        let y = this.checkLastIndex(x);
        // on indique à checkLastIndex quelle colonne pacourir. Tu me stock dans la variable Y le retour de la valeur CheckLastIndex
        console.log(y,x)

        this.addJeton(x,y);
 
    }

    checkLastIndex(x){
        for(let h = this.gridDimension.y -1; h>= 0; h--){
        // nous parcourons la hauteur en partant par le bas
            if(this.grid[h][x] === 0) {
                return h;
            }
        }
    }
        
    // Méthode d'ajout de jetons
    addJeton(x,y){
        // cibler/placer jeton sur img(html)
        // alterner le joueur courant(this.turn)
        // Udapte notre grille en mettant 1 ou 2 en fonction du joueur (à partir des coordonnées de la grille)
        // compter les tours (this.countTurn ++) incrémentation
        

        
        //ici on udapte notre table html (pour placer visuellement le jeton du joueur 1)
        if (this.playerTurn === this.playerOne) {
            $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr('src', './img/yello-coin.gif');
        }

        //ici on udapte notre table html (pour placer visuellement le jeton du joueur 2)
        if (this.playerTurn === this.playerTwo) {
            $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr('src', './img/red-coin.gif');
        }
       
        
        this.grid[y][x] = this.playerTurn;
        // L'opérateur tenair comporte 3 opérandes, ce procédé permet de simplifier l'écriture du if : condition ? exprSiVrai : exprSiFaux 
        this.playerTurn = (this.playerTurn === this.playerOne) ?  this.playerTwo : this.playerOne;

        if (this.playerTurn === this.playerOne || this.playerTurn === this.playerTwo ) {
            this.countTurn ++; 
            console.log(this.countTurn);
            
        }

       


        
       

        // this.playerOne.attr(src, img/yello-coin.gif); 
        // this.playerTwo.attr(src, img/red-coin.gif);

        console.log(this.grid);


        };

    
    SetCheckCol = function checkCol(){

    };

    SetCheckrRow = function checkRow(){

    };

    SetCheckrDiag = function checkDiag(){

    };

    //Méthode révélant le vainqueur 
     SetShowWinner = function showWinner(){
        if (winner == maxTurn) {
            countTurn = 42; 
    
            alert ('Egalité');
        }
        };

    
    // add_jeton(index) => <img.attr(src)
    
}