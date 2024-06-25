const setRandomBgColor = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let box=document.querySelector("#color-box");
    box.style.background="rgb("+getRandomInt(256)+","+getRandomInt(256)+","+getRandomInt(256)+")";
}; 
