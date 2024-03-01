// Primitive  call by value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 3454354365464634n


// Reference (Non primitve) direct provide reference of memory

// Array, Objects, Functions

const heros = ["shaktiman", "naaraj","doga"]
let myObj = {
    name: "Devesh",
    age: 23,
}

const myFunction = function(){
    console.log("hello world");
}
