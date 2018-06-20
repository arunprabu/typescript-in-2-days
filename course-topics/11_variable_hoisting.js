// What is variable hoisting?
// During parsing, JS Engine hoisting the variable declarations is known as variable hoiting.

/* 
console.log(y); //What will be the value of y?
var y = 20;
console.log(y);
*/

// only declarations will be hoisted. not the assignment. 
// so, the above code will be understood like the following by JS Engine

/*
var y; // declaration has been hoisted.
console.log(y);
y = 20; 
console.log(y); 
*/