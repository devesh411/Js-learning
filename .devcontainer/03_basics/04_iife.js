// Immediatedly invoked function expression (IIFE)


(function chai(){
    //Named IIFE
    console.log('DB CONNECTED');
})();

((name) => {  //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Devesh")
