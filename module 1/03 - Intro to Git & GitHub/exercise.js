//1. Write a code to display the multiplication table of a given integer
let num = 9
let msg = ''

for (let i = 1; i <= num; i++) {
  msg += `${i === 1 ? '' : ', '}${num} x ${i}`
}

console.log(msg)
//----------------------------//

//2. Write a code to check whether a string is a palindrome or not
let str = 'level'
let strReserve = str.split('').reverse().join('')

console.log(str === strReserve ? 'palindrome' : 'not palindrome')
//----------------------------//

//3. Write a code to convert centimeter to kilometer
let cm = 100000
let km = cm / 100000

console.log(`${km} km`)
//----------------------------//

//4. Write a code to format number as currency (IDR)
let amount = 1000
let amountData = amount.toLocaleString('in-ID', {
  style: 'currency',
  currency: 'IDR'
})

console.log(amountData)
//----------------------------//

//5. Write a code to remove the ﬁrst occurrence of a given “search string” from a string
let string = 'Hello world'
let cut = 'ell'
let result = string.replace(cut, '')

console.log(result)
//----------------------------//

//6. Write a code to capitalize the ﬁrst letter of each word in a string
let word = 'hello world'
let Word = word.charAt(0).toLocaleUpperCase() + word.slice(1)
console.log(Word)
//----------------------------//

//7. Write a code to reverse a string
let realPhrase = "hello"
let reversePhrase = "";
for (let i = realPhrase.length - 1; i >= 0; i --) {
  reversePhrase += realPhrase[i];
}
console.log(`"${realPhrase}") -> "${reversePhrase}"`)
//----------------------------//

//8. Write a code to swap the case of each character from string
let sentence = 'The QuiCk BrOwN Fox'
let swap = ''

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === sentence[i].toLowerCase()) {
    swap += sentence[i].toUpperCase()
  } else {
    swap += sentence[i].toLowerCase()
  }
}
console.log(swap)
//----------------------------//

//9. Write a code to ﬁnd the largest of two given integers
let number1 = 42
let number2 = 27
let largest = number1 > number2 ? number1 : number2

console.log(largest)
//----------------------------//

//10. Write a conditional statement to sort three numbers
let numA = 42
let numB = 27
let numC = 18

const nums = [numA, numB, numC].sort()

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i])
}
//----------------------------//

//11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
let data = 'hello'

switch (typeof data) {
  case 'string':
    console.log(1)
    break;
  case 'number':
    console.log(2)
    break;
  default:
    console.log(3)
}
//----------------------------//

//12. Write a code to change every letter a into * from a string of input
const originalText = 'An apple a day keeps the doctor away'
let changedText = ''

for (let i = 0; i < originalText.length; i++) {
  changedText += originalText[i].toLowerCase() === 'a' ? '*' : originalText[i]
}
console.log(changedText)
//----------------------------//