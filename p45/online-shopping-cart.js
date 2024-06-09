const prices = {
  apple: 700,
  orange: 800,
  lemon: 900,
};

let totalCost = 0;
const totalCostPrint = document.getElementById("cost");

const updateTotalCost = (event) => {
  const itemButton = event.target;
  const itemElement = itemButton.parentElement.parentElement;
  const itemId = itemElement.id;
  totalCost += prices[itemId];
  totalCostPrint.textContent = totalCost;
};

const items = document.querySelectorAll(".add-to-cart");
for (const item of items) {
  item.addEventListener("click", updateTotalCost);
}
/* TODO */
