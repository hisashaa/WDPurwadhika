//1. Create a function that can create a triangle pattern according to the height provided
function triangleHeight(height = 0) {
  let number = 1
  let result = ''
  
  for (let i = 1; i <= height; i++) {
    result += i === 1 ? '' : '\n'
    
    for (let j = 1; j <= i; j++) {
      result += (j === 1 ? '' : ' ') + String(number).padStart(2, '0')
      number++
    }
  }

  return result
}
console.log(triangleHeight(5))

//2. Create a function that can loop the number of times according to the input provided, 
//and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz",
//multiples of 3 and 5 with "FizzBuzz".
function n(number = 0) {
  let result = "";
  for (let i = 1; i <= number; i++) {
    result += `${i === i ? "" : ", "} ${
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i
    }`;
  }
  return result;
}
console.log(n(15));

//3. Create a function to calculate Body Mass Index (BMI)
const bmiCalculator = (weight, height) => {
  let result = weight / (height * height);
  console.log(result.toFixed(1));
  if (result < 18.5) {
    return console.log("less weight");
  } else if (result >= 18.5 && result <= 24.9) {
    return console.log("ideal");
  } else if (result >= 25.0 && result <= 29.9) {
    return console.log("overweight");
  } else if (result >= 30.0 && result <= 39.9) {
    return console.log("very overweight");
  } else {
    return console.log("obesity");
  }
};
bmiCalculator(110, 1.78);

//4. Write a function to remove all odd numbers in an array 
//and return a new array that contains even numbers only
function removeOddNumbers(numbers = []) {
  return numbers.filter(number => number % 2 === 0)
}

console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//5. Write a function to split a string and convert it into an array of words
function firstWord(newArr) {
  let secondWord = newArr.split(" ");
  return secondWord;
}
console.log(firstWord("Hello World"));