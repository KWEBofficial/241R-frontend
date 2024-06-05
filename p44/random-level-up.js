var odds=[100,60,36,22,13,8,5,3,2,1];
var level=0;
var attempts=0;

const getRandomBinaryResult=(n)=>{
    const rand=Math.floor(Math.random()*101);
    if(odds[n]>=rand){
        return true;
    }
    else{
        return false;
    }
};

const tryLevelUp = () => {
    const timeoutId=setInterval(()=>{
        attempts+=1;
        document.getElementById("attempts").innerText=attempts;
        if (getRandomBinaryResult(level)===true){
            level+=1;
            document.getElementById("current-level").innerText=level;
            document.getElementById("gauge-bar").style.width=(30*level)+'px'; //표현법
        }
        if(level===10){
            clearInterval(timeoutId);   
        }
    },50);  
}; /* TODO */
