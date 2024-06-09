const itemsPrice = {apple: 700, orange: 800, lemon: 900};
let totalCost = 0;

const addCost = (fruit) => {
    totalCost += itemsPrice[fruit];
    document.getElementById('cost').innerText = totalCost;
}

const itemList = document.getElementsByClassName('item');
for (const i of itemList) {
    i.getElementsByClassName('add-to-cart')[0].addEventListener('click', () => addCost(i.getAttribute('id')));
}
