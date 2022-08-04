const Ship = require('./ship.js');
const Gameboard = require('./gameboard.js');

test('attack one ship sunk test', () => {
  const ship1 = Ship(2);
  const board = Gameboard;
  const placeArr = [0, 1];
  placeArr.forEach((e) => board.placeShip(ship1, e));
  let attack = 0;
  if (board.receiveAttack(attack)) {
    board.board[attack].hit(attack);
  } else {
    console.log('miss');
  }
  attack = 1;
  if (board.receiveAttack(attack)) {
    board.board[attack].hit(attack);
  } else {
    console.log('miss');
  }
  expect(board.board[attack].isSunk()).toStrictEqual(true);
});
