const TicTacToe = require('./src/tic-tac-toe.js');


game = new TicTacToe();
game.nextTurn(2, 2)
game.isFinished()

game.nextTurn(1, 1)
game.isFinished()

game.nextTurn(2, 1)
game.isFinished()

game.nextTurn(1, 2)
game.isFinished()

game.nextTurn(0, 2)
game.isFinished()

game.nextTurn(1, 1)
game.isFinished()

game.nextTurn(0, 1)
game.isFinished()

game.nextTurn(0, 0)
game.isFinished()

game.nextTurn(2, 2)
game.isFinished()

game.nextTurn(0, 1)
game.isFinished()

game.nextTurn(2, 0)
game.isFinished()

game.nextTurn(1, 0)
//game.isFinished()
console.log(game.viewField())
console.log(game.getWinner())
console.log(game.isFinished())
