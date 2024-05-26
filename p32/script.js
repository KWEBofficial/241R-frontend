const getDivisors = (num) => {
    let divisors = [];
    let sqrtNum = Math.sqrt(num);
    for (let i = 1; i <= sqrtNum; i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (i !== num / i) {
                divisors.push(num / i);
            }
        }
    }
    return divisors.sort((a, b) => a - b);
};