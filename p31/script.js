const isValidNumber = (x) => {
    const validNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(const n of validNumber) {
        if(n === x) return true;
    }
    return false;
};
