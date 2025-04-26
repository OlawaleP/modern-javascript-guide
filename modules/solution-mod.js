//Task 1

//Module Organization

//core maths operations

export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

//UI renderer

export function displayResult(result) {
  const resultElement = document.getElementById('result');
  if (resultElement) {
    resultElement.textContent = `Result: ${result}`;
  } else {
    console.log(`Result: ${result}`);
  }
}

export function displayHistory(history) {
  const historyElement = document.getElementById('history');
  if (historyElement) {
    historyElement.innerHTML = '<h3>Calculation History</h3><ul>' + history.map(item => `<li>${item}</li>`).join('') + '</ul>';
  } else {
    console.log('Calculation History:', history);
  }
}

// Storage

const HISTORY_KEY = 'calculator_history';

export function saveCalculator(expression, result) {
  try {
    const history = getCalculationHistory();
    history.push(`${expression} = ${result}`);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Error saving calculation:', error.message);
  }
}

export function getCalculationHistory() {
  try {
    const storedHistory = localStorage.getItem(HISTORY_KEY);
    return storedHistory ? JSON.parse(storedHistory) : [];
  } catch (error) {
    console.error('Error loading calculation history:', error.message);
    return [];
  }
}

export function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (error) {
    console.error('Error clearing message:', error.message);
  }
}

//Main

import * as MathOps from '/core/math.js';
import * as Renderer from '/ui/renderer.js';
import * as Storage from '/storage/storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const numberButtons = document.querySelectorAll('.number');
  const operatorButtons = document.querySelectorAll('.operator');
  const equalsButton = document.getElementById('equals');
  const clearButton = document.getElementById("clear");
  const clearHistoryButton = document.getElementById("clearHistory");
  const expressionInput = document.getElementById("expression");

  let currentExpression = '';

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentExpression += button.textContent;
      expressionInput.value = currentExpression;
    });
  });

  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentExpression = `${button.textContent} `;
      expressionInput.value = currentExpression
    });
  });

  equalsButton.addEventListener('click', () => {
    try {
      const result = eval(currentExpression);
      Renderer.displayResult(result);
      Storage.saveCalculator(currentExpression, result);
      Renderer.displayHistory(Storage.getCalculationHistory());
      currentExpression = '';
      expressionInput.value = '';
    } catch (error) {
      Renderer.displayResult('Error: Invalid Expression');
      console.error('Calculation Error:', error.message);
    }
  });

  clearButton.addEventListener('click', () => {
    currentExpression = '';
    expressionInput.value = '';
    Renderer.displayResult('');
  });

  clearHistoryButton.addEventListener('click', () => {
    Storage.clearHistory();
    Renderer.displayHistory([]);
  });

  Renderer.displayHistory(Storage.getCalculationHistory());
});


//Task 2 Module Patterns

//1. Default and named exports

//utils.js

export const VERSION = '1.0.0';

const logMessage = (message) => {
  console.log(`[INFO] ${message}`);
};

class Logger {
  log(message) {
    logMessage(message);
  }
}

export { logMessage, Logger };
export default new Logger();

//main_utils.js

import defaultLogger, { VERSION, logMessage, Logger as UtilLogger } from 'utils.js';

console.log('Utils Version', VERSION);
logMessage('This is a log.');
defaultLogger.log('This log is from the default export(Logger instance)');
const customLogger = new UtilLogger();
customLogger.log('This log is from a named export(Logger class).');

// 2. Singleton pattern

//singletonCounter.js
let counter = 0;

const increment = () => {
  counter++;
  return counter;
};

const decrement = () => {
  counter--;
  return counter;
};

const getCount = () => counter;

// should be export default
export {
  increment,
  decrement,
  getCount
};


//main_singleton.js

import counterModule from './singletonCounter.js';

console.log('Initial Count:', counterModule.getCount());
console.log('Increment 1:', counterModule.increment());
console.log("Increment 2:", counterModule.increment());

import anotherCounter from './singletonCounter.js';

console.log('Initial count from another import:', counterModule.getCount());
console.log('Decrement:', counterModule.decrement());


//3. Module Loader

//moduleloader.js

const loadModule = async (moduleName) => {
  try {
    switch (moduleName.toLowerCase()) {
      case 'math':
        return await import('./dynamic_modules/math_dynamic.js');
      case 'greeting':
        return await import('./dynamic_modules/greeting_dynamic.js');
      default:
        throw new Error(`Module "${moduleName}" not found.`);
    }
  } catch (error) {
    console.error('Error loading module:', error.message);
    return null;
  }
};

// export should be default
export loadModule;


// dynamic_modules/math_dynamic.js

export const addDynamic = (a, b) => a + b;
export const multiplyDynamic = (a, b) => a * b;

//dynamic_modules/greeting_dynamic.js

export const greet (name) => `Hello, ${name}`;

//main_dynamic.js

import moduleLoader from './moduleLoader.js';

async function run() {
  const mathModule = await moduleLoader('math');
  if (mathModule) {
    console.log('Math module loaded:', mathModule.addDynamic(10, 20));
  }

  const greetingModule = await moduleLoader('greeting');
  if (mathModule) {
    console.log('Greeting Module Loaded:', greetingModule.greet('Mohammed'));
  }

  const unknownModule = await moduleLoader('unknown');
  console.log('Unknown Module:', unknownModule);
}

run();