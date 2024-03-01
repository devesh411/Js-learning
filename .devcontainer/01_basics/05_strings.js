const name = "devesh"
const repoCount = 10

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//string declaration another method
const gameName = new String('Devesh-kumar-dk')

// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(0));

// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,2)

console.log(anotherString);

const newStringOne = "       Devesh"
console.log(newStringOne);
console.log(newString.trim());


const url = "https://devesh.com/devesh%20kumar"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));




