//Enums are just restricted to hold numbers
// Enums usually prefered to have constants
enum myContactNumbers {
  personal = 2353453425,  // can hold just numbers
  official1 = 453452345, // can hold just numbers
  official2 = 453454, // can hold just numbers 
}

let personalNum = myContactNumbers.personal; // we can use it. but not reset
console.log(personalNum);

//another example
enum ErrorCode {
  INVALID_USERNAME =  1001,
  INVALID_PASSWORD =  1002,
  ACCOUNT_DISABLED // this will have the value 1003
}

console.log("Error Occured. " + ErrorCode.INVALID_USERNAME +  ": It seems you have entered invalid username");

console.log(ErrorCode.ACCOUNT_DISABLED);

