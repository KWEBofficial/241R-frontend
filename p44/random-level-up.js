const tryLevelUp = () => {
    const possibility = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
    
    let level = 0;
    let attempt = 0;
    let max_level = 10;
    
    const getRandomBinaryResult = (possible) => {
        return Math.random() * 100 < possible;
    }

    const level_up = setInterval(() => {
        if(level < max_level){
            
            attempt++;
            
            const up = getRandomBinaryResult(possibility[level]);

            if(up) {
                level++;
                const gaugebar = document.getElementById('gauge-bar');
                gaugebar.style.width = (level/max_level) * 100 + '%';
            }

            document.getElementById('current-level').innerText = level;
            document.getElementById('attempts').innerText = attempt;
        }
        else{
            return clearInterval(level_up);
        }
    }, 50)
    
};
