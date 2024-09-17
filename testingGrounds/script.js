/* function favouriteAnimal(animal) {
  return animal + " is my favourite animal";
}
console.log(favouriteAnimal("dog"));

function calculateSquare(number) {
  return number * number;
}
console.log(calculateSquare(4));

function calculateBMI(weight, height) {
  return weight / (height * height);
}
console.log(calculateBMI(70, 1.75));

function findLargestNumber(num1, num2, num3) {
  if (num1 > num2 && num3) {
    return num1;
  } else if (num2 > num1 && num3) {
    return num2;
  } else return num3;
}
console.log(findLargestNumber(8, 23, 15));

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else return false;
}
console.log(isLeapYear(2020));
console.log(isLeapYear(1990));
console.log(isLeapYear(2000));
console.log(isLeapYear(2024));

function getAverageGrade(grade1, grade2, grade3) {
  let averageGrade = (grade1 + grade2 + grade3) / 3;
  if (averageGrade >= 90) {
    return "Excellent";
  } else if (averageGrade >= 70 - 89) {
    return "Good";
  } else return "Needs Improvement";
}
console.log(getAverageGrade(85, 90, 92)); // Should return "Excellent"
console.log(getAverageGrade(75, 80, 65)); // Should return "Good"
console.log(getAverageGrade(60, 65, 70)); // Should return "Needs Improvement"

function classifyNumber(number) {
  if (number === 0) {
    return "Zero";
  } else if (number > 0 && number % 2 === 0) {
    return "Positive and Even";
  } else if (number > 0 && number % 2 !== 0) {
    return "Positive and Odd";
  } else if (number < 0 && number % 2 === 0) {
    return "Negative and Even";
  } else if (number < 0 && number % 2 !== 0) {
    return "Negative and Odd";
  }
}
console.log(classifyNumber(4)); // Should return "Positive and Even"
console.log(classifyNumber(-7)); // Should return "Negative and Odd"
console.log(classifyNumber(0)); // Should return "Zero"
console.log(classifyNumber(9)); // Should return "Positive and Odd"
console.log(classifyNumber(-2)); // Should return "Negative and Even" */

/* function determineDiscount(totalAmount, membershipLevel) {
  if (totalAmount >= 100 && membershipLevel === "Gold") {
    return "20% Discount";
  } else if (totalAmount >= 100 && membershipLevel === "Silver") {
    return "15% Discount";
  } else if (totalAmount >= 50 && membershipLevel === "Bronze") {
    return "10% Discount";
  } else {
    return "No Discount";
  }
}

console.log(determineDiscount(120, "Gold")); // Should return "20% Discount"
console.log(determineDiscount(80, "Silver")); // Should return "15% Discount"
console.log(determineDiscount(60, "Bronze")); // Should return "10% Discount"
console.log(determineDiscount(30, "Gold")); // Should return "No Discount"
console.log(determineDiscount(100, "Platinum")); // Should return "No Discount" */

/* function calculateShippingCost(orderAmount, membershipLevel) {
  if (orderAmount >= 200) {
    return "Free Shipping";
  } else if (
    orderAmount > 99 &&
    orderAmount < 200 &&
    membershipLevel === "Gold"
  ) {
    return "$10 Shipping";
  } else if (
    orderAmount > 99 &&
    orderAmount < 200 &&
    membershipLevel === "Silver"
  ) {
    return "$20 Shipping";
  } else if (
    orderAmount > 50 &&
    orderAmount < 100 &&
    membershipLevel === "Bronze"
  ) {
    return "$30 Shipping";
  } else {
    return "$40 Shipping";
  }
}

console.log(calculateShippingCost(250, "Gold")); // Should return "Free Shipping"
console.log(calculateShippingCost(100, "Gold")); // Should return "$10 Shipping"
console.log(calculateShippingCost(150, "Silver")); // Should return "$20 Shipping"
console.log(calculateShippingCost(80, "Bronze")); // Should return "$30 Shipping"
console.log(calculateShippingCost(30, "Gold")); // Should return "$40 Shipping" */

/* function checkNumber(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
} */

/* function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(isEvenOrOdd(4)); // Should return "Even"
console.log(isEvenOrOdd(7)); // Should return "Odd" */

/* function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 4));

const colourChoice = "red";
switch (colourChoice) {
  case "red":
    console.log("Red");
    break;
  case "blue":
    console.log("Blue");
    break;
  case "yellow":
    console.log("Unknown color");
    break;
  default:
} */

/* //1 - Circumference
function circumference(radius) {
  return 2 * Math.PI * radius;
}
console.log(circumference(5));

//2 - SquareRoot
function squareRoot(numValue) {
  return Math.sqrt(numValue);
}
console.log(squareRoot(5));

//3. - Largest Number
function largestNumber(n, u) {
  return Math.max(n, u);
}
console.log(largestNumber(5, 98));

//4. - Positive or Negative
function isPositive(numChoice) {
  if (numChoice > 0) {
    return true;
  } else return false;
  {
  }
}

console.log(isPositive(4));
console.log(isPositive(-4));
console.log(isPositive(-24));
console.log(isPositive(45));

//5. - Maths
function multiplyAndAdd(a, b, c) {
  return a * b + c;
}
console.log(multiplyAndAdd(2, 3, 4));

//6. Bonus
function isEvenorOdd(num10) {
  if (num10 % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(isEvenorOdd(2));
console.log(isEvenorOdd(4));
console.log(isEvenorOdd(1));
console.log(isEvenorOdd(7)); */

/* function showMessage(from, text) {
  from = "*" + from + "*";
  alert(from + ": " + text);
}

let from = "Ann";
showMessage(from, "Hello");
alert(from); */

/* let value = 10;

function modifyValue() {
  let value = 20;
  return value;
}

console.log(modifyValue()); // Output?
console.log(value); // Output?
 */
/* function outerFunction() {
  let outerVar = "Outer";
  function innerFunction() {
    let innerVar = "Inner";
    return outerVar + " " + innerVar;
  }
  return innerFunction();
}

console.log(outerFunction());
 */
/* function calculateSum(a, b) {
  let sum = a + b;
  function displaySum() {
    console.log(sum);
  }
  return displaySum();
}

calculateSum(5, 10);
 */

/* let counter = 0;

function incrementCounter() {
  counter += 1;
}

incrementCounter();
incrementCounter();

console.log(counter); */

/* function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

let counter = makeCounter();
console.log(counter());
console.log(counter()); */

/* function outer() {
  let x = "Outer";
  function inner() {
    let x = "Inner";
    console.log(x);
  }
  inner();
}

outer(); */

function add(a, b) {
  function multiply(x, y) {
    return x * y;
  }
  return multiply(a, b) + 10;
}

console.log(add(2, 3));

let sshTest = "creating git push";
