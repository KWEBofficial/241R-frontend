const min_row=min_col=0,max_row=6;max_col=7;
let pcur={row:5,col:0};
function getElementByPosition(pos){
    const row=document.querySelectorAll('#maze .cells')[pos.row];
    return row.children[pos.col];
}
function getNewPositionByKey(input){
    let newpos={row:pcur.row,col:pcur.col};
    if(input=='ArrowUp')--newpos.row;
    if(input=='ArrowDown')++newpos.row;
    if(input=='ArrowLeft')--newpos.col;
    if(input=='ArrowRight')++newpos.col;
    return newpos;
}
function isPostionInRange(pos){
    return pos.row>=min_row&&pos.row<=max_row&&pos.col>=min_col&&pos.col<=max_col;
}
function isPositinonWall(pos){
    const cell=getElementByPosition(pos);
    return cell.classList.contains('wall');
}
function newEvent(newPos){
    if(isPostionInRange(newPos)&&!isPositinonWall(newPos)){
        const ccur=getElementByPosition(pcur);
        const newc=getElementByPosition(newPos);
        ccur.classList.remove('current');
        newc.classList.add('current');
        pcur=newPos;
        if(newc.classList.contains('target'))alert('You Escaped!');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (event) => {
        const newPosition = getNewPositionByKey(event.key);
        newEvent(newPosition);
    });
});