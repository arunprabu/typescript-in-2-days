// Let keyword helps us create variables in TS. 
let x = 10;
console.log("x is " + x);

//Let's learn about const keyword
const PI = 3.14;
console.log(PI);
//PI = 4; // Error - Cannot assign to 'PI' as it is a const


//Let's have a function to understand more about let keyword.
// let has block level scoping

function test(){
  //console.log(x);  // Why Error? It's because you can't use a variable before it is declared.
  // if we have one more variable in the same name 'x'...
  let x = 1000;
  console.log(x);
}
test();
