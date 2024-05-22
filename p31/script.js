const isValidNumber = (x) => {
    if (x>0 && x<10 && x%1===0){
        return true;
    } else {
        return false;
    }
};