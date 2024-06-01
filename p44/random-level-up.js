const getRandomBinaryResult = (num) => {
    const pick = Math.floor(Math.random()*100)

    if (pick < num) {
        return true
    }
    else{
        return false
    }
}

const tryLevelUp = () => {
    const levelPrint = document.getElementById("current-level")
    const tryPrint = document.getElementById("attempts")
    const gaugeBar = document.getElementById("gauge-bar")

    const possibility = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1]
    let level = 0
    let tryNum = 0

    const levelUp = setInterval(() => {
        if (level===10){
            clearInterval(levelUp)
        }
        if (getRandomBinaryResult(possibility[level])){
            level += 1
        }
        tryNum += 1
        tryPrint.innerText = tryNum
        levelPrint.innerText = level
        gaugeBar.style.width = (30*level)+'px'
    }, 50)
}; /* TODO */

