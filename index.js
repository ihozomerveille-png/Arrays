// Excercise 1 : array initialization and property access
const productCategories = ["Books", "Electronics", "Clothing", "Home & Kitchen", "Toys & Games"]; 
// a
console.log(productCategories[0]); 
// b
console.log(productCategories[productCategories.length - 1]);  
// c
console.log(productCategories.length);
//d
productCategories[1] = "pen";
// e
console.log(productCategories);
// excercise 2 : push, pop, shift, unshift, and splice
let inventory =[10, 20, 30];
// a
inventory.push(40);
console.log(inventory);
// b
inventory.pop();
console.log(inventory);
// c
inventory.unshift(0);
console.log(inventory);
// d
inventory.shift();
console.log(inventory);
// e
inventory.splice(1, 1, 25, 35);
console.log(inventory);