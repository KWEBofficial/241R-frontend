const getDivisors = (x) => {
    let divisors = [1, x];
    const sqrtX = Math.sqrt(x);
    for(let i = 2; i < sqrtX; i++) {
        if(x%i === 0) {
            divisors = divisors.concat([i, x/i]);
        }
    }
    return divisors.sort((first, second) => first - second);
};
