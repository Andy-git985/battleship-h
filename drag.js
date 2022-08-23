// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData('text', ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData('text');
//   ev.target.appendChild(document.getElementById(data));
// }

// ===========================
function drag(ev) {
  const text = ev.target.textContent;
  ev.dataTransfer.setData('text', text);
}

function dragOverHandler(ev) {
  // const isLink = ev.dataTransfer.types.includes('text/uri-list');
  // if (isLink) {
  //   ev.preventDefault();
  // }
  // return false;
  ev.preventDefault();
}

function dropHandler(ev) {
  console.log('File(s) dropped');
  ev.preventDefault();

  const data = ev.dataTransfer.getData('text/plain');
  console.log(data);
  ev.target.textContent = data;
}
