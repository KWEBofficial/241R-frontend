const isValidNumber = (x) => {
    
    if (1 <= x && x <= 9 && Number.isInteger(x)){
        return true;
    }  
    else{
        return false;
    }
}; /* TODO */