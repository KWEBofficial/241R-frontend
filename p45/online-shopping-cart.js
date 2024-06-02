const itemPrices = {
    apple: 700,
    orange: 800,
    lemon: 900
};

let totalCost = 0;

const costElement = document.getElementById('cost');
const addToCartButtons = document.querySelectorAll('.add-to-cart'); // NodeList로 변수에 저장

// Add to Cart 버튼을 클릭할 때마다 해당 아이템의 가격이 총 금액에 추가됨, 화면에 표시된 금액 갱신
for (const button of addToCartButtons) {
    button.addEventListener('click', (event) => {
        const itemElement = event.target.closest('.item');
        const itemId = itemElement.id;
        updateTotalCost(itemId);
    });
}

// 총 금액 계산
const updateTotalCost = (itemId) => {
    totalCost += itemPrices[itemId];
    costElement.innerText = totalCost;
};
