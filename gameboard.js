const Gameboard = (() => {
  const board = Array(9).fill('');
  const hits = [];
  const misses = [];
  const placeShip = (ship, coordinate) => {
    board[coordinate] = ship;
  };
  const receiveAttack = (x) => {
    return board[x] !== '';
  };
  const checkShips = () => {
    return board.every((e) => typeof e === 'string');
  };
  return { board, hits, misses, placeShip, receiveAttack, checkShips };
})();

module.exports = Gameboard;
