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
  const turn = (player) => {
    const turn = document.querySelector('#turn');
    turn.innerHTML = `${player.name}'s turn`;
  };
  const winner = (player) => {
    const msg = document.querySelector('#msg');
    msg.innerHTML = `${player.name} is the winner`;
  };
  return { overlay, turn, winner };
})();

const events = (() => {
  const board1 = () => {
    const playerOneBlocks = document.querySelectorAll('#board1 .block');
    playerOneBlocks.forEach((b) =>
      b.addEventListener('click', (e) => {
        const attacker = game.player2;
        const receiver = game.player2;
        const coordinate = Number(e.target.dataset.index);
        console.log(coordinate);
        game.attack(coordinate);
        // game.attack(attacker, receiver, coordinate);
        // game.player2.attack(game.player1, Number(e.target.dataset.index));
      })
    );
  };
  const board2 = () => {
    const playerTwoBlocks = document.querySelectorAll('#board2 .block');
    playerTwoBlocks.forEach((b) =>
      b.addEventListener('click', (e) => {
        const attacker = game.player1;
        const receiver = game.player1;
        const coordinate = Number(e.target.dataset.index);
        console.log(coordinate);
        game.attack(coordinate);
        // game.attack(attacker, receiver, coordinate);
        // game.player1.attack(game.player2, Number(e.target.dataset.index));
      })
    );
  };
  // const blocks = () => {
  //   const blocks = document.querySelectorAll('.block');
  //   blocks.forEach((b) =>
  //     b.addEventListener('click', (e) => {
  //       game.turn(Number(e.target.dataset.index));
  //     })
  //   );
  // };
  const refresh = () => {
    const refresh = document.querySelector('#refresh');
    refresh.addEventListener('click', () => window.location.reload());
  };

  const init = () => {
    board1();
    board2();
    // blocks();
    refresh();
  };

  return {
    board1,
    board2,
    // blocks,
    init,
  };
})();

events.init();

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
    // let attack = prompt('Please enter an attack coordinate');
    if (current.attack(enemy, coordinate)) {
      console.log(`HIT!!! ${enemy.name}'s direct hits:`, enemy.hits);
      console.log(enemy.allShipsSunk());
      if (enemy.allShipsSunk()) {
        playing = false;
        over(dom);
        return;
      }
      // attack = prompt('Please enter an attack coordinate');
    } else {
      console.log(`MISS!!! ${enemy.name}'s empty spots:`, enemy.misses);
    }
    switchSides();
    overlay(dom);
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
