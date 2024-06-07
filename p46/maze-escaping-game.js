const MIN_ROW = 0;
const MAX_ROW = 6;
const MIN_COL = 0;
const MAX_COL = 7;

let currentPos = { row: 5, col: 0 };
const target = { row : 1, col: 7 }

const getElementByPosition = (pos) => {
    const row_cell = document.querySelectorAll(".cells")[pos.row];
    const cell = row_cell.querySelectorAll(".cell")[pos.col];
    return cell;
}

const getNewPositionByKey = (key) => {
    switch (key) {
        case "ArrowUp":
            return { row: currentPos.row - 1, col: currentPos.col };
        case "ArrowDown":
            return { row: currentPos.row + 1, col: currentPos.col };
        case "ArrowRight":
            return { row: currentPos.row, col: currentPos.col+1 };
        case "ArrowLeft":
            return { row: currentPos.row, col: currentPos.col-1 };
    }
}

const isPositionInRange = (pos) => pos.row <= MAX_ROW && pos.row >= MIN_ROW && pos.col <= MAX_COL && pos.col >= MIN_COL;

const isPositionWall = (pos) => getElementByPosition(pos).classList.contains("wall");


document.addEventListener("keydown", (event) => {
    const newPos = getNewPositionByKey(event.key);
    if (newPos) {
        if (isPositionInRange(newPos) && !isPositionWall(newPos)) {
            getElementByPosition(currentPos).classList.toggle("current");
            currentPos = newPos;
            getElementByPosition(currentPos).classList.toggle("current");
            if(currentPos.row === target.row && currentPos.col === target.col) {
                alert("You Escaped!");
            }
        }

    }
})

