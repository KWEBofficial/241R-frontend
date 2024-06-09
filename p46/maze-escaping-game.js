const MIN_ROW = 0;
const MAX_ROW = 6;
const MIN_COL = 0;
const MAX_COL = 7;
const targetPosition = { row: 1, col: 7 }; 
let currentPosition = { row: 5, col: 0 }; 


const startCell = document.querySelector('.cell.current');
startCell.classList.remove('current');
getElementByPosition(currentPosition).classList.add('current');


function getElementByPosition(position) {
  const rowElements = document.querySelectorAll('#maze .cells');
  const rowElement = rowElements[position.row];
  const cellElement = rowElement.children[position.col];
  return cellElement;
}


function getNewPositionByKey(position, key) {
  let newRow = position.row;
  let newCol = position.col;

  switch (key) {
    case 'ArrowUp':
      newRow--;
      break;
    case 'ArrowDown':
      newRow++;
      break;
    case 'ArrowLeft':
      newCol--;
      break;
    case 'ArrowRight':
      newCol++;
      break;
  }
  
  return { row: newRow, col: newCol };
}


function isPositionInRange(position) {
  return (
    position.row >= MIN_ROW &&
    position.row <= MAX_ROW &&
    position.col >= MIN_COL &&
    position.col <= MAX_COL
  );
}


function isPositionWall(position) {
  const element = getElementByPosition(position);
  return element.classList.contains('wall');
}


document.addEventListener('keydown', (event) => {
  const newPosition = getNewPositionByKey(currentPosition, event.key);

  if (isPositionInRange(newPosition) && !isPositionWall(newPosition)) {
    getElementByPosition(currentPosition).classList.remove('current');
    currentPosition = newPosition;
    getElementByPosition(currentPosition).classList.add('current');
    if (currentPosition.row === targetPosition.row && currentPosition.col === targetPosition.col) {
      alert('You Escaped!');
    }
  }
});
