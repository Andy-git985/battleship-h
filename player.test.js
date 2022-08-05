const Ship = require('./ship.js');
const Gameboard = require('./gameboard.js');
const Player = require('./player.js');

test('2 players hit test', () => {
  const ship1 = Ship(1);
  const ship2 = Ship(2);
  const player1 = Player();
  const player2 = Player();
  player2.placeShip(ship1, 0);
  player2.placeShip(ship2, 1);
  player2.placeShip(ship2, 2);
  player1.attack(player2, 0);
  player1.attack(player2, 1);

  expect(player1.attack(player2, 2)).toStrictEqual(true);
});
