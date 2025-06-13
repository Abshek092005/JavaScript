let score = "33abc"
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//it is giving NaN(not a number)
//and in case of undefined it only give NaN
//but in case of null t gives 0 
//but if you are measuring temperature then consider it becasue 0 is a valid number in calculating temperature
//in case there is a boolean value so for true = 1 and false = 0 


//now let's check boolean conversion

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

//now as you can see after running it is giving true value that mean geniunily 1 means true and 0 means false
//and when we give string value if there is written something so it give true value otherwise false


let someNumber = false
let thissomeNumnber = String(someNumber)
console.log(thissomeNumnber);

//so all values can be converted into string and there is no condition