const setRandomBgColor = () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const colorbox = document.getElementById('color-box');
    colorbox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};
