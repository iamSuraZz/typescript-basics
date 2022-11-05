export {};
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

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Ram",
  age: 20,
};

// not correct

// person = {
// isEmployee : true   // person accepts only string and number
// }

// below accpts array of values having string and number
let people: Person[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 124;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
stringArray[0].split("");
