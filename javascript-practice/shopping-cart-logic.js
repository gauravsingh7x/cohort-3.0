let cart = [];

function addItem(name, price, qty = 1) {
    let existing = cart.find(item => item.name === name);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ name, price, qty });
    }
}

function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
}

function getTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function showCart() {
    cart.forEach(item => {
        console.log(`${item.name} x${item.qty} = ₹${item.price * item.qty}`);
    });
    console.log(`Total: ₹${getTotal()}`);
}

addItem("Notebook", 50, 2);
addItem("Pen", 10, 5);
addItem("Notebook", 50);   // adds to existing
showCart();