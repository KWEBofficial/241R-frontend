const isValidNumber = (inp) => {
    inp=Number(inp)
    if(inp>=1&&inp<=9&&Number.isInteger(inp))
        return true;
    else
        return false;
};