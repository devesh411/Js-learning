//arrays

const myArr = [0,1,2,3,4,5,]
const myHeroes = ["Ironman","Thor"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);


//Arrays methods

// myArr.push(6)

// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //its add value in starting of array It will shift whole array to next index
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof(newArr));

// slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("b ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log(myn2);