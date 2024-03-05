//1. Find area of rectangle
//Use this
const length = 5
const width = 3
console.log(length*width)

//or this
const rectangleArea = length * width
console.log(rectangleArea)

//2. Find perimeter of rectangle
console.log((length + width) * 2)

//or this
const rectanglePerimeter = 2 * (length + width)
console.log(rectanglePerimeter) 

//3. Find diameter of circle
const radius = 5
const pi = Math.PI
console.log(radius * 2)

//Find circumference of circle
const circumferenceCircle = (2 * pi * radius)
console.log((circumferenceCircle.toFixed(1)))

//Find area of circle
console.log(pi * Math.pow(radius, 2))

//4. Find angle of triangle
const a = 80
const b = 65
const angleTriangle = (180 - (a+b))
console.log(angleTriangle)

//5. Find the differences between days
const date1 = new Date('2022-01-20')
const date2 = new Date('2022-01-22')
console.log(Math.abs(date2 - date1) / (24 * 3600 * 1000))

//6. Convert days to years, months, and days
const totalDays = 400
const daysInYear = 365
const daysInMonth = 30

const years = (totalDays / daysInYear).toFixed()
const months = ((totalDays % daysInYear) / daysInMonth).toFixed()
const days = ((totalDays % daysInYear) % daysInMonth).toFixed()

console.log(`${years} years, ${months} months, ${days} days`)

//End of the Exercise 1//