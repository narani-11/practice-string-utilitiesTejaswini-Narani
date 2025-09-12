//import the functions from stringutilities.js

const stringUtils = require('./stringUtils');
// Test capitalize
console.log("Capitalize Tests:");
console.log(stringUtils.capitalize("hello"));   // Output: Hello
console.log(stringUtils.capitalize(""));        // Output: (empty string)
console.log(stringUtils.capitalize(undefined)); // Output: (empty string)
// Test reverse
console.log("\nReverse Tests:");
console.log(stringUtils.reverse("hello"));   // Output: olleh
console.log(stringUtils.reverse("JavaScript")); // Output: tpircSavaJ
console.log(stringUtils.reverse(""));        // Output: (empty string)
// Test contains
console.log("\nContains Tests:");
console.log(stringUtils.contains("hello world", "world")); // Output: true
console.log(stringUtils.contains("hello world", "js"));    // Output: false
console.log(stringUtils.contains("", "a"));                // Output: false
console.log(stringUtils.contains("test", ""));             // Output: true
