const changeBoxColor = () => {
    const boxes = document.getElementsByClassName('box');

    // 두 번째 상자의 색상 변경
    if (boxes.length >= 2) {
        boxes[1].style.backgroundColor = 'blue';
    }
}; 
