// singleton
// Object.create
//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Devesh",
    "Full name" : "Devesh sagar",
    [mySym]: "myKey1",
    age: 23,
    location: "jaipur",
    email: "dinu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);

// console.log(JsUser["Full name"])
// console.log(typeof JsUser[mySym]);

JsUser.email = "devesh@gmai.com"

// Object.freeze(JsUser)
JsUser.email = "devesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());