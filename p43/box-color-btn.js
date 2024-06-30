const changeBoxColor = () => {
    const boxes = document.getElementsByClassName('box');
    if (boxes.length >= 2) {
        const box = boxes[1];
        const getRandomInt = () => Math.floor(Math.random() * 256);
        const color = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;

        box.style.backgroundColor = color;
    }
};