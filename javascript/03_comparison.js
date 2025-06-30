console.log(null == 0);
console.log(null > 0);
console.log(null <= 0);


//here is the main reson is equality check and comparison check works differently
//comparison convert null to a number treating it as 0 
//that's why null <= 0 true and null > 0 false

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

//for undefined it gives false always
// so avoid these type of conversions because it make code more complex

console.log("2" === 2);
console.log(2 === 2);
//as we can see it give us false because it is strict check in this it compare datatypes also 
//that's why it is giving false if we remove double coln to first 2 then it give us true
