// JavaScript Modules

// Exporting
// math.js - Named exports
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Or export multiple items at once
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
export { subtract, divide };

// Default export
export default class Calculator {
  constructor() {
    this.value = 0;
  }
  
  add(n) {
    this.value += n;
    return this;
  }
  
  subtract(n) {
    this.value -= n;
    return this;
  }
  
  getResult() {
    return this.value;
  }
}

// IMPORTING

// Import named exports
import { PI, add, multiply } from './math.js';
console.log(PI); // 3.14159
console.log(add(5, 3)); // 8

// Import with alias
import { add as sum } from './math.js';
console.log(sum(5, 3)); // 8

// Import default export
import Calculator from './math.js';
const calc = new Calculator();
console.log(calc.add(5).subtract(2).getResult()); // 3

// Import default and named exports
import Calculator, { PI, add } from './math.js';

// Import all exports as a namespace
import * as MathUtils from './math.js';
console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(1, 2)); // 3

// DYNAMIC IMPORTS

// Load a module dynamically
async function loadModule() {
  try {
    const mathModule = await import('./math.js');
    console.log(mathModule.add(5, 3)); // 8
    return new mathModule.default(); // Create a Calculator instance
  } catch (error) {
    console.error('Failed to load module:', error);
  }
}