const isValidNumber = (input) => {
    let num = Number(input);

    if (Number.isInteger(num) && num >= 1 && num <= 9){
        return true;
    }
    else{
        return false;
    }
}; /* TODO */
