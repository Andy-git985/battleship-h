const Gameboard = require('./gameboard.js');

const Player = () => {
  const prototype = Gameboard;
  const attack = (enemy, coordinate) => enemy.receiveAttack(coordinate);
  return Object.assign({}, prototype, { attack });
};

module.exports = Player;
