// Menu prices
const pizzaPrice = 10.99;
const burgerPrice = 5.99;
const pastaPrice = 7.99;

// Elements for order summary
const pizzaQty = document.getElementById('pizza-qty');
const burgerQty = document.getElementById('burger-qty');
const pastaQty = document.getElementById('pasta-qty');

const pizzaPriceDisplay = document.getElementById('pizza-price');
const burgerPriceDisplay = document.getElementById('burger-price');
const pastaPriceDisplay = document.getElementById('pasta-price');
const totalPriceDisplay = document.getElementById('total-price');

const submitButton = document.getElementById('submit-order');

// Function to calculate total prices
function calculateOrder() {
    const pizzaTotal = pizzaQty.value * pizzaPrice;
    const burgerTotal = burgerQty.value * burgerPrice;
    const pastaTotal = pastaQty.value * pastaPrice;

    pizzaPriceDisplay.textContent = pizzaTotal.toFixed(2);
    burgerPriceDisplay.textContent = burgerTotal.toFixed(2);
    pastaPriceDisplay.textContent = pastaTotal.toFixed(2);

    const total = pizzaTotal + burgerTotal + pastaTotal;
    totalPriceDisplay.textContent = total.toFixed(2);
}

// Event listeners for quantity changes
pizzaQty.addEventListener('input', calculateOrder);
burgerQty.addEventListener('input', calculateOrder);
pastaQty.addEventListener('input', calculateOrder);

// Function to handle order submission
submitButton.addEventListener('click', () => {
    alert('Your order has been submitted!');
    // Reset quantities after order submission
    pizzaQty.value = 0;
    burgerQty.value = 0;
    pastaQty.value = 0;
    calculateOrder();
});

// Initial calculation
calculateOrder();
