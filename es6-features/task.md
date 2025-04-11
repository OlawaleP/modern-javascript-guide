Task 1: Arrow Functions

Convert all regular functions in this snippet to arrow functions where appropriate:

javascriptfunction calculateArea(radius) {
  return Math.PI * radius * radius;
}

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

function displayResult(area, circumference) {
  console.log(`Area: ${area.toFixed(2)}, Circumference: ${circumference.toFixed(2)}`);
}

function processCircle(radius) {
  const area = calculateArea(radius);
  const circumference = calculateCircumference(radius);
  displayResult(area, circumference);
}

Create a higher-order function that takes a transformation function as an argument and applies it to each element of an array. Use arrow functions.

Task 2: Destructuring

Extract relevant data from this API response using destructuring:

javascriptconst response = {
  status: 200,
  data: {
    user: {
      id: 123,
      name: 'Sarah Connor',
      contact: {
        email: 'sarah@example.com',
        phone: '555-123-4567'
      },
      preferences: {
        theme: 'dark',
        notifications: true
      }
    },
    posts: [
      { id: 1, title: 'Hello World', comments: 5 },
      { id: 2, title: 'JavaScript Tips', comments: 10 },
      { id: 3, title: 'ES6 Features', comments: 15 }
    ]
  }
};

Use array destructuring to swap two variables without using a temporary variable.
Create a function that accepts an object and uses parameter destructuring with default values.

Task 3: Spread and Rest Operators

Create a function that accepts any number of arguments and returns their sum using the rest operator.
Write a function that merges multiple objects with deep cloning using the spread operator.
Create a utility function that removes specific items from an array and returns a new array using spread.

Task 4: Template Literals

Create a multiline HTML template using template literals that includes:

Dynamic content
Conditional expressions
Nested templates


Write a tagged template function that formats currency values in a template.