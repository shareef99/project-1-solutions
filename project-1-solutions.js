// Code Bug Fixing

// 2. Temperature Converter

// Write a JavaScript function convertTemperature that converts temperatures between Celsius and Fahrenheit scales,
// providing a flexible tool for users to switch between these two common temperature units.

// The function should take two arguments: temperature and unit, where temperature is the numeric value of the temperature to be converted,
// and unit is a string indicating the initial temperature unit ("C" for Celsius or "F" for Fahrenheit).

// The function should return the converted temperature value rounded to two decimal places with converted scale as a String.

// - If unit is "C", convert the Celsius temperature to Fahrenheit using the formula: Fahrenheit = Celsius * 9/5 + 32.
// - If unit is "F", convert the Fahrenheit temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.
// - If unit is neither "C" nor "F", then it should return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit".

// Example 1:
//  Input: 25, "C"
//  Output: "77.00 F"
// Example 2:
//  Input: -40, "F"
//  Output: "-40.00 C"

// Note:
// The temperature can be a positive or negative numeric value representing the temperature to be converted.
// The unit argument can only take the values "C" or "F" to indicate the initial temperature unit.
// Ensure that the temperature conversion formulas are correctly applied based on the provided unit.
// The converted temperature should be rounded to two decimal places for accuracy.

function convertTemperature(temperature, unit) {
  // Write your code here
  if (unit === "C") {
    const fahrenheit = ((temperature * 9) % 5) + 32;
    return fahrenheit.toFixed(2) + " F";
  } else if (unit === "F") {
    const celsius = ((temperature - 32) * 5) % 9;
    return celsius.toFixed(2) + " C";
  } else {
    return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
  }
}

// console.log(convertTemperature(25, "C"));
// console.log(convertTemperature(-40, "F"));

function correctConvertTemperature(temperature, unit) {
  // Write your code here
  if (unit === "C") {
    const fahrenheit = (9 / 5) * temperature + 32;
    return `${fahrenheit.toFixed(2)} F`;
  } else if (unit === "F") {
    const celsius = (temperature - 32) * (5 / 9);
    return `${celsius.toFixed(2)} C`;
  } else {
    return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
  }
}

// console.log(correctConvertTemperature(25, "C"));
// console.log(correctConvertTemperature(-40, "F"));

// 5. Vowel Count
// Write a JavaScript function countVowels that counts the number of vowels (a, e, i, o, u) in a given string.
// The function should take one argument: str (string).
// The function should return the count of vowels in the input string.
// Example 1:
//  Input: "AlmaBetter"
//  Output: 4
// Example 2:
//  Input: "Coding is fun with fellow learners"
//  Output: 10

// Code with error(s):
function countVowels(str) {
  // Write your code here
  const vowels = ["a", "e", "i", "o", "u"];
  const lowerStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i <= lowerStr.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("Coding is fun with fellow learners"));

// Improvised Perspective to the Coding Problem

// 1. Longest Word Length
// Write a JavaScript function called findLongestWord that takes a sentence (string) as input and determines the length of the longest word within the sentence.
// Example 1:
//  Input: "Coding is fun with fellow learners"
//  Output: 8
// Example 2:
//  Input: "The quick brown fox jumped over the lazy dog"
//  Output: 6

// Approach 1:
function findLongestWord(sentence) {
  // Write your code here
  const words = sentence.split(" ");
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    const length = words[i].length;
    if (length > maxLength) {
      maxLength = length;
    }
  }

  return maxLength;
}

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Approach 2: Rewrite the above code using for…of loop.

function findLongestWord2(sentence) {
  // Write your code here
  const words = sentence.split(" ");
  let maxLength = 0;

  for (const word of words) {
    const length = word.length;
    if (length > maxLength) {
      maxLength = length;
    }
  }

  return maxLength;
}

// console.log(findLongestWord2("The quick brown fox jumped over the lazy dog"));

// 4. Shopping Cart Total
// Imagine you're building an e-commerce website. Write a JavaScript function calculateTotal that takes an array of products
// (objects) and calculates the total cost of the items in the shopping cart.

// Each product object has the following properties:
// name: The name of the product (string).
// price: The price of the product (number).
// quantity: The quantity of the product in the cart (number).

// Example 1:
const cart1 = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Phone", price: 500, quantity: 2 },
  { name: "Headphones", price: 50, quantity: 4 },
];

//  Input: cart1
//  Output: 2200
//  Explanation: price * quantity of all products = 1000 + 2 * 500 + 4 * 50 = 2200

// Example 2:
const cart2 = [
  { name: "Fruits", price: 10, quantity: 5 },
  { name: "Vegetables", price: 8, quantity: 3 },
  { name: "Dairy", price: 5, quantity: 2 },
  { name: "Snacks", price: 3, quantity: 10 },
];

//  Input: cart2
//  Output: 114
//  Explanation: price * quantity of all products = (5 * 10 + 3 * 8 + 2 * 5 + 10 * 3) = 114

// Approach 1:
function calculateTotal(cart) {
  // Write your code here
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

// console.log(calculateTotal(cart1));
// console.log(calculateTotal(cart2));

// Approach 2: Rewrite the code using reduce() method.

function calculateTotal2(cart) {
  // Write your code here
  return cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
}

// console.log(calculateTotal2(cart1));
// console.log(calculateTotal2(cart2));

// Logic Building Coding Questions

// 2. Character Reversal
// Write a JavaScript function reverseString that takes a string as input and returns the string with its characters reversed.
// Example 1:
//  Input: "JavaScript"
//  Output: "tpircSavaJ"
// Example 2:
//  Input: "AlmaBetter University"
//  Output: "ytisrevinU retteBamlA"

function reverseString(str) {
  // Write your code here
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverseString2(str) {
  // Write your code here
  return str.split("").reverse().join("");
}

function reverseString3(str) {
  // Write your code here
  let right = str.length - 1;
  let result = "";

  while (right >= 0) {
    result += str[right];
    right--;
  }

  return result;
}

console.log(reverseString("JavaScript"));
console.log(reverseString2("JavaScript"));
console.log(reverseString3("JavaScript"));
