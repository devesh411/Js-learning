//if 

// const isUserLoggedIn = true
// const temp = 41
// if (temp){
//     console.log("Executed");
// }
 
// <, >, <=, >=, ==, !=, ===, !==
 
const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(power); // outside the block not execute


const balance = 1000
// if (balance > 500) console.log("test"); //another way, use without parenthesis , ";" is mandatory

// if (balance > 500) console.log("test"), // dont reccomment this syntax, but you can write in multiple line also
// console.log("test 2");


// if (balance < 500){
//     console.log("less than");
// } else if (balance < 750 ){
//     console.log(" less than 750");
// }else{
//     console.log("less than 1200");
// }

const isUserLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitcard ){
    console.log("allowed to buy course");
}

if (isUserLoggedIn || loggedInFromEmail ){
    console.log("allwed to buy");
}
