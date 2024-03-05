// for 

for (let i = 1; i <= 10 ; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j < 10; j++) {
        // console.log(`Inner loop value: ${j} and outer loop ${i}`); 
        // console.log(i + '*' + '=' + i*j);
    }
}


let myArray = ["flash","bataman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    // const element = myArray[i];
    // console.log(myArray[i]);
}

// break and continue

// for (let index = 1; index <= 20 ; index++) {
//     if(index == 5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }
for (let index = 1; index <= 20 ; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue
    }
    // console.log(`Value of i is ${index}`);
    
}

// let i = 0
// while (i < 20) {
//     console.log(`VALUE of i is : ${i}`);
//     i = i + 2
// }


let score = 11
do {
    console.log(`your score is ${score}`);
    score++
} while (score <= 10);

