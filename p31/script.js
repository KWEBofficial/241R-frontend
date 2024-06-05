const isValidNumber = (n) => {
    const num = Number(n);
    return !isNaN(num) && num >= 1 && num <= 9 && num === Math.floor(num);
}; 