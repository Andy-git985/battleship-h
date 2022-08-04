const Ship = require('./ship.js');
const GameBoard = require('./gameboard.js');

test('attack one ship sunk test', () => {
  const ship1 = Ship(1);
  const board = GameBoard;
  board.placeShip(ship1, 0);
  expect(board.board).toStrictEqual();
});
