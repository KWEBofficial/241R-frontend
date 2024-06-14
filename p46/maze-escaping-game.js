const row_min = 0;
const row_max = 6;
const col_min = 0;
const col_max = 7;

var current = {row: 5, col: 0};
const getElementByPosition = (position) => {
    return document.getElementById('maze').children[position.row].children[position.col];
}
const getNewPositionByKey = (key) => {
    if (key == 'ArrowLeft') return {row: current.row, col: current.col - 1};
    if (key == 'ArrowRight') return {row: current.row, col: current.col + 1};
    if (key == 'ArrowUp') return {row: current.row - 1, col: current.col};
    if (key == 'ArrowDown') return {row: current.row + 1, col: current.col};
    return {row: current.row, col: current.col};
}
const isPositionInRange = (position) => {
    return position.row >= row_min && position.row <= row_max && position.col >= col_min && position.col <= col_max;
}
const isPositionWall = (position) => {
    return !getElementByPosition(position).classList.contains('wall');
}

document.addEventListener('keyup', (event) => {
    const newPos = getNewPositionByKey(event.key);
    if (!isPositionInRange(newPos) || !isPositionWall(newPos)) return;
    getElementByPosition(current).classList.remove('current');
    getElementByPosition(newPos).classList.add('current');
    current = newPos;

    if (getElementByPosition(newPos).classList.contains('target')) alert('You Escaped!');
});