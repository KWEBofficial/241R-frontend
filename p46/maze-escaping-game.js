const row_min = 0;
const row_max = 6;
const col_min = 0;
const col_max = 7;

let current = { row: 5, col: 0 };
const goal = { row: 1, col: 7 };

function getElementByPosition(position) {
    return document.querySelector(`#maze .cells:nth-child(${position.row + 1}) .cell:nth-child(${position.col + 1})`);
}

function getNewPositionByKey(key, position) {
  const next = { row: position.row, col: position.col };

  switch (key) {
    case 'ArrowUp':
        next.row -= 1;
        break;
    case 'ArrowDown':
        next.row += 1;
        break;
    case 'ArrowLeft':
        next.col -= 1;
        break;
    case 'ArrowRight':
        next.col += 1;
        break;
  }
  return next;
}

function isPositionInRange(position) {
    if(position.row >= row_min && position.row <= row_max && position.col >= col_min && position.col <= col_max) return true;
    else return false;
}

function isPositionWall(position) {
    return getElementByPosition(position).classList.contains('wall');
}

document.addEventListener('keyup', (event) => {
    const next = getNewPositionByKey(event.key, current);

    if (isPositionInRange(next) & !isPositionWall(next)) {
        getElementByPosition(current).classList.remove('current');
        current = next; 
        getElementByPosition(next).classList.add('current');
        if (current.row == goal.row & current.col == goal.col) {
            alert("You Escaped!");
        }
    }
})