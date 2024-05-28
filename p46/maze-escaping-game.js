const MAX_ROW = 7;
const MIN_ROW = 1;
const MAX_COL = 8;
const MIN_COL = 1;

let cur = { row: 6, col: 1 };

function getElementByPosition(p) {
  const maze = document.getElementById('maze');
  const row = maze.children[p.row - 1];

  return row.children[p.col - 1];
}

function getNewPositionByKey(p, key) {
  let newp = { row: p.row, col: p.col };
  switch (key) {
    case 'ArrowUp':
      newp.row -= 1;
      break;
    case 'ArrowDown':
      newp.row += 1;
      break;
    case 'ArrowLeft':
      newp.col -= 1;
      break;
    case 'ArrowRight':
      newp.col += 1;
      break;
  }
  return newp;
}

function isPositionInRange(p) {
  return (
    p.row >= MIN_ROW && p.row <= MAX_ROW && p.col >= MIN_COL && p.col <= MAX_COL
  );
}

function isPositionWall(p) {
  const element = getElementByPosition(p);
  return element.classList.contains('wall');
}

function keyupEvent(e) {
  let newp = getNewPositionByKey(cur, e.key);
  if (!isPositionInRange(newp) || isPositionWall(newp)) return;

  const currentE = getElementByPosition(cur);
  currentE.classList.remove('current');

  cur = newp;
  const newE = getElementByPosition(newp);
  newE.classList.add('current');

  if (newE.classList.contains('target')) alert('You Escaped!');
}

document.addEventListener('keyup', keyupEvent);
