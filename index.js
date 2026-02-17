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
// excercise 3 : shallow copying of Arrays and the reference trap
//a
const originalScores = [90, 85, 78];
//b
const referenceCopy = originalScores;
console.log(referenceCopy);
//c
// Modifying referenceCopy will also modify originalScores because they point to the same array in memory
referenceCopy[0] = 100;
console.log("originalScores:", originalScores);
console.log("referenceCopy:", referenceCopy);
//d
// To create a true copy of the array, we can use the spread operator or the slice method. This way, we can modify the new array without affecting the original one.
// The spread operator creates a new array with the same elements, while the slice method returns a new array that is a shallow copy of a portion of the original array. Both methods allow us to avoid the reference trap and maintain the integrity of the original array.
const spreadCopy = [...originalScores]; // creates a new array with the same elements
//e
spreadCopy[0] = 50;
console.log("originalScores:", originalScores);
console.log("spreadCopy:", spreadCopy);
// Section B : Searching  and checking  (accessors and iterators)
// Excercise 4 : finding elements by value and index
const studentNames = ["Alice", "Bob", "Charlie", "Alice", "David"];
// a 
// the indexof, lastindexof = methods are used to find the index of the first and last occurrence of a specified value in an array, respectively. They return the index of the element if found, or -1 if not found.
console.log(studentNames.indexOf("Alice")); // returns 0, the index of the first occurrence of "Alice"
// b
console.log(studentNames.lastIndexOf("Alice")); // returns 3, the index of the last occurrence of "Alice"
// c
console.log(studentNames.includes("Charlie")); // returns true, since "Charlie" is in the array
//d
console.log(studentNames.includes("Eve")); // returns false, since "Eve" is not in the array
// Exercise 5: Advanced Search with Conditionals 
const products = [
    {id: 1, name: "Laptop", price: 1200},
     {id: 2, name: "Mouse", price: 25}, 
     {id: 3, name: "Keyboard", price: 75}
    ];
// a
let foundProducts = products.find(product => product.id === 2); // finds the first product with id 2
console.log(foundProducts);
//b
let foundIndex = products.findIndex(product => product.price > 1000); // finds the index of the first product with price greater than 1000