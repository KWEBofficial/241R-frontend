let curPosition = {row: 5, col: 0};
const escPosition = {row: 1, col: 7};

const minRow = 0;
const maxRow = 6;
const minCol = 0;
const maxCol = 7;

const getElementByPosition = (p) => {
    const r = p.row;
    const c = p.col;
    const mazeCell = document.getElementById('maze');
    const elem = mazeCell.children[r].children[c];
    return elem;
};

const getNewPositionByKey = (k) => {
    let newPosition;
    if (k == 'ArrowUp') newPosition = {row: curPosition.row-1, col: curPosition.col};
    else if (k == 'ArrowDown') newPosition = {row: curPosition.row+1, col: curPosition.col};
    else if (k == 'ArrowLeft') newPosition = {row: curPosition.row, col: curPosition.col-1};
    else if (k == 'ArrowRight') newPosition = {row: curPosition.row, col: curPosition.col+1};
    return newPosition;
};

const isPositionInRange = (p) => {
    if (p.col >= minCol && p.col <= maxCol && p.row >= minRow && p.row <= maxRow) return true;
    else return false;
};

const isPositionWall = (p) => {
    const elem = getElementByPosition(p);
    if (elem.classList.contains('wall')) return true;
    else return false;
}

document.addEventListener('keyup', e => {
    const newPosition = getNewPositionByKey(e.key);
    if (isPositionInRange(newPosition) && !isPositionWall(newPosition)) {
        getElementByPosition(curPosition).classList.remove('current');
        curPosition = newPosition;
        getElementByPosition(curPosition).classList.add('current');
        if (curPosition.row === escPosition.row && curPosition.col === escPosition.col) alert('You Escaped!');
    }
})