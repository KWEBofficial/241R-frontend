const MIN_ROW = 0;
const MAX_ROW = 6;
const MIN_COL = 0;
const MAX_COL = 7;

let currentPosition = { row: 5, col: 0 }; // 빨간 사각형
const targetPosition = { row: 1, col: 7 }; // 파란 사각형

const getElementByPosition = (position) => {
  const { row, col } = position;
  return document.querySelector(`#maze .cells:nth-child(${row + 1}) .cell:nth-child(${col + 1})`);
};

// 입력 키에 따라서 새로운 위치 반환
const getNewPositionByKey = (key, position) => {
  const newPosition = { ...position };
  
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
};

// 위치가 미로 내에 존재하는지
const isPositionInRange = (position) => {
  const { row, col } = position;
  return row >= MIN_ROW && row <= MAX_ROW && col >= MIN_COL && col <= MAX_COL;
};

// 위치가 벽인지 판별
const isPositionWall = (position) => {
  const element = getElementByPosition(position);
  return element.classList.contains('wall');
};

// 방향키 이벤트 리스너
document.addEventListener('keyup', (event) => {
  const newPosition = getNewPositionByKey(event.key, currentPosition); // 새로운 위치 계산
  
  if (isPositionInRange(newPosition) && !isPositionWall(newPosition)) { // 미로 내에 있는지 / 벽인지
    const currentElement = getElementByPosition(currentPosition);
    currentElement.classList.remove('current');
    
    currentPosition = newPosition; // 새로운 위치로 업데이트
    
    const newElement = getElementByPosition(newPosition);
    newElement.classList.add('current'); // 새로운 위치에 빨간 사각형 표시
    
    if (newPosition.row === targetPosition.row && newPosition.col === targetPosition.col) {
      alert('You Escaped!'); // 탈출 지점 도달
    }
  }
});