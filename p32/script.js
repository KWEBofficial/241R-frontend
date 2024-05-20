const getDivisors = (x) => {
    const arr = [];
    for(let i = 1; i <= x; i++) {
        if(x % i === 0) arr.push(i);
    }
    return arr;
};
