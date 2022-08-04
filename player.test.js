const Ship = require('./ship.js');
const Gameboard = require('./gameboard.js');
const Player = require('./player.js');

test('2 players hit test', () => {
  const ship1 = Ship(1);
  const player1 = Player();
  const player2 = Player();
  player2.placeShip(ship1, 0);
  player1.attack(player2, 0);
  expect(player2.hits).toStrictEqual([0]);
});
