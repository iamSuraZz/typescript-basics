// Primitives : number, string, boolean
// More comples types : arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12.2;

let userName: string;
userName = "Suraj";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];
let val: number[];

hobbies = ["Sports", "Cooking"];
val = [1];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Ram",
  age: 20,
};

// not correct

// person = {
// isEmployee : true   // person accepts only string and number
// }

// below accpts array of values having string and number
let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React - The Complete Guide";

// course = 124;
