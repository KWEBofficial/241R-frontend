const getDivisors = (x) => {
    let sqrtx = x ** 0.5
    let result = []
    for (let i = 1; i <= sqrtx; i++) {
        if (x % i == 0) {
            result.push(i);
            if (i != sqrtx) result.push(x / i)
        }
    }

    result.sort((a, b) => a - b)
    return result
};