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
  const players = [player1, player2];
  const init = () => {
    const ship1 = Ship(2);
    const ship2 = Ship(2);
    player1.placeShip(ship1, 0);
    player1.placeShip(ship1, 1);
    player2.placeShip(ship2, 0);
    player2.placeShip(ship2, 1);

    // ! Label to indicate player's turn
    dom.turn(current);
    dom.overlay(current);
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
  const attack = (coordinate) => {
    turn(coordinate);
  };
  // ! Individual player turn
  const turn = (coordinate) => {
    if (current.attack(enemy, coordinate)) {
      dom.hits(enemy);

      if (enemy.allShipsSunk()) {
        playing = false;
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
  return { init, players, attack, turn };
})();

game.init();
// game.loop();
