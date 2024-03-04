const user = {
    username : "Devesh",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`); // this is used to refer current ... 
        console.log(this);

    }
}
// user.welcomemessage()
// user.username = "Hitesh"
// user.welcomemessage()


console.log(this);  //it return empty object bcz the current context of global scope is empty
                    // but in brower it will return window bcz the global scope of browser is window

// function chai(){
//     let username = "Devesh"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Devesh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Devesh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {  //explicitly return we have to write return statement
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) //implicit return , we dont have to write return statement

const addTwo = (num1, num2) => ({username : "Devesh"})

console.log(addTwo(5,6));
