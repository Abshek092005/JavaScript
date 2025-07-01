const n = 123; // allocates memory for a number
const s = "string"; // allocates memory for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
const a = [1, null, "str2"];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
// someElement.addEventListener(
//   "click",
//   () => {
//     someElement.style.backgroundColor = "blue";
//   },
//   false,
// );



// if you have to take out value that is present in object then we will call
// the value by conslog.log(o.a) o.a is important to call value that is present in object