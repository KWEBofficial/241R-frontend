const exit={
    row:1,
    col:7,
};
let currentPos={
    row:5,
    col:0,
};
const maxCol=7,maxRow=8,minCol=0,minRow=0;
function getElementByPosition(pos){
    let row=document.querySelectorAll("#maze > div")[pos["row"]];
    return row.querySelectorAll("div")[pos["col"]];
}
function getNewPositionByKey(key){
    let dx=0,dy=0;
    if(key=="ArrowUp")
        dy=-1;
    else if (key=="ArrowDown")
        dy=+1;
    else if(key=="ArrowLeft")
        dx=-1;
    else if(key=="ArrowRight")
        dx=1;

    
    return {row:(currentPos["row"]+dy),col:(currentPos["col"]+dx)};
}
function isPositionInRange(pos){
    if(pos["row"]>maxRow || pos["row"]<minRow){
        return false;
    }
    if(pos["col"]>maxCol||pos["col"]<minCol){
        return false;
    }
    return true;
}
function isPositionWall(pos){
    let element=getElementByPosition(pos);
    if(element.className=="cell wall")
        return true;
    else
        return false;
}
function handleKeyPress(event){
    let newPos=getNewPositionByKey(event.key);
    if(isPositionInRange(newPos)&&!isPositionWall(newPos)){
        const current=getElementByPosition(currentPos);
        current.classList.remove("current");
        const next=getElementByPosition(newPos);
        next.classList.add("current");

        currentPos["row"]=newPos["row"];
        currentPos["col"]=newPos["col"];

        if(currentPos["row"]==exit["row"]&&currentPos["col"]==exit["col"])
            alert("You Escaped!");
    }
        
}
document.addEventListener("keyup",(e)=>{
    handleKeyPress(e);
})
