const getDivisors = (n) => {
    const arr = [];
    const root = Math.floor(Math.sqrt(n))
    for (let i = 1; i <= root; i++) {
        if (n % i == 0) {
            arr.push(i);
            if (i !== n / i) {
                arr.push(n / i);
            }
        }
    }
    return arr.sort((a, b) => a - b);
};