const isValidNumber = (inp) => {
    if(inp > 0 & inp < 10 & !isNaN(Number(inp)) & Number.isInteger(inp)) return true;
    else return false;
}
