function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}

const generateGrid = () => {
  const dragContainer = document.querySelector('#drag-container');
  for (let i = 0; i < 100; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.setAttribute(`data-index`, i);
    dragContainer.appendChild(block);
  }

  dragContainer.style.gridTemplateRows = `repeat(10, 42px)`;
  dragContainer.style.gridTemplateColumns = `repeat(10, 42px)`;
};

generateGrid();
