const getDivisors = (num) => {
    const arr = [];
    const len = Math.sqrt(num);
    for (let i = 1; i <= len ;i++) {
        if (num % i === 0) {
            if (len == i) {
                arr.push(i);
            } else {
                arr.push(i);
                arr.push(num/i);
            }
        }
    }
    return arr.sort((a,b) => a-b);
};