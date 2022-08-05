const Ship = require('./ship.js');
const Gameboard = require('./gameboard.js');
const Player = require('./player.js');

test('name test', () => {
  const ship1 = Ship(1);
  const ship2 = Ship(2);
  const player1 = Player('Player 1');
  player1.placeShip(ship1, 0);
  // const player2 = Player();
  // player2.placeShip(ship1, 0);
  // player2.placeShip(ship2, 1);
  // player2.placeShip(ship2, 2);
  // player1.attack(player2, 0);
  // player1.attack(player2, 1);
  // // const player1 = Player('James');
  // expect(player1.name).toStrictEqual('James');
  expect(player1.board).toStrictEqual(true);
});
