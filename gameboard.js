const Gameboard = (() => {
  const board = Array(9).fill('');
  const hits = [];
  const allHits = () => hits.length;
  const misses = [];
  const placeShip = (ship, coordinate) => {
    board[coordinate] = ship;
  };
  // const receiveAttack = (x) => {
  //   return board[x] !== '' ? hits.push(x) : miss.push(x);
  // };
  const receiveAttack = (x) => {
    if (board[x] !== '') {
      hits.push(x);
      return true;
    } else {
      miss.push(x);
      return false;
    }
  };
  const allShipsSunk = () => {
    return totalShipUnits() === allHits();
  };
  const totalShipUnits = () => board.filter((e) => e !== '').length;

  return {
    board,
    hits,
    allHits,
    misses,
    placeShip,
    receiveAttack,
    allShipsSunk,
    totalShipUnits,
  };
})();

module.exports = Gameboard;
