// Objects - Implicit type
let profile = {
  name: "Arun",
  role: "Trainer",
  skills: "Angular"
};

//profile = "Test"; // Error - as type has been set implicitly as Object

// profile = {
//   exp: 12 // Error - only known properties can be set values
// };

// profile.exp = "12"; // Error - only known properties can be set values

profile.skills = "Angular, NodeJS"; // Will work
// console.log(profile);

// Now Let's create object with type explicitly
let profile1: {} = {
  name: "Ronaldo",
  role: "forward"
}
console.log(profile1);

// leaving it empty without any properties set will throw an error. so the properties with values should be assigned.
/*
let profile2: { name: string , exp: number } = { 

} */

//The following will work as it has properties as per the blueprint
/*
let profile3: { name: string, exp: number } = { 
  name: "Arun",
  exp: 12
} */

