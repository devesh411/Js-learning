// var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20 
    console.log("inner", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "devesh"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "Devesh"
    if(username === "Devesh"){
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//*********************Interesting********************/

console.log(addOne(5));
function addOne(num){    // we can access function before making
    return num + 1
}


addTwo(5)
const addTwo = function(num){  //another way of making function , also called as expression
    return num + 2             // we cannot access this before making
}

