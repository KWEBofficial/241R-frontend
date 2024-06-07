const setRandomBgColor = () => {
    const box = document.getElementById('color-box');
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    box.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
};
