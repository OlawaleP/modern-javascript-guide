// ARROW FUNCTIONS

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Arrow function with body
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// DESTRUCTURING

// Object destructuring
const person = { name: 'Alice', age: 30, job: 'Developer' };
const { name, age } = person;
console.log(name, age); // Alice 30

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second] = colors;
console.log(first, second); // red green

// With rest operator
const [primary, ...secondaryColors] = colors;
console.log(secondaryColors); // ['green', 'blue']

// SPREAD OPERATOR

// Array spreading
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Object spreading
const defaults = { theme: 'dark', fontSize: 16 };
const userPrefs = { fontSize: 18 };
const settings = { ...defaults, ...userPrefs };
console.log(settings); // { theme: 'dark', fontSize: 18 }


// TEMPLATE LITERAL

const user = 'Jane';
const greeting = `Hello, ${user}!`;
console.log(greeting); // Hello, Jane!

// Multiline strings
const message = `
  This is a multiline
  string that preserves
  whitespace and newlines.
`;

// DEFAULT PARAMETERS

function greet(name = 'Guest', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

console.log(greet()); // Hello, Guest!
console.log(greet('Alice')); // Hello, Alice!
console.log(greet('Bob', 'Hi')); // Hi, Bob!

// CLASSES

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }

  // Static method
  static createAnonymous() {
    return new Person('Anonymous', 0);
  }
}

const alice = new Person('Alice', 25);
console.log(alice.greet()); // Hello, my name is Alice