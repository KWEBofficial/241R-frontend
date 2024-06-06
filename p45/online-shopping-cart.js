const itemPrices = {
    apple: 700,
    orange: 800,
    lemon: 900
};

let totalCost = 0;
const costElement = document.getElementById('cost');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

for (const button of addToCartButtons) {
    button.addEventListener('click', addToCart);
}

function addToCart(event) {
    const itemElement = event.target.closest('.item');
    const itemPrice = itemPrices[itemElement.id];
    
    totalCost += itemPrice;
    costElement.innerText = totalCost;
}
