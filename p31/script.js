const isValidNumber = (num) => {
    if ( num % 1 === 0 && 1<= num && num <= 9) {
        return true;
    } else {
        return false;
    }
};