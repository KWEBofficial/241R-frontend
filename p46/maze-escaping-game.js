const MIN_ROW = 0;
const MAX_ROW = 6;
const MIN_COL = 0;
const MAX_COL = 7;

let currentPosition = { row: 5, col: 0 };

function getElementByPosition(position) {
    const rows = document.querySelectorAll('#maze .cells');
    if (position.row >= 0 && position.row < rows.length) {
        const cells = rows[position.row].querySelectorAll('.cell');
        if (position.col >= 0 && position.col < cells.length) {
            return cells[position.col];
        }
    }
    return null;
}

function getNewPositionByKey(key, position) {
    const newPosition = { row: position.row, col: position.col };
    switch (key) {
        case 'ArrowUp':
            newPosition.row -= 1;
            break;
        case 'ArrowDown':
            newPosition.row += 1;
            break;
        case 'ArrowLeft':
            newPosition.col -= 1;
            break;
        case 'ArrowRight':
            newPosition.col += 1;
            break;
        }
    return newPosition;
}

function isPositionInRange(position) {
    return position.row >= MIN_ROW && position.row <= MAX_ROW && position.col >= MIN_COL && position.col <= MAX_COL;
}

function isPositionWall(position) {
    const element = getElementByPosition(position);
    return element && element.classList.contains('wall');
}

document.addEventListener('keyup', (event) => {
const currentElement = getElementByPosition(currentPosition);
if (currentElement) {
    currentElement.classList.remove('current');
}

const newPosition = getNewPositionByKey(event.key, currentPosition);

if (isPositionInRange(newPosition) && !isPositionWall(newPosition)) {
    currentPosition = newPosition;
}

const newElement = getElementByPosition(currentPosition);
if (newElement) {
    newElement.classList.add('current');
    if (newElement.classList.contains('target')) {
        alert('You Escaped!');
    }
}
});
