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
        

        
        //ici on udapte notre table html (pour placer visuellement le jeton du joueur 1)
        if (this.playerTurn === this.playerOne) {
            $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr('src', './img/yello-coin.gif');
        }

        //ici on udapte notre table html (pour placer visuellement le jeton du joueur 2)
        if (this.playerTurn === this.playerTwo) {
            $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr('src', './img/red-coin.gif');
        }
       
        // var player = this.playerTurn;
        // 
        // 
        this.checkWinner(x, y, player);

        


        this.grid[y][x] = this.playerTurn;
        // L'opérateur tenair comporte 3 opérandes, ce procédé permet de simplifier l'écriture du if : condition ? exprSiVrai : exprSiFaux 
        this.playerTurn = (this.playerTurn === this.playerOne) ?  this.playerTwo : this.playerOne;

        if (this.playerTurn === this.playerOne || this.playerTurn === this.playerTwo ) {
            this.countTurn ++; 
            console.log(this.countTurn);
            
        }

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
    checkWinner(x, y, player){
    
     // victoire horizontale
     var count = 0;
     var player = this.playerTurn;
 
     for (let horizon = 0; horizon < this.gridDimension.x; horizon++) {
         
         if (count >= 4) {
             return true;
             
         } else {
             count = (this.grid[x][horizon] == player) ? count + 1 : 0;
         }
         console.log(count);
         
 
     }
     
     // victoire verticale
     for (let verti = 0; verti < this.gridDimension.y; verti++) {
         
         if (count >=4 ) {
             return true;
         } else {
             count = (this.grid[y][verti] == player) ? count +1 : 0;
         }
         console.log(count);
    

    // var directions = {
    //     left:   {x: -1, y:  0},
    //     right:  {x:  1, y:  0},
    //     top:    {x:  0, y:  1},
    //     bottom: {x:  0, y: -1},
    //     topLeft:     {x: -1, y:  1},
    //     topRight:    {x:  1, y:  1},
    //     bottomLeft:  {x: -1, y: -1},
    //     bottomRight: {x:  1, y: -1}
                
    // };
    //     // console.log(directions);

    // function wichPlayer (x, y) {
    //     if( x < 0 || x >= grid[x][y].lenght) {
    //         return false
    //     } else {
    //         return grid[x][y]
    //     };
        
    // };

    

    // function neighbourPlayer (x, y, directions) {
    //     var movement = directions[directions]
    //     return {
    //         x: x + movement.x, 
    //         y: y + movement.y
    //     };

    // };
    // // console.log(neighbourPlayer);
    

    // function isSamePlayer (x, y, directions) {
    //     var currentPlayer = wichPlayer(x, y)

    //     var next = neighbourPlayer(x, y, directions)
    //     var nextPlayer = wichPlayer(x, y)
    //     return currentPlayer === nextPlayer
    // };

    // function notSamePlayer (x, y, directions) {
    //     return !isSamePlayer (x, y, directions)
    // };

    // function countSamePlayers (x, y, direction) {
    //     if (isSamePlayer(x, y, direction)) {
    //         var next = neighbourPlayer(x, y, direction)
    //         return 1 + countSamePlayers(next.x, next.y, direction)
    
    //     } else {
    //         return 0
    //     }
    // }
    
    
    // function wonHorizontal (x, y) {
    //     var total = countSamePlayers(x, y, 'left') +
    //                 countSamePlayers(x, y, 'right') + 1
    //     return total >= 4
    // }
    
    // function wonVertical (x, y) {
    //     var total = countSamePlayers(x, y, 'top') +
    //                 countSamePlayers(x, y, 'bottom') + 1
    //     return total >= 4
    // }
    
    // function wonDiagonal (x, y) {
    //     var total = countSamePlayers(x, y, 'topLeft') +
    //                 countSamePlayers(x, y, 'bottomRight') + 1
    //     return total >= 4
    // }
    
    // function wonAntiDiagonal (x, y) {
    //     var total = countSamePlayers(x, y, 'topRight') +
    //         countSamePlayers(x, y, 'bottomLeft') + 1
    //     return total >= 4
    // }

    // function won (x,y) {
    //     return wonHorizontal(x, y) ||
    //     wonVertical(x, y)  ||
    //     wonDiagonal (x, y) ||
    //     wonAntiDiagonal(x, y)
    // }
    

    };

    // Ces méthodes vont se retrouver dans le ShowWinner afin de réveler les gagnants
    // checkCol(){};

    // checkHorizontale(){

    // };

    // checkDiag(){

    // };
    
};


