const getDivisors = (x) => {
    let arr = [];
    for (let i = 1; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            arr.push(i, x / i);
            if(i===x/i) arr.pop() 
        }
    }
    return arr.sort((a, b) => a - b);
};
