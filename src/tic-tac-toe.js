class TicTacToe {
    constructor() {
this.currentPlayer = 'x';
        this.gameField = [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ];
        this.winner = null;
   
    } 
     
    
    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] == null){
            this.gameField[rowIndex][columnIndex] = this.currentPlayer;

            this.currentPlayer = this.currentPlayer ==='x'? 'o': 'x'; 
        } 
        
        
    }

    isFinished() {
        if (this.isDraw() || this.getWinner()){
            return true
        }

    }

    getWinner() {
        for (let i = 0; i < this.gameField.length; i++) {
            if (this.gameField[i][0] === this.gameField[i][1] && this.gameField[i][1] === this.gameField[i][2]) this.winner = this.gameField[i][0];
          }
    
          for(let j = 0; j < this.gameField[0].length; j++) {
            if (this.gameField[0][j] === this.gameField[1][j] && this.gameField[1][j] === this.gameField[2][j]) this.winner = this.gameField[0][j];
          }
    
          if (this.gameField[0][0] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[2][2]) this.winner = this.gameField[0][0];
    
          if (this.gameField[0][2] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[2][0]) this.winner = this.gameField[0][2];
          return this.winner;
      
    }

    noMoreTurns() {
        for (let i = 0; i < this.gameField.length; i++) {
            for (let j = 0; j < this.gameField[i].length; j++) {
              if (this.gameField[i][j] == null) return false;
            }
          }
          return true;

    }

    isDraw() {
        return this.noMoreTurns() && (this.getWinner() == null); 
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex] 

    }
}

module.exports = TicTacToe;
