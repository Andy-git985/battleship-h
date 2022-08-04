// const mod = require('./ship.js');

// test('attack one ship sunk test', () => {
//   const ship1 = mod.Ship(2);
//   const board = mod.Gameboard;
//   const placeArr = [0, 1];
//   placeArr.forEach((e) => board.placeShip(ship1, e));
//   let attack = 0;
//   if (board.receiveAttack(attack)) {
//     board.board[attack].hit(attack);
//   } else {
//     console.log('miss');
//   }
//   attack = 1;
//   if (board.receiveAttack(attack)) {
//     board.board[attack].hit(attack);
//   } else {
//     console.log('miss');
//   }
//   expect(board.board[attack].isSunk()).toStrictEqual(true);
// });

// test('add multiple ships and test sunk', () => {
//   const ship1 = mod.Ship(2);
//   const ship2 = mod.Ship(1);
//   const board = mod.Gameboard;
//   let placeArr = [0, 1];
//   placeArr.forEach((e) => board.placeShip(ship1, e));
//   placeArr = [2];
//   placeArr.forEach((e) => board.placeShip(ship2, e));
//   let attack = 2;
//   if (board.receiveAttack(attack)) {
//     board.board[attack].hit(attack);
//   } else {
//     console.log('miss');
//   }
//   expect(board.board[attack].isSunk()).toStrictEqual(true);
// });

// test('multi one ship one sink', () => {
//   const ship1 = mod.Ship(1);
//   const ship2 = mod.Ship(1);
//   const board = mod.Gameboard;
//   let placeArr = [0];
//   placeArr.forEach((e) => board.placeShip(ship1, e));
//   placeArr = [1];
//   placeArr.forEach((e) => board.placeShip(ship2, e));
//   let attack = 0;
//   if (board.receiveAttack(attack)) {
//     board.board[attack].hit(attack);
//   } else {
//     console.log('miss');
//   }
//   expect(board.board[attack].isSunk()).toStrictEqual(true);
// });

// test('no object on board', () => {
//   const board = mod.Gameboard;
//   expect(board.checkShips()).toStrictEqual(true);
// });
