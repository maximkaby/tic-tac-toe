class TicTacToe {
    constructor() {
        this.field = new Array();
        for(let i=0; i < 3; i++){
            this.field[i] = new Array();
            for(let j = 0; j < 3; j++){
                this.field[i][j] = null;
            }
        }
        // 1) 'x'  2) 'o'
        this.curPlayer = 'x';
        this.isFinish = false;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.curPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.curPlayer;
            this.curPlayer = this.curPlayer == 'o' ? 'x' : 'o';
        }
    }

    isFinished() {
        let win = this.getWinner();
        if(win == null && this.noMoreTurns() == true)
            return true;
        return win == null ? false : true;
    }

    getWinner() {
        let winner = null;
        for(let i=0; i < 3; i++){
            let checkRow = true,
                checkCol = true;
            let symbolRow = this.field[i][0];
            let symbolCol = this.field[0][i];
            for(let j=1; j < 3; j++){
                if(symbolRow != this.field[i][j]){
                    checkRow = false;
                }
                if(symbolCol != this.field[j][i]){
                    checkCol = false;
                }

            }
            if(checkRow == true) {
                return symbolRow;
            }
            if(checkCol == true) {
                return symbolCol;
            }
        }


        let checkMain = true,
            checkSec = true;
        let symbolMain = this.field[0][0],
            symbolSec = this.field[0][this.field.length - 1];

        for(let i=0; i < 3; i++){


            let field;
            if(symbolMain != this.field[i][i]){
                checkMain = false;
            }

            field = this.field.length - 1 -i;
            if(symbolSec != this.field[i][field])
                checkSec = false;

        }

        if(checkSec == true)
            return symbolSec;
        if(checkMain == true)
            return symbolMain;

        return null;
    }

    noMoreTurns() {
        for(let i=0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(this.field[i][j] == null)
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        if(this.isFinished() == true &&
            this.getWinner() == null)
            return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }

    viewField(){
        for(let i=0; i < 3; i++){
            let str = '';
            for(let j = 0; j < 3; j++){
                str+=this.field[i][j] + "\t";
            }
            console.log(str);
        }
    }
}

module.exports = TicTacToe;
