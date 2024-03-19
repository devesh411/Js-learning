const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, crypography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({usename:"Devesh", email: "devesh@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Devesh", email: "dinu@example.com"})   
        } else{
            reject("Error: something went wrong")
        }
    }, 1000)

})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((usename) => {
    console.log(usename);
}).catch(function(error){
    console.log(error);
}).finally(function () {
    console.log("The promise is either resolve or rejected");
})


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Javascript", password: "123"})   
//         } else{
//             reject("Error: something went wrong")
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
    
// }

// consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("Error:", error);
//     }
    
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("error occured:", error);
})