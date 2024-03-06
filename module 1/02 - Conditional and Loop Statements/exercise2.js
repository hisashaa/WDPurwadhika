//1. Convert celcius to Fahrenheit
let celcius = 60
let fahrenheit = (celcius * 9 / 5) + 32
console.log(fahrenheit)

//2. Check if the number is odd or even
let xo = 2
if (xo % 2 == 0) {
    console.log("even number")
} else {
    console.log("odd number")
}

let yo = 25
if (yo % 2 == 0) {
    console.log("even number")
} else {
    console.log("odd number")
}

//3. Check the number if it's prime or not
let num = 6
let prime = true

if (num <= 1) {
    prime = false
} else {
    for (let i = num - 1; i > 1; i--) {
        if ((num / i) % 1 === 0) {
            prime = false
            break
        }
    }
}
console.log(prime? `${num} adalah bilangan prima` : `${num} bukan bilangan prima`)

//4. Find sum of the numbers
numb = 5
let sum = 0

for (let i = 1; i <= numb; i++) {
    sum += i
}
console.log(sum)

//5. Find factorial of the number
num = 6
let factorial = 1
for (let i = 1; i <= num; i++) {
    factorial *= i
}
console.log(factorial)

//6. Find a code to print the first N fibonacci
calc = 0;
numberY = 15;
let number1 = 0;
let number2 = 1;
message = `First ${numberY} of fibonacci = ${number1}, `;

for (let i = 1; i <= numberY; i++) {
  calc = number1 + number2;
  number1 = number2;
  number2 = calc;
  message += i == 1 ? `${number1}` : `, ${number1}`;
}
console.log(message);