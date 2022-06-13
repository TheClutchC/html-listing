/*
console.log("Hello World");
console.log("Hola Terra!");
const Max="57";
let actual;
actual=Max-13;
let percentage;
percentage=actual/Max;
console.log(percentage);
let message;
message="hello";
message=123456;
console.log(message);
let n=123;
n=12.345;
console.log(n);
const bigInt = 1234567890123456789012345678901234567890n;
phrase=`can embed another ${1+2}!`;
let isGreater=4>1;
typeof x;
const string='The revolution will not be televised.';
console.log(string);
const badString=string;
console.log(badString);
const bigMouth='I\'ve got no right to take my place...';
console.log(bigMouth);
const name= 'Chris';
const greeting= `Hello, ${"name"}`;
console.log(greeting);
const one='Hello, ';
const two='how are you?';
const joined=`${one}${two}`;
console.log(joined);
const three='Hola, ';
const four='como estas?';
const together=`${three}${four}${" Here is Johnny"}`;
console.log(together);
let result=5>4;
*/

/*
function multiply(a,b) {
    if (a >10 || b>10) {
        return "that's too hard";
    }
    else {
        return a*b;
    }
}
*/


/*----------Addition Calculator---------*/


/*
var first=prompt("enter first number");
var second=prompt("enter second number");
var sum=Number(first) + Number(second);
alert("The sum is: " + sum + "!");
if (sum=69) {
    alert("Hehehe.....69");
}
*/


/*----------Name Collector-------------*/


/*
var firstName=prompt("First Name");
var lastName=prompt("Last Name");
var sum= firstName + " " + lastName;
alert("Hiya there " + sum + "!");
if (firstName === "Billy") {
    alert("Bye Bye Billy!");
}
if (!(firstName === "Billy")) {
    alert("You're not Billy!");
}
*/


/*----------Subtraction Calculator-----*/


/*
var first=prompt("enter first number");
var second=prompt("enter second number");
var sum=Number(first) - Number(second);
alert("The sum is: " + sum + "!");
if (sum=69) {
    alert("Hehehe.....69");
}
*/


/*----------Multiplication Calculator--*/


/*
var first=prompt("enter first number");
var second=prompt("enter second number");
var sum=Number(first) * Number(second);
alert("The sum is: " + sum + "!");
if (sum=69) {
    alert("Hehehe.....69");
}
*/


/*----------Division Calculator--------*/


/*
var first=prompt("enter first number");
var second=prompt("enter second number");
var sum=Number(first) / Number(second);
alert("The sum is: " + sum + "!");
if (sum=69) {
    alert("Hehehe.....69");
}
*/


/*----------Keyless Car--------------*/


/*
var age=prompt("Please enter your age");

if (age>"18") {
    alert("Powering On. Enjoy the ride!");
}

if (age==="18") {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}

if (age<"18") {
    alert("Sorry, you are too young to drive this car. Powering off!");
}
*/


/*----------Keyless Car 2.0----------*/


/*
    var age = prompt("What is your age?");
    console.log(Number(age))
    if (Number(age) < 18) {
	    alert("Sorry, you are too young to drive this car. Powering off");
    } 
    if (isNaN(age)) {
	    alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if (Number(age) > 18) {
	    alert("Powering On. Enjoy the ride!");
    } 
    else if (Number(age) === 18) {
	    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
*/


/*----------Keyless Car 2.1----------*/


/*
var checkDriverAge2 = function() {
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
	    alert("Sorry, you are too young to drive this car. Powering off");
    } 
    else if (Number(age) > 18) {
	    alert("Powering On. Enjoy the ride!");
    } 
    else if (Number(age) === 18) {
	    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
*/


/*----------Keyless Car 2.2----------*/


/*
function checkDriverAge(age) {
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
	    alert("Sorry, you are too young to drive this car. Powering off");
    } 
    else if (Number(age) > 18) {
	    alert("Powering On. Enjoy the ride!");
    } 
    else if (Number(age) === 18) {
	    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
*/


/*------------Arrays Practice--------*/


/*
var array= ["Banana","Apple","Orange","Blueberry"]
*/

/*
let user={
    name:"John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
};

let list=["blue", "green", "yellow", "pink"];
*/


/*------------Build a Simple Facebook---------*/

/*
let database=[
    {
        username:"clay",
        password:"supersecret"
    }
];

let newsFeed=[
    {
        username:"Bobby",
        timeline:"So tired from all that learning!"
    },
    {
        username:"Sally",
        timeline:"Javascript is sooooo cool!"
    }
]

let userNamePrompt=prompt("What's your username?");
let passwordPrompt=prompt("What's your password?");

function signIn(user,pass) {
    if(user===database[0].username && pass===database[0].password) {
        console.log(newsFeed);
    } else{
        alert("Sorry, wrong username and password");
    }
}

signIn(userNamePrompt,passwordPrompt);
*/

/*
//function declaration
function newFunction() {

}

//function expression
let newFunction= function nameFunction() {

};

//expression
1+3;
var a=2;
return true;

//calling or invoking a function
alert()
newFunction(param1,param2)

//assign a variable
let a=true;

//function vs method
function thisIsAFunction() {

}

let obj= {
    thisIsAMethod: function() {

    }
}

thisIsAFunction()
obj.thisIsAMethod()
*/

// let todos= [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy",
// ];


// let todosLength=todos.length
// for (let i=0; i<todosLength; i++) {
//     console.log(i);
    //console.log(todos[i] + "!");    /*This adds ! to todos list */
    //todos[i]=todos[i] + "!";    /*This now tells it to equal, i.e., i=0("clean room") and add an exclamation point(!) to the end of it. And to repeat this for all available list items */
    //todos.pop();
//}

//  let counterOne=10;
//  while (counterOne>10) {
//      console.log("while", counterOne);
//    counterOne--;
//  }                               //This is a while loop

// let counterTwo=10
// do {
//     console.log("do while", counterTwo);
//     counterTwo--;
// } while (counterTwo>10);         //This is a do while loop

// todos.forEach(function(i) {
//     console.log(i);
// })                                  //This a forEach loop

// let button=document.getElementById("enter");
// let input=document.getElementById("userinput");
// let ul=document.querySelector("ul");

// button.addEventListener("click", function() {
//     if (input.value.length>0) { 
//         console.log(input);
//         let li=document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value="EWWWW...";
//     }
// })

// input.addEventListener("keypress", function() {
//     if (input.value.length>0 && event.keyCode===13) { 
//         console.log(input.value);
//         let li=document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value="";
//     }
// })


function fizzBuzz(n) {
    if(n.length==undefined && Number.isInteger(n)){
        if(n%3===0 && n%5===0){
            console.log("fizzbuzz")
        } else if(n%3===0){
            console.log("fizz")
        } else if(n%5===0){
            console.log("buzz")
        } else{
            console.log(n)
        }
    } else if(n.length>=1 && Array.isArray(n)){
        console.log("I am here")
        n.forEach(item => {
            if(Number.isInteger(item)){
                if(item%3===0 && item%5===0){
                    console.log("fizzbuzz")
                } else if(item%3===0){
                    console.log("fizz")
                } else if(item%5===0){
                    console.log("buzz")
                } else{
                    console.log(item)
                }
            }
        });
        console.log("I am an array and a number!")
    } else{ 
       console.log("Sorry, input must be a number.")
   }
}


// let array=[1,2,3,4,5]
// for (i=array.length; i<=100; i++) {
//     if (i%15 === 0) {
//     console.log ("FizzBuzz");
// }       
//     else if (i%3 === 0) {
//     console.log ("Fizz"); 
// }
//     else if (i%5 === 0) {
//     console.log("Buzz");
// }
            
//     else {
//     console.log(i);
// }};   
