const displayTimes = () => {
    // input 태그에서 입력된 값 가져옴
    const inputValue = document.getElementById('number').value;

    // 문자 -> 숫자
    const number = parseInt(inputValue);

    // 결과를 출력할 #times-result 요소
    const resultDiv = document.getElementById('times-result');

    // 입력 값이 1 이상 9 이하의 자연수인지 확인
    if (isNaN(number) || number < 1 || number > 9) {
        // 입력 값이 유효하지 않으면
        resultDiv.innerHTML = "Input Error!";
    } else {
        // 유효한 입력 값이면 구구단을 계산
        let result = `<h3>Times Table of ${number}</h3>`;
        for (let i = 1; i <= 9; i++) {
            result += `<p>${number} x ${i} = ${number * i}</p>`;
        }
        resultDiv.innerHTML = result;
    }    
}; 
