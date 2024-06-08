const setRandomBgColor = () => {
    const box=document.getElementById('color-box');
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    box.style.backgroundColor="rgb("+a+","+b+","+c+")";
};