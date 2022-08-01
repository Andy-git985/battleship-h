const Ship = (length) => {
  const hits = [];
  const hit = (x) => {
    hits.push(x);
  };
  const getHits = () => hits;
  const isSunk = () => hits.length === length;
  const getName = () => 'ship';
  return {
    length,
    getHits,
    hit,
    isSunk,
    getName,
  };
};

const Gameboard = () => {
  let hit;
  const checkHit = () => hit;
  const board = new Array(9).fill('');
  const placeShip = (ship, coordinates) => {
    // const arr = [];
    // arr.push(...[coordinates]);
    // for (let i = 0; i < arr.length; i++) {
    //   board[arr[i]] = ship;
    // }
    if (typeof coordinates === 'number') {
      board[coordinates] = ship;
    } else {
      coordinates.forEach((c) => (board[c] = ship));
    }
  };

  const receiveAttack = (coordinate) => {
    if (board[coordinate] && board[coordinate] !== 'miss') {
      hit = true;
      return true;
    } else if (!board[coordinate]) {
      board[coordinate] = 'miss';
    }
  };

  const checkShips = (method) => {
    const shipSearch = board.filter((e) => typeof e !== 'string');
    return shipSearch.map(method);
  };

  const viewBoard = () => board.filter((e) => e);
  return { board, checkHit, placeShip, viewBoard, receiveAttack, checkShips };
};

module.exports.Ship = Ship;
module.exports.Gameboard = Gameboard;

const ship1 = Ship(3);
const ship2 = Ship(2);
const board = Gameboard();
board.placeShip(ship1, [0, 1, 2]);
board.placeShip(ship1, [3, 4]);

const attackShip = (arr) => {
  arr.forEach((e) => {
    board.receiveAttack(e);
    if (board.checkHit()) {
      board.board[e].hit(e);
    }
  });
};
attackShip([0, 1, 2]);
const secondShipSingle = 4;
board.receiveAttack(secondShipSingle);
if (board.checkHit()) {
  board.board[secondShipSingle].hit(secondShipSingle);
}
const result = board.checkShips((e) => e.getHits());
console.log(result);
console.log(ship1.length);
console.log(ship2.length);
console.log(ship2.hits);
