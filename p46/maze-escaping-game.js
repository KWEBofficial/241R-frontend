/* TODO */

const curPosition = {
    row: 6,
    col: 1
}

const rowMax=7
const rowMin=1
const colMax=8
const colMin=1

const cellsInRows = document.getElementsByClassName('cells')
function getElementByPosition(pos){
    return cellsInRows[pos.row-1].querySelector(`:nth-child(${pos.col})`)
}

function getNewPostionByKey(code){
    const nextPos = {
        row: curPosition.row,
        col: curPosition.col
    }

    switch (code){
        case 'ArrowUp':
            nextPos.row-=1
            break
        case 'ArrowDown':
            nextPos.row+=1
            break
        case 'ArrowRight':
            nextPos.col+=1
            break
        case 'ArrowLeft':
            nextPos.col-=1
            break
    }

    return nextPos
}

function isPositionInRange(pos){
    if (pos.col<colMin || pos.col>colMax || pos.row>rowMax || pos.row<rowMin ){
        return false
    }
    else{
        return true
    }
}

function isPositionWall(pos){
    if (getElementByPosition(pos).classList.contains('wall')){
        return true
    }
    else{
        false
    }
}

document.addEventListener('keyup', (event) => {
    const nextPos = getNewPostionByKey(event.code)

    if ( isPositionInRange(nextPos) && !isPositionWall(nextPos)){
        getElementByPosition(curPosition).classList.remove('current')
        getElementByPosition(nextPos).classList.add('current')
        
        curPosition.row=nextPos.row
        curPosition.col=nextPos.col

        if (getElementByPosition(nextPos).classList.contains('target')){
            window.alert("You Escaped!")
        }
    }
})