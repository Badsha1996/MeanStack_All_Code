/*************************************************************
 *          JAVA SCRIPT AWAIT AND ASYNC BASIC 101
 **************************************************************/
 console.log("*******THIS IS JavaScript PRACTICE********");
// TEST CODE
// document.getElementById("display").innerHTML = ;

async function f1() {
    console.log('This is first async');
    return Promise.resolve(1);
}

f1();


async function f() {
    console.log('This is 2nd async');
    return Promise.resolve(1);
}

f().then(function(result) {
    console.log(result)
});




// INITIALIZE FIRST PROMICE
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved first one')}, 4000);
});

// ASYNC 
async function asyncFunc1() {
    let result = await promise1;

    console.log(result);
    console.log('hello World');
}
asyncFunc1();






// INITIALIZE 2ND PROMICE
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved second one')}, 1000);
});

async function asyncFunc2() {
    try {
        let result = await promise2;

        console.log(result);
    }
    catch(error) {
        console.log(error);
    }
}

asyncFunc2(); 

