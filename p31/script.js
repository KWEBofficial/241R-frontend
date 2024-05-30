const isValidNumber = (x) => {
    if (x % 1 === 0 && 0 < x && x < 10 && typeof(x) == 'number') {
            return true
    }
    return false
};