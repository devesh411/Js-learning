// console.log("D");
// console.log("E");
// console.log("V");
// console.log("E");
// console.log("S");
// console.log("H");

function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("V");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 5)
// console.log(`result: ${result}`);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("pls enter username");
        return
    }
    return `${username} just logged In`
}

// console.log(loginUserMessage("Devesh"));
// console.log(loginUserMessage("Devesh"));


function calculateCartPrice(val1,val2,...num1) { //here ... means rest operator it also called spread operator depending upon use cases
    return num1
}

console.log(calculateCartPrice(200,400,500));

const user = {
    username: "Devesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username: "Sam",
    price: 499
})


const myNewArray = [200, 400, 100, 500]

function returnSecondValue(anyArray){
    return anyArray[1]
}
console.log(returnSecondValue(myNewArray));