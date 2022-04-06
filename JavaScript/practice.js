const arr = [1,2,3];
console.log("hello");
// this is a loop
for(i = 0;i<arr.length;i++){
    console.log(arr[i]);
};

// Example of while loop
var x = 8
while (x<10){
    console.log(x);
    x++
};

if (x==10){
    console.log("x = 10");
}

// Task in meeting


// CODE THAT ZENSAR MEETING HAS
console.log("*******THIS IS JavaScript PRACTICE********");
const pi = 3.14;
var num = 60;
let int_ = 100;
export{num, int_};
/****************************  
1. Inside the block even constant local scope can be redefine and reassign
2. LET and CONST => You can not assign the LET but can re-define it where  for CONST both are impossible for const
3. VAR => It is only global scope where you can change it anywhere
*****************************/
{
    const pi = 1000;
    let int_ = 1001
    console.log(pi);
    console.log(int_);
}
console.log(num);
console.log(pi);
console.log(int_);
console.log("\n");
console.log("\n");

/***********************************
EXAMPLE OF MATHEMATICAL OPERATIONS
***********************************/

// variable declaration
let num1 = 7;
let num2 = 8;

// operations
let add = num1+num2
let substract = num2 - num1;
let multi     = num1 * num2;
let division  = num2 / num1;
let moduleo   = num1 % num2;
let expo      = num1**num2;
let incre     = ++num1;
let decre     = --num2;
var asign     = 100;
asign         += 1;
var reasign   =+ asign;

// Print functions 
console.log("***HERE IS THE JAVA SCRIPT OUTPUT***");
console.log("The addtion is : " + add + "\n");
console.log("The substraction is : " + substract + "\n");
console.log("The multiplication is : " + multi + "\n");
console.log("The division is : " + division + "\n");
console.log("The modulo is : " + moduleo + "\n");
console.log("The increment is : " + incre + "\n");
console.log("The decrement is : " + decre + "\n");
console.log("The exponent is : " + expo + "\n");
console.log("The reassigned value is : " + asign + "\n");
console.log("The reassigned value is : " + reasign + "\n");

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

console.log(person.talk());

let str_ = "hello";
console.log(str_.charAt(0));

/* ###### PRACTICE OF CHARCTERS IN JS BASIC 101 ###### */
console.log("**** STRING PRACTICE SUPER BASICS ****")
const first_name = "Elon";
const last_name  = "Mask";
let welcome_plate = `Welcome to the Stimulation ${first_name} ${last_name}`;
console.log(welcome_plate);
