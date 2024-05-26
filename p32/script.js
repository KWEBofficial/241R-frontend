const getDivisors = (num) => {
    let res = [];
    let sqrt = Math.sqrt(num);
    for (let i = 1; i <= sqrt; i++) {
        if (num % i == 0) {
            res.push(i);
            if (num / i != i)
                res.push(num / i);
        }
    }
    res.sort((a, b) => a - b);
    return res;
};