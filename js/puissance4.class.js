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
        
        // L'événément click doit être ajouté dans les méthodes
        $("#puissance4").click((event) => this.handleClick(event));

        

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
        if (y != null) {
            this.addJeton(x,y);
        }
        console.log(y,x)
        

        
        
      
      

        
 
    }

    // Méthode d'ajout de jetons
    addJeton(x,y){
        // cibler/placer jeton sur img(html)
        // alterner le joueur courant(this.turn)
        // Udapte notre grille en mettant 1 ou 2 en fonction du joueur (à partir des coordonnées de la grille)
        // compter les tours (this.countTurn ++) incrémentation
        
        this.grid[y][x] = this.playerTurn;
        //ici on udapte notre table html (pour placer visuellement le jeton du joueur 1)
        if (this.playerTurn === this.playerOne) {
            $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr('src', './img/yello-coin.gif');
        }

        //ici on udapte notre table html (pour placer visuellement le jeton du joueur 2)
        if (this.playerTurn === this.playerTwo) {
            $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr('src', './img/red-coin.gif');
        }

        this.countTurn ++; 
        
        var win = this.checkWinner(y, x, this.playerTurn);
        console.log(win);

    
        
        // L'opérateur tenair comporte 3 opérandes, ce procédé permet de simplifier l'écriture du if : condition ? exprSiVrai : exprSiFaux 
        this.playerTurn = (this.playerTurn === this.playerOne) ?  this.playerTwo : this.playerOne;
        
        // if (this.playerTurn === this.playerOne || this.playerTurn === this.playerTwo ) {
            
        //     console.log(this.countTurn);
            
        // }

        console.log(this.grid);
        

        };


    checkLastIndex(x){
        for(let h = this.gridDimension.y -1; h>= 0; h--){
        // nous parcourons la hauteur en partant par le bas
            if(this.grid[h][x] === 0) {
                return h;
            }
        }
        alert ('Colone remplie!');
    }
    

    //Méthode révélant le vainqueur 
    checkWinner(y, x,player){


     // victoire horizontale
    var count = 0;
 
    for (let horizon = 0; horizon < this.gridDimension.x; horizon++) {
        count = (this.grid[y][horizon] == player) ? count + 1 : 0;
        if (count >= 4) {
            return true;   
        };
 
    };
     
    // victoire verticale
    count = 0;
    for (let verti = 0; verti < this.gridDimension.y; verti++) {
        count = (this.grid[verti][x] == player) ? count +1 : 0;

        if (count >=4) {
        return true;
        };
    };
    // victoire diagonale 
    count = 0;
    var movePosition = x - y;
    
    for(let a = Math.max(movePosition, 0); a < Math.min(this.gridDimension.y, this.gridDimension.x + movePosition); a++){
        count = (this.grid[a][a - movePosition] == player) ? count+1 : 0;

        if (count >=4) {
            return true;   
        };
    };

    // victoire anti-diagonale 
    count = 0;
    var movePosition2 = x + y;

    for (let b = Math.max(movePosition2 - this.gridDimension.x + 1, 0); b < Math.min(this.gridDimension.y, movePosition2 + 1); b++) {
        count = (this.grid[b][movePosition2 - b] == player) ? count+1 : 0; 

        if (count >=4) {
            return true;   
        };
        
    };

return false;
        

};

    resetGame(){
    for (let a = 0; a < x; a++) {
        for (let b = 0; b < y; b++) {
        this.grid[a][b] = 0;
        };
    };
    this.countTurn = 0;
    this.winner = null;
};

    
    
};


