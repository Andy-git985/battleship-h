const mod = require('./ship.js');

// test('single ship sunk test', () => {
//   const ship1 = mod.Ship(1);
//   ship1.hit(0);
//   expect(ship1.isSunk()).toStrictEqual(true);
// });
// ! Passes
// test('sunk placement test', () => {
//   const ship1 = mod.Ship(1);
//   const board = mod.Gameboard();
//   board.placeShip(ship1, 0);
//   expect(board.board).toStrictEqual(true);
// });

// ! Pre dir comment
// test('sunk reference test', () => {
//   const ship1 = mod.Ship(1);
//   const board = mod.Gameboard();
//   board.placeShip(ship1, 0);
//   let coordinate = 0;
//   board.receiveAttack(coordinate);
//   if (board.checkHit()) {
//     board.board[coordinate].hit(coordinate);
//   }
//   expect(board.board[coordinate].isSunk()).toStrictEqual(true);
// });

// ! Passes
// test('multiple length placement test', () => {
//   const ship1 = mod.Ship(3);
//   const board = mod.Gameboard();
//   board.placeShip(ship1, [0, 1, 2]);
//   expect(board.board).toStrictEqual('array');
// });

// ! Pre dir comment
// test('multiple length ship hit test', () => {
//   const ship1 = mod.Ship(3);
//   const board = mod.Gameboard();
//   board.placeShip(ship1, [0, 1, 2]);
//   const firstAttack = 0;
//   const secondAttack = 1;
//   board.receiveAttack(firstAttack);
//   if (board.checkHit()) {
//     board.board[firstAttack].hit(firstAttack);
//   }
//   board.receiveAttack(secondAttack);
//   if (board.checkHit()) {
//     board.board[secondAttack].hit(secondAttack);
//   }
//   expect(board.board[secondAttack].isSunk()).toStrictEqual(false);
// });

// test('multiple length ship hit test using func()', () => {
//   const ship1 = mod.Ship(3);
//   const board = mod.Gameboard();
//   board.placeShip(ship1, [0, 1, 2]);
//   const attackShip = (arr) => {
//     arr.forEach((e) => {
//       board.receiveAttack(e);
//       if (board.checkHit()) {
//         board.board[e].hit(e);
//       }
//     });
//   };
//   attackShip([0, 1]);
//   expect(board.board[1].isSunk()).toStrictEqual(false);
// });
// test('multiple length ship sunk test using func()', () => {
//   const ship1 = mod.Ship(3);
//   const board = mod.Gameboard();
//   board.placeShip(ship1, [0, 1, 2]);
//   const attackShip = (arr) => {
//     arr.forEach((e) => {
//       board.receiveAttack(e);
//       if (board.checkHit()) {
//         board.board[e].hit(e);
//       }
//     });
//   };
//   attackShip([0, 1, 2]);
//   expect(board.board[1].isSunk()).toStrictEqual(true);
// });

// test('single ship sink test', () => {
//   const ship1 = mod.Ship(3);
//   const ship2 = mod.Ship(2);
//   const board = mod.Gameboard();
//   board.placeShip(ship1, [0, 1, 2]);

//   const attackShip = (arr) => {
//     arr.forEach((e) => {
//       board.receiveAttack(e);
//       if (board.checkHit()) {
//         board.board[e].hit(e);
//       }
//     });
//   };
//   attackShip([0, 1, 2]);
//   expect(board.checkShips((e) => e.isSunk())).toStrictEqual([true, true, true]);
// });

// test('single ship sink test', () => {
//   const ship1 = mod.Ship(3);
//   const ship2 = mod.Ship(2);
//   const board = mod.Gameboard();
//   board.placeShip(ship1, [0, 1, 2]);

//   const attackShip = (arr) => {
//     arr.forEach((e) => {
//       board.receiveAttack(e);
//       if (board.checkHit()) {
//         board.board[e].hit(e);
//       }
//     });
//   };
//   attackShip([0, 1, 2]);
//   expect(board.checkShips((e) => e.getHits())).toStrictEqual([
//     true,
//     true,
//     true,
//   ]);
// });

// test('multiple ship game over test fail', () => {
//   const ship1 = mod.Ship(3);
//   const ship2 = mod.Ship(2);
//   const board = mod.Gameboard();
//   board.placeShip(ship1, [0, 1, 2]);
//   board.placeShip(ship1, [3, 4]);

//   const attackShip = (arr) => {
//     arr.forEach((e) => {
//       board.receiveAttack(e);
//       if (board.checkHit()) {
//         board.board[e].hit(e);
//       }
//     });
//   };

//   attackShip([0, 1, 2]);
//   const secondShipSingle = 4;
//   board.receiveAttack(secondShipSingle);
//   if (board.checkHit()) {
//     board.board[secondShipSingle].hit(secondShipSingle);
//   }
//   expect(board.checkShips((e) => e.getHits())).toStrictEqual([
//     true,
//     true,
//     true,
//   ]);
// });

// ! Already commented
// test('multiple ship game over test succeed', () => {
//   const ship1 = mod.Ship(3);
//   const ship2 = mod.Ship(2);
//   const board = mod.Gameboard();
//   board.placeShip(ship1, [0, 1, 2]);
//   board.placeShip(ship1, [3, 4]);

//   const attackShip = (arr) => {
//     arr.forEach((e) => {
//       board.receiveAttack(e);
//       if (board.checkHit()) {
//         board.board[e].hit(e);
//       }
//     });
//   };
//   attackShip([0, 1, 2]);
//   attackShip([3, 4]);
//   expect(board.checkShips((e) => e.isSunk())).toStrictEqual(true);
// });
