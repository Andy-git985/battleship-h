const Gameboard = require('./gameboard.js');

// const Ship = (length) => {
//   const hits = [];
//   const hit = (x) => hits.push(x);
//   const isSunk = () => hits.length === length;
//   return { length, hits, hit, isSunk };
// };

// const Gameboard = (() => {
//   const board = Array(9).fill('');
//   const hits = [];
//   const misses = [];
//   const placeShip = (ship, coordinate) => {
//     board[coordinate] = ship;
//   };
//   const receiveAttack = (x) => {
//     return board[x] !== '' ? hits.push(x) : miss.push(x);
//   };
//   const checkShips = () => {
//     return board.every((e) => typeof e === 'string');
//   };
//   return { board, hits, misses, placeShip, receiveAttack, checkShips };
// })();

const Player = () => {
  const prototype = Gameboard;
  const attack = (enemy, coordinate) => enemy.receiveAttack(coordinate);
  return Object.assign({}, prototype, { attack });
};
console.log(Player);
module.exports = Player;
