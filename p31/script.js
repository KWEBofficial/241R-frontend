const isValidNumber = (x) => {
    if(x >= 1 && x <= 9 && Number.isInteger(parseFloat(x))) return true;
    else return false;
}; 
