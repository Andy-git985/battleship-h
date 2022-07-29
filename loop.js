function loop(str) {
  return str.toUpperCase();
}

// module.exports = loop;

let playing = true;
const Player = (name) => {
  const doTurn = () => {
    const result = Math.floor(Math.random() * 2);
    console.log(`${name}'s turn: ${result}`);
    if (result === 1) {
      end = true;
    }
  };
  return { doTurn };
};

let end;
const player1 = Player('Sam');
const player2 = Player('Karen');
while (playing) {
  player1.doTurn();
  player2.doTurn();
  if (end) {
    playing = false;
    console.log('game done');
  }
}

const game = (player1, player2) => {
  const init = () => {
    player1 = Player();
    player2 = Player();
    player1.board = GameBoard();
    player2.board = GameBoard();
  };
  player1.board.placeShips;
  player2.board.placeShips;
  const playerMoves = () => {
    player.start();
    gameboard.receiveAttack();
    while (gameboard.check()) {
      // console.log('hit')
      gameboard.receiveAttack();
      gameboard.check();
    }
    player.end();
  };

  const loop = () => {};
};
