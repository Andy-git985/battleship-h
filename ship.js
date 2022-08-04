const Ship = (length) => {
  const hits = [];
  const hit = (x) => hits.push(x);
  const isSunk = () => hits.length === length;
  return { length, hits, hit, isSunk };
};

const Gameboard = (() => {
  const board = Array(9).fill('');
  const hits = [];
  const misses = [];
  const placeShip = (ship, coordinate) => {
    board[coordinate] = ship;
  };
  const receiveAttack = (x) => {
    return board[x] !== '';
  };
  const checkShips = () => {
    return board.every((e) => typeof e === 'string');
  };
  return { board, hits, misses, placeShip, receiveAttack, checkShips };
})();

// const ship1 = Ship(2);
// Gameboard.placeShip(ship1, 0);
// Gameboard.placeShip(ship1, 1);

// const attack = 3;
// if (Gameboard.receiveAttack(attack)) {
//   Gameboard.board[attack].hit(attack);
// } else {
//   console.log('miss');
// }

// console.log(Gameboard.board[0].isSunk());
// console.log(Gameboard.board);

console.log(Gameboard.checkShips());

module.exports.Ship = Ship;
module.exports.Gameboard = Gameboard;
