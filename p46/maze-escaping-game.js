var maxrow=6;
var maxcol=7;

var currec={
    row: 5,
    col: 0
};

document.addEventListener('keydown',(event)=>{
    keylog=event.key;
});

const getElementByPosition=(rec)=>{
    return document.getElementsByClassName('cells')[rec.row].children[rec.col].className;
}
var keylog=null;



const getNewPositionByKey=(e)=>{
    var futrec={...currec};  ///깊은복사vs얕은복사 차이
    switch (e){
        case 'ArrowUp':
            futrec.row-=1;
            break;
        case 'ArrowDown':
            futrec.row+=1;
            break;
        case 'ArrowLeft':
            futrec.col-=1;
            break;
        case 'ArrowRight':
            futrec.col+=1;
            break;
    }
    return futrec;
}

const isPositionInRange=(rec)=>{
    if(0<=rec.row&&rec.row<=maxrow&&0<=rec.col&&rec.col<=maxcol){
        return true;
    }else{
        return false;
    }
}

const isPositiononWall=(rec)=>{
    if(document.getElementsByClassName('cells')[rec.row].children[rec.col].className==='cell wall'){
        return true;
    }else{
        return false;
    }
}

document.addEventListener("keyup",(event2)=>{
    var f=getNewPositionByKey(keylog)
    if(isPositionInRange(f)===true&&isPositiononWall(f)===false){
        document.getElementsByClassName('cells')[currec.row].children[currec.col].classList.remove('current'); 
        currec=f;
        document.getElementsByClassName('cells')[f.row].children[f.col].classList.add('current');
    }
    if(currec.row===1&&currec.col===7){
        alert("You Escaped!");
    }
});


/// 58이나 60줄 코드에서 처음에 className을 cell current, current로 변경했더니 적용이 안되던데 혹시 이유가 뭔지 알 수 있을까요??..