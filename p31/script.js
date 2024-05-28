const arr = [1,2,3,4,5,6,7,8,9]
const isValidNumber = (x) => {
    if(x===true) return false;
    for(var num of arr){
        if(x==num) return true;
    }
    return false;
}
