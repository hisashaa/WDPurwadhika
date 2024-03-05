console.log("Hello world")

//Variable LET
//let disini, dipanggil terlebih dahulu
let kotakSepatu;
kotakSepatu = "Adidas";
console.log (kotakSepatu)

//let disini, langsung dipanggil di line yang sama
let kotakTas = "Gucci"
console.log (kotakTas)
let kotakTas2 = "Hermes"
console.log (kotakTas2)

//Jika ingin mengubah value nya langsung di mention saja,
//tidak perlu pakai variable
kotakTas2 = "Prada"
console.log (kotakTas2)

//contoh lain dari let
let kotakLotion = 'Scarlett'
console.log (kotakLotion)
kotakLotion = "Vaseline"
console.log (kotakLotion)

//Variable CONST
const kotakBaju = "CottonOn"
console.log (kotakBaju)

// //CONST tidak akan berubah
// const kotakSkincare = "LaMer"
// console.log (kotakSkincare)
// kotakSkincare = "Scarlett"
// //Assignment to constant Variable, 
// //(tidak bisa dijalankan)

//contoh lain
const kotakTissue = "Mitu"
console.log (kotakTissue)
const kotakTissue2 = "Paseo"
console.log (kotakTissue2)
const google = "https://www.google.com"
const facebook = "https://www.facebook.com"
console.log (google)
console.log (facebook)

//VARIABLE NAMING
//only letters, digits, or $ and _ only
//can't be digit for the first character
//case sensitive (upper and low case berpengaruh)
//reserved words, (kalimat yang digunakan JS)
const _1 = "Satu"
const $dua = "Dua"
console.log (_1)
console.log ($dua)

const Hairdryer = "Dyson"
const hairdryer = "Remmington"
console.log (Hairdryer)
console.log (hairdryer)

//DATA TYPES
//Primitive = Provided by JS
//Non-primitive = Derivered from the Primitive
 
// === PRIMITIVE DATA TYPE === //
//STRING VARIABLE
const string = "untuk tulisan"
 console.log (typeof string)

//NUMBER VARIABLE
 const number = 102
 console.log (typeof number)

//BOOLEAN VARIABLE
const boolTrue = true
const boolFalse = false
console.log (typeof boolTrue)
console.log (typeof boolFalse)

//NULL VARIABLE
//No content
const nulls = null
console.log (typeof nulls)

//UNDEFINED VARIABLE
const undefine = undefined
console.log (typeof undefine)

// === NON-PRIMITIVE DATA TYPE === ///
//OBJECT VARIABLE
const objects = {
    name: "sasha",
}
console.log (typeof objects)

//ARRAY VARIABLE
const array = [
 2, 4, 6, 8, 10
]
console.log (typeof array)

        //===MUTABLE & IMMUTABLE VARIABLE===//
//{Mutable = can be changed = non primitive
//Object&Array = Reference Type}
//{Immutable = Cannot be changed
//String, number, boolean = Value Type}

//contoh IMMUTABLE
let age = 24
console.log (age)
let newAge = age
console.log (newAge)
age = 28
console.log (age)
console.log (newAge)
//newAge tidak berubah, karena dia Immutable

//contoh MUTABLE
//Object biasa pakai 'Const'
const car = {
    brand: "ferrari",
    tire: 4
}
const newCar = car;
console.log (car)
console.log (newCar)

//namun jika value nya new... kita ganti:
const motor = {
    brand: "Vario",
    tire: 2
}
const newMotor = motor;
newMotor.tire = 4
console.log (motor)
console.log (newMotor)
//value motor dan newMotor nya juga akan berubah
//karena ini adalah ReferenceType
        //===MUTABLE IMMUTABLE DONE===//

//String Built-In Method//
const text = "12345";
const text2 = 'cutsasha'
console.log(text.slice (0,5))
console.log(text2.toUpperCase())
console.log(text2.slice (3))
console.log(text2.replace("s", "t"))
console.log(text2.replace("s", 1))

//TEMPLATE LITERALS//
//`` gunakan tanda petik tersebut, 
//untuk line yang lebih panjang//
const sentence = `hello world, this is 
                sasha from purwadhika`
console.log(sentence)

//gunakan $ untuk menyatukan variable dari sebelumnya
//bisa juga ketika tulisan yang mau kita tampilkan akan berubah2
const sentences2 = `${text2} said hello its sasha here, 
                    its 2 pm and i am starving`
console.log(sentences2)

//Number Built-In Method//
const angka = 5.1348
console.log(angka.toString())
console.log(angka.toFixed())
console.log(parseInt("12345"))
String (12345)
console.log(String(12345))

//TYPE CONVERSION//
//Type Conversion: Numeric//
const add = 1 + 1;
console.log(add)

//Type Conversion: Boolean//
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(2))
console.log(Boolean(3))
console.log(Boolean("sasha"))

//DATE DATA TYPE & Date Built-In Method//
//Date today//
let now = new Date ();
console.log(now)

//Custom Date//
let customDate = new Date ("2024-02-14")
console.log (customDate)

//Add 1 day from today, watch the formula
let add1DayFromNow = new Date(new Date().getTime () + 24 * 3600 * 1000)
console.log(add1DayFromNow)

let newDate = ("2024-01-01")
let newDate1 = new Date("2024-01-01")
console.log(newDate1.getFullYear())
console.log(newDate1.getDate())
console.log(newDate1.getMonth()+ 1)
//khusus bulan, "type + 1", 
//dalam JS, get month started with 0

//Change Date Format to ID Format//
let customDate1 = new Date ("2022-09-05")
console.log(customDate1)
const customDate1Format = customDate1.toLocaleString ("in-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
})
console.log(customDate1Format)

let birthday = new Date ("1999-05-10")
console.log(birthday)
const birthdayFormat = birthday.toLocaleString ("in-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
})
console.log (birthdayFormat)
//DATE DATA TYPE===DONE===//

//BASIC OPERATORS//
const penjumlahan = (60 + 60)
console.log (penjumlahan)

//Unary, Binary, and Operand//
//Operand: Sesuatu yang digunakan untuk meletakkan operator
//1 Operand = Unary | 2 & >2 Operand = Binary

//Unary Example//
let x = 1
x = -x
console.log(x)

//Binary Example//
let y = 4, z = 4;
console.log(y*z)

//INCREMENT & DECREMENT
//Increment
let ment = 1
ment++;
console.log(ment++)

//Decrement
let mend = 2
mend--;
console.log(mend--)

//STRING CONCATENATION//
//First Way//
let kalimat = "Sasha"
let kalimat2 = "is starving"
const newKalimat = kalimat + " " + kalimat2
console.log(newKalimat)

//Second Way//
let kalimat3 = "Madu & Milo"
let kalimat4 = "are my cats"
const newKalimat34 = `${kalimat3} ${kalimat4}`
console.log(newKalimat34)

//MODIFY inn Place//
//Penjumlahan
let n = 2;
n += 5;
console.log(n)

//Perkalian
let b = 7
b *= 7;
console.log(b)

//Postffix & Prefix Form//
//Prefix//
let g = 5
console.log(++g)
//5 + 1

//Postfix//
let h = 5
console.log(h++)
console.log(h)
//Postfix ditulis 2 kali untuk bisa diproses//

//COMPARISON OPERATORS//
let = num1 = 2;
let = num2 = 2;
console.log(num1 == num2)
//Outputnya adalah boolean//
//==//
console.log(num1 != num2)
//!= artinya adalah 'apakah value 1 tidak sama dengan value 2?'//
//output tidak mempedulikan type of data

let = num3 = 2;
let = num4 = "2";
console.log(num3 === num4)
//===//
console.log(num3 !== num4)
//!== artinya adalah 'apakah value 3 tidak sama dengan value 4?'//
//output mempedulikan type of data&value//

let = num5 = 8;
let = num6 = "10";
console.log(num5 > num6)
console.log(num5 < num6)
//Tidak mempedulikan type of data

console.log(num5 >= num6)
console.log(num5 <= num6)

//===Practice Session 1 Done ===//
