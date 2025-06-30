//primitive
// 7 types : strings, num, boolean, null, undefined, symbol, BigInt
// symbol = to make a varibale unique

//javascript is a dynamically type language

let emailId;
emailId = "at455724@gmail.com";
console.log(typeof (emailId));

//example of symbol
const id = Symbol(123);
const anotherid = Symbol(123);
console.log(id === anotherid);
console.log(id);

//Reference (Non Primitive)
// Array Objects Fuctions


const heroes = ["Iron man" , "Captain america", "Hulk"]
let myObj = {
    name:  "Abhishek",
    age: 19,
}
console.log(myObj);

const myFunction = function(){
    console.log("Hello world");
}


//when we check the data type of non primitive datatypes it always give function expect function 
//for function it give function object