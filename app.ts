//Tests for equality and inequality with strings:
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');

//Tests using the lower case function:
let word = 'HELLO';
console.log("Is word.toLowerCase() == 'hello'? I predict True.");
console.log(word.toLowerCase() == 'hello');

//Numerical tests:
let x = 10;
let y = 20;
console.log("Is x > y? I predict False.");
console.log(x > y);

console.log("Is x <= y? I predict True.");
console.log(x <= y);

//Tests using "and" and "or" operators:
let age = 25;
let isStudent = true;

console.log("Is age >= 18 && isStudent true? I predict True.");
console.log(age >= 18 && isStudent);

console.log("Is age < 18 || isStudent false? I predict False.");
console.log(age < 18 || !isStudent);

//Testing whether an item is in an array:
let colors: string[]= ['green', 'red', 'blue'];
console.log("Is 'green' is in colors array? I predict True.");
console.log(colors.includes('green'));

//Testing whether an item is not in an array:
console.log("Is 'yellow' is not in colors array? I predict True.");
console.log(!colors.includes('yellow'));

