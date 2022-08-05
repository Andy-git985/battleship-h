import { Ship, Player, Gameboard } from './game.js';

const create = (() => {
  const board1 = document.querySelector('#board1');
  const board2 = document.querySelector('#board2');
  const number = 9;
  const generateGrid = (elem) => {
    for (let i = 0; i < number; i++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.setAttribute(`data-index`, i);
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

// const ship1 = Ship(1);
// const ship2 = Ship(2);
// const player1 = Player();
// const player2 = Player();
// player2.placeShip(ship1, 0);
// player2.placeShip(ship2, 1);
// player2.placeShip(ship2, 2);
// player1.attack(player2, 0);
// player1.attack(player2, 1);
// player1.attack(player2, 2);
// console.log(player2.allShipsSunk());

const game = (() => {
  const player1 = Player('Player 1');
  const player2 = Player('Player 2');
  const init = () => {
    const ship1 = Ship(1);
    const ship2 = Ship(1);
    const ship3 = Ship(1);
    player1.placeShip(ship1, 0);
    player2.placeShip(ship2, 0);
    player2.placeShip(ship2, 1);
  };
  let current = player1;
  let enemy = player2;
  const switchSides = () => {
    if ((current = player1)) {
      current = player2;
      enemy = player1;
    } else if ((current = player2)) {
      current = player1;
      enemy = player2;
    }
  };
  const turn = () => {
    alert(`${current.name}'s turn`)
    let attack = prompt('Please enter an attack coordinate');
    while (current.attack(enemy, Number(attack))) {
      attack = prompt('Please enter an attack coordinate');
    }
    console.log(current.name, current.hits);
    console.log(current.name, current.misses);
    switchSides();
  };
  const loop = () => {
    while (!current.allShipsSunk()) {
      turn()
    }
    alert('Game Over!')
  };
  return { init, turn , loop};
})();

game.init();
game.loop();

// var spam = 'bacon';
// var test = { spam };
// console.log(test, Object.keys(test)[0]);
