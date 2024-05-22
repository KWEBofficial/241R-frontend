const getDivisors = (x) => {
    const arr=[]
    for(let i=1;i<=x**(1/2);i++){
        if(x%i==0){
            arr.push(i)
            arr.push(x/i)
        }
    };
    return arr.sort(function(a,b) {
         return a-b;
        });
};
 


//return a-b의 원리가 뭔가요?.. sort안에 함수를 넣어서 정렬해야 한다는 것까진 이해되는데 a-b 반환값에 따라 정렬되는 원리가 궁금합니다.