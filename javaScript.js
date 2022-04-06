/***********************************
        EXAMPLE OF  MODULE      
***********************************/
// CODE THAT ZENSAR MEETING HAS
var num = 60;
let int_ = 100;

// bug testing
console.log("*******THIS IS JavaScript PRACTICE********");
// const pi = 3.14;

/****************************  
1. Inside the block even constant local scope can be redefine and reassign
2. LET and CONST => You can not assign the LET but can re-define it where  for CONST both are impossible for const
3. VAR => It is only global scope where you can change it anywhere
*****************************/
// Class defination 
const person = {
    name: "tekking",
    country: "Uk",
    height: 180,
    weight: 90,
    talk : function(){
        return this.name + " talks very politely";
    }
}

function greet(name, fun){
    console.log("hello world");
    // document.getElementById("display").innerHTML = ("hi" + " " + name);
    fun(name)
}

function sayName(name){
    console.log("hello" + " "+ name)
}
setTimeout(greet, 5000, "king", sayName);
sayName("tekking",1000);

// SIMPLE FUNCTION CALL
function multi(value){
    console.log(value*20);
}
// setTimeout(function(){multi(10)}, 2000)

// setInterval(func1,1000);
// function func1(){
//     let date = new Date();
//     console.log(date.getFullYear());
// }

// BASIC JAVASCRIPT CALL USING fs
const fs = require('fs');
// READ FILE
fs.readFile('ajax.txt', function read(err, data) {
    // ERROR HANDELING
    if (err) {
        throw err;
    }
    const content = data;
    // INVOKE CALL
    console.log(content.toString());   // Put all of the code here (not the best solution)
});

// ADD FUNCTION USING PROMICE
const add = (num1, num2) => new Promise((resolve) => resolve(num1 + num2))
.then((result) => {
    console.log(result) // result: 6
    return result + 10
})
.then((result) => {
    console.log(result) // result: 16
    return result
})
.then((result) => {
    console.log(result) // result: 16
});
add(4,2)

// FROG JS 
