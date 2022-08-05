const Gameboard = require('./gameboard.js');

const Player = (name) => {
  const prototype = Gameboard();
  const attack = (enemy, coordinate) => enemy.receiveAttack(coordinate);
  return Object.assign({}, prototype, { name, attack });
};

module.exports = Player;
