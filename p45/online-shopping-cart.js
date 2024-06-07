const price = {
    apple: 700,
    orange: 800,
    lemon: 900,
}

let total_price = 0;

for (const fruit of Object.keys(price)) {
    const item_div = document.getElementById(fruit);
    const btn = item_div.querySelector(".add-to-cart");
    btn.addEventListener('click', () => {
        total_price += price[btn.parentElement.parentElement.id];
        document.getElementById('cost').innerText = total_price;
    });
}

