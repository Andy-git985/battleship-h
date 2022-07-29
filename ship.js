const Ship = (length) => {
  const hits = [];
  const hit = (x) => {
    hits.push(x);
  };
  const isSunk = () => hits.length === length;
  const getName = () => 'ship';
  return {
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
    // if (hit) {
    //   const shipSearch = board.filter((e) => typeof e === 'string');
    //   return shipSearch.every((e) => `${e}.${method}()`);
    // }
    const shipSearch = board.filter((e) => typeof e !== 'string');
    return shipSearch.every((e) => e[method]());
  };
  const viewBoard = () => board.filter((e) => e);
  return { board, checkHit, placeShip, viewBoard, receiveAttack, checkShips };
};

module.exports.Ship = Ship;
module.exports.Gameboard = Gameboard;
