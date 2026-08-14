// test-error.js

function calculateTotal(price, quantity) {
  return price * quantity;
}

const price = 100;
const quantity = 2;

const total = calculateTotal(price, quantity);

console.log("Total:", total);

// ❌ Intentional error: undefinedFunction does not exist
undefinedFunction();