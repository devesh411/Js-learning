const userEmail = []

if(userEmail){
    console.log("got user email");
}else{
    console.log("Dont have email");
}

//falsy values

// false, 0 , -0, BigInt 0n, "", null, undefined, NaN  // these all the falsy value

//truthy
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");  
// }

const emailObj = {}

// if(Object.keys(emailObj).length === 0){  //here Object.keys is used to convert object in array
//     console.log("Objedt is empty");          
// }

// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10            //null safety
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
console.log(val1);


// terniary Operator

// condition ? true : false 

const iceTeaPrice = 70

iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");;