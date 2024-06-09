const rowMin = 0;
const colMin = 0;
const rowMax = 6; // 7행
const colMax = 7; // 8행

let curPosition = { row: 5, col: 0 };

function getElementByPosition(position) {
  const rows = document.getElementsByClassName("cells");
  const row = rows[position.row];
  const cells = row.getElementsByClassName("cell");
  return cells[position.col];
}

const getNewPositionByKey = (key) => {
  let newRow = curPosition.row;
  let newCol = curPosition.col;
  switch (key) {
    case "ArrowUp":
      newRow -= 1;
      break;
    case "ArrowDown":
      newRow += 1;
      break;
    case "ArrowLeft":
      newCol -= 1;
      break;
    case "ArrowRight":
      newCol += 1;
      break;
  }
  return { row: newRow, col: newCol };
};

const isPositionInRange = (position) => {
  return (
    position.row >= rowMin &&
    position.row <= rowMax &&
    position.col >= colMin &&
    position.col <= colMax
  );
};

const isPositionWall = (position) => {
  const element = getElementByPosition(position);
  return element && element.classList.contains("wall");
};

const handleKeyUp = (event) => {
  const newPosition = getNewPositionByKey(event.key);

  if (isPositionInRange(newPosition) && !isPositionWall(newPosition)) {
    const currentElement = getElementByPosition(curPosition);
    currentElement.classList.remove("current");

    curPosition.row = newPosition.row;
    curPosition.col = newPosition.col;
    const newElement = getElementByPosition(newPosition);
    newElement.classList.add("current");

    if (newElement.classList.contains("target")) {
      alert("You Escaped!");
    }
  }
};

document.addEventListener("keyup", handleKeyUp);
/* TODO */
