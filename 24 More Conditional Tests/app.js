// Define variable
var apple = "Apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var furits = ["apple", "orange", "bananaS"];
// Test for equality and inquality  with String
console.log("Is apple is to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
//Test using Lowercase Funtion
console.log("Is apple is not  equal to apple?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPlE is equal to after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical tests
console.log("\n In ten is equal to twenty?");
console.log(ten == twenty);
console.log("\n In ten is not  equal to twenty?");
console.log(ten != twenty);
// great than
console.log("\n ten is great than zero?");
console.log(ten > 0);
//Less than
console.log("\n is ten lass than 2?");
console.log(ten < 2);
//Great than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
//test using "and" $$"or " operator
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// using || (or)
console.log("\n 20 is great than 50 or 20 is equal to 30");
console.log(20 > 50 || 20 != 20);
// Tes wheter is item is include in array
console.log("\nIs orange inclde in my fruits array ");
console.log(furits.includes("orange"));
// Not include
console.log("\nIs orange not include in my Fruts array");
console.log(!furits.includes("orange"));
