const setRandomBgColor = (click) => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.getElementById('color-box').style.backgroundColor = rgb;
};
