import { Ship, Player, Gameboard } from './game.js';

const create = (() => {
  const board1 = document.querySelector('#board1');
  const board2 = document.querySelector('#board2');
  const number = 9;
  const generateGrid = (elem) => {
    for (let i = 0; i < number; i++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.setAttribute('data-index', i);
      elem.appendChild(block);
    }
  };
  const generateGridTemplate = (elem) => {
    const numOfRowCol = Math.sqrt(number);
    elem.style.gridTemplateRows = `repeat(${numOfRowCol}, auto)`;
    elem.style.gridTemplateColumns = `repeat(${numOfRowCol}, auto)`;
  };

  const init = () => {
    generateGrid(board1),
      generateGrid(board2),
      generateGridTemplate(board1),
      generateGridTemplate(board2);
  };
  return {
    init,
  };
})();
create.init();

const events = (() => {
  const blocks = () => {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((b) =>
      b.addEventListener('click', (e) => {
        console.log(e.target.dataset.index);
      })
    );
  };
  const init = () => {
    blocks();
  };
  return {
    init,
  };
})();

events.init();

const ship1 = Ship(1);
const ship2 = Ship(2);
const player1 = Player();
const player2 = Player();
player2.placeShip(ship1, 0);
player2.placeShip(ship2, 1);
player2.placeShip(ship2, 2);
player1.attack(player2, 0);
player1.attack(player2, 1);
player1.attack(player2, 2);
console.log(player2.allShipsSunk());
