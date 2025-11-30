// ------------ Declaring Variables--------------------
// Declare variables using const and let
const product = "Laptop";
let stock = 25;

// Let can be declared without initialization, but const cannot
// const productDescription; // Uncommenting this line will cause an error
// console.log(productDescription);
let price;
console.log(price);
price = 20;
console.log(price);

// You cannot redeclare a variable with let or const
let category = "Electronics";
// let category = "Gadgets"; // Uncommenting this line will cause an error
// const product = "Tablet"; // Uncommenting this line will cause an error
// ------------ Variable Naming Conventions--------------------
// Valid variable names
let firstName = "John";
let _lastName = "Doe";
let $age = 30;
let address1 = "123 Main St";
let camelCaseVariable = "I follow camelCase";
// Invalid variable names (uncommenting these will cause errors)
// let 1stName = "John";
// let first-Name = "John";
// let first Name = "John";
// let var = "value"; // 'var' is a reserved keyword

// ------------ let v const--------------------
// Example of let variable reassignment
let cart = 10;
console.log("Initial cart quantity:", cart);
cart = 20;
console.log("Updated cart quantity:", cart);

// Example of const variable (cannot be reassigned)
const cartTotal = 23.14;
console.log("Value of cart:", cartTotal);
// cartTotal = 59.99; // Uncommenting this line will cause an error

// ------------ Challenge-------------------
const customerName = "Alice";
let cartItems = 28;
const favoriteFood = "Blue";
console.log(
  "Hello " + customerName + ", you have " + cartItems + " items in your cart."
);
