const name = "Abhishek";
const backlog = 0;

//console.log(name + backlog + "value");
//now in 2025 we dont use this method because it is not suitable for reading it is taking taime to understand
// rather then we use below method 

console.log(`hello my name is ${name} and in my btech i have ${backlog} backlog`);

//we use this method insted of upper one  beacuse as you can see this more readable 
// this method name is string interpretetion
//output will be same but more easiy to understandable 

const gameName = new String("Shadow");
//it is a way to declare string 
console.log(gameName[0]);

//it is a way to access keyvalue that mean shadow is a 6 letter word 
//but in coding it starts with 0 not with 1 
// so at 0 -> s 1 -> h
//so this is keyvalue  so when we run this command it give us at 0 which letter is present 
// so it gives us s

//for accessing prototype 
console.log(gameName.__proto__);
//but when we access any prototype so we dont use __
// when we call method or property that doesn't exist os it js engine check it automatically

//for finding charcter at which place which number present so we use below command
console.log(gameName.charAt(5));
//for finding number at which number which character is present so we use below command 
console.log(gameName.indexOf('h'));
 
//there are many methods or prototype that we can use and modify the string in various type 
//like .touppercase, .slice , .subtract , .trim , .split and etc 

//and last use this syntax console.log(`hello my name is ${name} and in my btech i have ${backlog} backlog`); 
//rather then + , and etc because it make code more readable or beautiful
