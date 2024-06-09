const changeBoxColor = () => {
    const secondbox = document.getElementsByClassName('box')[1];
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';

    secondbox.style.backgroundColor = rgb;
};
