const isValidNumber = (n) => {
    if (n % 1 == 0 && 1 <= n && n <= 9) {
        return true;
    }
    return false;
};
