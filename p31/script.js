const isValidNumber = (num) => {
    if (typeof num === 'string')
        num = Number(num);
    return !isNaN(num) && Number.isInteger(num) && num > 0 && num < 10;
};