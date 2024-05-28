const isValidNumber = (number) => { 
    if (number > 0 && number < 10 && number % 1 === 0) {
        return true;
    } else {
        return false;
    }
}; 
