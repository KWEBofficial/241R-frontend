const tryLevelUp = () => {
    let x=0,y=0,z=[100,60,36,22,13,8,5,3,2,1];
    f=setInterval(function(){
        document.getElementById('attempts').innerHTML=++x;
        if(getRandomBinaryResult(z[y])){
            document.getElementById('current-level').innerHTML=++y;
            document.getElementById('gauge-bar').style.width=`${y*30}px`;
        }
        if(y===10)clearInterval(f);
    },50);
};
function getRandomBinaryResult(A){
    let ranN=Math.floor(Math.random()*100);//0-99
    return A>ranN;
}