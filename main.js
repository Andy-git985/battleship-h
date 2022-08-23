import { Ship, Player } from './game.js';

const create = (() => {
  const board1 = document.querySelector('#board1');
  const board2 = document.querySelector('#board2');
  const number = 100;
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
    elem.style.gridTemplateRows = `repeat(${numOfRowCol}, 42px)`;
    elem.style.gridTemplateColumns = `repeat(${numOfRowCol}, 42px)`;
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
  const overlay = (current) => {
    // ! Dependent on player name
    if (current.name === 'Player 1') {
      const currentOverlay = document.querySelector('#board1-overlay');
      const enemyOverlay = document.querySelector('#board2-overlay');
      currentOverlay.classList.add('overlay');
      enemyOverlay.classList.remove('overlay');
    } else if (current.name === 'Player 2') {
      const currentOverlay = document.querySelector('#board2-overlay');
      const enemyOverlay = document.querySelector('#board1-overlay');
      currentOverlay.classList.add('overlay');
      enemyOverlay.classList.remove('overlay');
    }
  };
  // ! const hitElement function reuse code
  const hits = (enemy) => {
    if (enemy.name === 'Player 2') {
      const boardTwoProgess = document.querySelectorAll('#board2 .block');
      const hits = enemy.hits;
      for (const e of boardTwoProgess) {
        if (hits.includes(Number(e.dataset.index))) {
          e.innerHTML = 'X';
          e.classList.add('hit');
        }
      }
    } else if (enemy.name === 'Player 1') {
      const boardOneProgess = document.querySelectorAll('#board1 .block');
      const hits = enemy.hits;
      for (const e of boardOneProgess) {
        if (hits.includes(Number(e.dataset.index))) {
          e.textContent = 'X';
          e.classList.add('hit');
        }
      }
    }
  };
  const misses = (enemy) => {
    if (enemy.name === 'Player 2') {
      const boardTwoProgess = document.querySelectorAll('#board2 .block');
      const misses = enemy.misses;
      for (const e of boardTwoProgess) {
        if (misses.includes(Number(e.dataset.index))) {
          e.innerHTML = 'Miss';
          e.classList.add('miss');
        }
      }
    } else if (enemy.name === 'Player 1') {
      const boardOneProgess = document.querySelectorAll('#board1 .block');
      const misses = enemy.misses;
      for (const e of boardOneProgess) {
        if (misses.includes(Number(e.dataset.index))) {
          e.textContent = 'Miss';
          e.classList.add('miss');
        }
      }
    }
  };
  const turn = (current) => {
    const turn = document.querySelector('#turn');
    turn.innerHTML = `${current.name}'s turn`;
  };
  const winner = (player) => {
    const msg = document.querySelector('#msg');
    msg.innerHTML = `${player.name} is the winner`;
  };
  return { overlay, hits, misses, turn, winner };
})();

const events = (() => {
  const board1 = () => {
    const playerOneBlocks = document.querySelectorAll('#board1 .block');
    playerOneBlocks.forEach((b) =>
      b.addEventListener('click', (e) => {
        const coordinate = Number(e.target.dataset.index);
        console.log(coordinate);
        game.attack(coordinate);
      })
    );
  };
  const board2 = () => {
    const playerTwoBlocks = document.querySelectorAll('#board2 .block');
    playerTwoBlocks.forEach((b) =>
      b.addEventListener('click', (e) => {
        const coordinate = Number(e.target.dataset.index);
        game.attack(coordinate);
      })
    );
  };
  const refresh = () => {
    const refresh = document.querySelector('#refresh');
    refresh.addEventListener('click', () => window.location.reload());
  };

  const init = () => {
    board1();
    board2();
    refresh();
  };

  return {
    board1,
    board2,
    init,
  };
})();

events.init();

const game = (() => {
  const player1 = Player('Player 1');
  const player2 = Player('Player 2');
  const init = () => {
    // const ship1 = Ship(2);
    // const ship2 = Ship(2);
    // player1.placeShip(ship1, 0);
    // player1.placeShip(ship1, 1);
    // player2.placeShip(ship2, 0);
    // player2.placeShip(ship2, 1);
    const playerOneShip1 = Ship(2); // 0 1
    const playerOneShip2 = Ship(2); // 29 39
    const playerOneShip3 = Ship(2); // 70 71
    const playerOneShip4 = Ship(2); // 55 65
    const playerOneShip5 = Ship(3); // 3 13 23
    const playerOneShip6 = Ship(3); // 25 26 27
    const playerOneShip7 = Ship(3); // 59 69 79
    const playerOneShip8 = Ship(4); // 6 7 8 9
    const playerOneShip9 = Ship(4); // 20 30 40 50
    const playerOneShip10 = Ship(5); // 94 95 96 97 98 99
    const playerTwoShip1 = Ship(2); // 0 1
    const playerTwoShip2 = Ship(2); // 29 39
    const playerTwoShip3 = Ship(2); // 70 71
    const playerTwoShip4 = Ship(2); // 55 65
    const playerTwoShip5 = Ship(3); // 3 13 23
    const playerTwoShip6 = Ship(3); // 25 26 27
    const playerTwoShip7 = Ship(3); // 59 69 79
    const playerTwoShip8 = Ship(4); // 6 7 8 9
    const playerTwoShip9 = Ship(4); // 20 30 40 50
    const playerTwoShip10 = Ship(5); // 94 95 96 97 98 99
    player1.placeShip(playerOneShip1, 0);
    player1.placeShip(playerOneShip1, 1);
    player1.placeShip(playerOneShip2, 29);
    player1.placeShip(playerOneShip2, 39);
    player1.placeShip(playerOneShip3, 70);
    player1.placeShip(playerOneShip3, 71);
    player1.placeShip(playerOneShip4, 55);
    player1.placeShip(playerOneShip4, 65);
    player1.placeShip(playerOneShip5, 3);
    player1.placeShip(playerOneShip5, 13);
    player1.placeShip(playerOneShip5, 23);
    player1.placeShip(playerOneShip6, 25);
    player1.placeShip(playerOneShip6, 26);
    player1.placeShip(playerOneShip6, 27);
    player1.placeShip(playerOneShip7, 59);
    player1.placeShip(playerOneShip7, 69);
    player1.placeShip(playerOneShip7, 79);
    player1.placeShip(playerOneShip8, 6);
    player1.placeShip(playerOneShip8, 7);
    player1.placeShip(playerOneShip8, 8);
    player1.placeShip(playerOneShip8, 9);
    player1.placeShip(playerOneShip9, 20);
    player1.placeShip(playerOneShip9, 30);
    player1.placeShip(playerOneShip9, 40);
    player1.placeShip(playerOneShip9, 50);
    player1.placeShip(playerOneShip10, 94);
    player1.placeShip(playerOneShip10, 95);
    player1.placeShip(playerOneShip10, 96);
    player1.placeShip(playerOneShip10, 97);
    player1.placeShip(playerOneShip10, 98);
    player1.placeShip(playerOneShip10, 99);
    player2.placeShip(playerTwoShip1, 0);
    player2.placeShip(playerTwoShip1, 1);
    player2.placeShip(playerTwoShip2, 29);
    player2.placeShip(playerTwoShip2, 39);
    player2.placeShip(playerTwoShip3, 70);
    player2.placeShip(playerTwoShip3, 71);
    player2.placeShip(playerTwoShip4, 55);
    player2.placeShip(playerTwoShip4, 65);
    player2.placeShip(playerTwoShip5, 3);
    player2.placeShip(playerTwoShip5, 13);
    player2.placeShip(playerTwoShip5, 23);
    player2.placeShip(playerTwoShip6, 25);
    player2.placeShip(playerTwoShip6, 26);
    player2.placeShip(playerTwoShip6, 27);
    player2.placeShip(playerTwoShip7, 59);
    player2.placeShip(playerTwoShip7, 69);
    player2.placeShip(playerTwoShip7, 79);
    player2.placeShip(playerTwoShip8, 6);
    player2.placeShip(playerTwoShip8, 7);
    player2.placeShip(playerTwoShip8, 8);
    player2.placeShip(playerTwoShip8, 9);
    player2.placeShip(playerTwoShip9, 20);
    player2.placeShip(playerTwoShip9, 30);
    player2.placeShip(playerTwoShip9, 40);
    player2.placeShip(playerTwoShip9, 50);
    player2.placeShip(playerTwoShip10, 94);
    player2.placeShip(playerTwoShip10, 95);
    player2.placeShip(playerTwoShip10, 96);
    player2.placeShip(playerTwoShip10, 97);
    player2.placeShip(playerTwoShip10, 98);
    player2.placeShip(playerTwoShip10, 99);

    // ! Label to indicate player's turn
    dom.turn(current);
    dom.overlay(current);
  };
  let current = player1;
  let enemy = player2;
  // let playing = true;
  const switchSides = () => {
    if (current === player1) {
      current = player2;
      enemy = player1;
    } else if (current === player2) {
      current = player1;
      enemy = player2;
    }
  };
  const attack = (coordinate) => {
    turn(coordinate);
  };
  // ! Individual player turn
  const turn = (coordinate) => {
    if (current.attack(enemy, coordinate)) {
      dom.hits(enemy);
      if (enemy.allShipsSunk()) {
        // playing = false;
        over(dom);
        return;
      }
    } else {
      dom.misses(enemy);
      switchSides();
      dom.turn(current);
      overlay(dom);
    }
  };
  // ! Main game loop
  // const loop = () => {
  //   while (playing) {
  //     turn(coordinate);
  //   }
  //   over(dom);
  // };

  // const overlay = () => {
  //   const overlay = document.querySelector('#overlay');
  //   overlay.classList.add('overlay');
  // };
  // ! Overlay
  const overlay = (module) => {
    module.overlay(current);
  };

  // ! Endgame
  const over = (module) => {
    module.winner(current);
  };
  return { init, attack, turn };
})();

game.init();
// game.loop();
