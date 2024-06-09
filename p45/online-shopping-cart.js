const ItemPrices = {
    apple: 700,
    orange: 800,
    lemon: 900,
};

let sum = 0;

const cost = document.getElementById("cost");

const AddToCartButtons = document.querySelectorAll(".add-to-cart");

for(const button of AddToCartButtons) {
    button.addEventListener("click", (event) => {
        const ItemElement = event.target.closest(".item");
        const ItemId = ItemElement.id;
        const ItemPrice = ItemPrices[ItemId];

        sum += ItemPrice

        cost.innerText = sum;
    });
}