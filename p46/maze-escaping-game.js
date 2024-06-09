const max_row = 7;
const max_col = 8;
const min_row = 1;
const min_col = 1;

let red = {
    row: 6,
    col: 1,
};

let blue = {
    row: 2,
    col: 8,
};

function getElementByPosition(location) {
    const maze = document.getElementById('maze');
    const row = maze.children[location.row - 1];

    return row.children[location.col - 1];
}

function getNewPositionByKey (location, key) {
    let new_location = {row: location.row, col: location.col};
    switch(key) {
        case 'ArrowLeft': 
            new_location.col -= 1;
            break;
        case 'ArrowUp':
            new_location.row -= 1;
            break;
        case 'ArrowRight':
            new_location.col += 1;
            break;
        case 'ArrowDown':
            new_location.row += 1;
            break;
    }

    return new_location;
}

function isPositionInRange (location) {
    const {row, col} = location;
    return min_row <= location.row && min_col <= location.col && location.row <= max_row && location.col <= max_col;
}

function isPositionWall (location) {
    const element = getElementByPosition(location);
    return element.classList.contains('wall');
}

document.addEventListener('keyup', (event) => {
    const new_location = getNewPositionByKey(red, event.key);

    if(isPositionInRange(new_location) && !isPositionWall(new_location)){
        const old_red = getElementByPosition(red, event.key);
        old_red.classList.remove('current');

        red = new_location;

        const new_cur = getElementByPosition(new_location);
        new_cur.classList.add('current');

        if(red.row === blue.row && red.col === blue.col){
            alert("You Escaped!");
        }
    }
});