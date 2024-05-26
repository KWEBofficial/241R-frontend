const isValidNumber = (input) => {

    const number = Number(input);
    const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    if (!isFinite(number) || isNaN(number)) {
        return false;
    }
    if (integers.includes(number)) {
        return true;
    }
    return false;
};
