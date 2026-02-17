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
const spreadCopy = [...originalScores]; // creates a new array with the same elements
//e
spreadCopy[0] = 50;
console.log("originalScores:", originalScores);
console.log("spreadCopy:", spreadCopy);

