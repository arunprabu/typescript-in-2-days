// What if we have a really complex object with so many diff property types?
//example:
let exampleObj: { name: string, zipcode: number, skills: string[], hasExperience: boolean } = {
  name: "Arun",
  zipcode: 600041,
  skills: ["Angular", "Node"],
  hasExperience: true
}
// the skeleton/ blueprint is complex. if we want the same skeleton in another variable, we need to copy, paste it.
// So lets rewrite it here using type alias or custom data types

//use type keyword to create custom types
type MyObjType = { name: string, zipcode: number, skills: string[], hasExperience: boolean }; 

let exampleObj1: MyObjType = {
  name: "Arun",
  zipcode: 600041,
  skills: ["Angular", "Node"],
  hasExperience: true
}
