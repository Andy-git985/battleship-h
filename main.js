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

const dom = (() => {
  const winner = (player) => {
    const msg = document.querySelector('#msg');
    msg.innerHTML = `${player.name} is the winner`;
  };
  return { winner };
})();

const game = (() => {
  const player1 = Player('Player 1');
  const player2 = Player('Player 2');
  const init = () => {
    const ship1 = Ship(2);
    const ship2 = Ship(2);
    player1.placeShip(ship1, 0);
    // player1.placeShip(ship1, 1);
    player2.placeShip(ship2, 0);
    // player2.placeShip(ship2, 1);
  };
  let current = player1;
  let enemy = player2;
  let playing = true;
  const switchSides = () => {
    if (current === player1) {
      current = player2;
      enemy = player1;
    } else if (current === player2) {
      current = player1;
      enemy = player2;
    }
  };
  // ! Individual player turn
  const turn = (coordinate) => {
    alert(`${current.name}'s turn`);
    // let attack = prompt('Please enter an attack coordinate');
    while (current.attack(enemy, coordinate)) {
      if (enemy.allShipsSunk()) {
        playing = false;
        return;
      }
      // attack = prompt('Please enter an attack coordinate');
    }
    switchSides();
  };
  // ! Main game loop
  const loop = () => {
    while (playing) {
      turn(coordinate);
    }
    over(dom);
  };
  // ! Endgame
  const over = (module) => {
    module.winner(current);
  };
  return { player1, player2, init, turn, loop };
})();

const events = (() => {
  // const board1 = () => {
  //   const playerOneBlocks = document.querySelectorAll('#board1 .block');
  //   playerOneBlocks.forEach((b) =>
  //     b.addEventListener('click', (e) => {
  //       game.player2.attack(game.player1, Number(e.target.dataset.index));
  //     })
  //   );
  // };
  // const board2 = () => {
  //   const playerTwoBlocks = document.querySelectorAll('#board2 .block');
  //   playerTwoBlocks.forEach((b) =>
  //     b.addEventListener('click', (e) => {
  //       game.player1.attack(game.player2, Number(e.target.dataset.index));
  //     })
  //   );
  // };
  const blocks = () => {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((b) =>
      b.addEventListener('click', (e) => {
        game.turn(coordinate);
      })
    );
  };
  const refresh = () => {
    const refresh = document.querySelector('#refresh');
    refresh.addEventListener('click', () => window.location.reload());
  };

  const init = () => {
    // board1();
    // board2();
    blocks();
    refresh();
  };

  return {
    init,
  };
})();
// const playerOneBlocks = document.querySelectorAll('#board1 .block');
// console.log(playerOneBlocks);
events.init();

game.init();
game.loop();
