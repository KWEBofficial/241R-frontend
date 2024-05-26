const isValidNumber = (num) => {
    return !isNaN(num) && Number.isInteger(num) && num > 0 && num < 10;
};