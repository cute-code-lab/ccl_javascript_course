//-----------Data Types in JavaScript-----------

// String
const productName = "sofa"; // String
console.log(productName);
// Number
const price = 30.99;
console.log(price);
// Boolean
const isOnSale = true;
console.log(isOnSale);
// Undefined
let discount;
console.log(discount);
// Null
const customerName = null;
console.log(customerName);

// ----------Non-primitive Data Type
// Object----------------
const product = {
  name: "sofa",
  price: 30.99,
  isOnSale: true,
  discount: undefined,
};
console.log(product);

//---------- Data Type Checking--------------
console.log(typeof productName);
console.log(typeof price);
console.log(typeof isOnSale);
console.log(typeof discount);
console.log(typeof customerName);
console.log(typeof product);
