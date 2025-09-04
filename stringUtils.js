/***Instructions
In this practice, you’ll practice how to create and export reusable JavaScript
functions within a custom module. They also learn how to handle string
manipulation and validate input through testing in a separate main file.
Tasks
Part 1: Initial Setup
1. Create a new project folder named string-utilities.
2. Inside the folder, create the following files:
○ stringUtils.js: This will be the custom module.
○ app.js: This will be the main file where the module is tested.
Part 2: Practicing String Utilities
1. Create the stringUtils.js Module:
○ Define and export the following functions:
■ capitalize(str): Converts the first letter of a string to
uppercase.
■ reverse(str): Reverses the characters in a string.
■ contains(str, substr): Checks if a substring exists within a
string and returns true or false.
2. Test the Module in app.js:
○ Import the stringUtils.js module into app.js.
○ Test each function with different string inputs and log the results to
the console.
3. Ensure Reusability:
○ Design the module functions to handle edge cases, such as empty
strings or undefined inputs.***/

PART 2: practicing String Utilities
/*console.log("capitalize the firstletter of the string");*/
function capitalize(str){
 return str.charAt(0).toUpperCase()+str.slice(1);
}
//console.log(capitalize("viradhya"));

/*console.log("reverse the string");*/
function reverse(str){
   return str.split("").reverse().join("");
}
//console.log(reverse("viradhya"));

/*console.log("check whether the string contains the substring");*/

function contains(str,substr){
    return str.includes(substr);
}
//console.log(contains("launchcode","unchco"));
module.exports={capitalize,reverse,contains}
