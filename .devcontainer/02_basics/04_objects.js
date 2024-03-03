// const tinderUser = new Object() // this is singleton object
const tinderUser = {} //non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"devesh",
            lastname: "sagar"

        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // here empty object act as a target in which all the other source will pe assign

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstrunctor: "Hitesh"
}

// console.log(course.courseInstrunctor);

const {courseInstrunctor:instructor} = course
// console.log(courseInstrunctor);
console.log(instructor);


// {
//     "name": "devesh"
//     "coursename": "js in hindhi" //json format , when we fetch data from api it will return value in json format in which key and value both are strings
//     "price": "free"
// }

[
    {},
    {}, //api can also return value in array and object format
    {}
]





