const isValidNumber = (x) => {
    const validNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if(x in validNumber) return true;
    return false;
};
