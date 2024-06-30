const isValidNumber = num => {
    if (Number.isInteger(num)) {
        return num >= 1 && num <= 9;
    }
    return false;
}

