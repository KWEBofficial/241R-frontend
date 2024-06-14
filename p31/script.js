const isValidNumber = (x) => {
    if (x % 1) return false;
    return x >= 1 && x <= 9 
};