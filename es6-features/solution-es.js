// Task 1

// 1 Arrows Functions

const calculateArea = (radius) => Math.PI * radius * radius;

const calculateCircumference = (radius) => 2 * Math.PI * radius;

const displayResult = (area, circumference) => {
  console.log(
    `Area: ${area.toFixed(2)}, Circumference: ${circumference.toFixed(2)}`
  );
};

const processCircle = (radius) => {
  const area = calculateArea(radius);
  const circumference = calculateCircumference(radius);
};

// 2 Higher order function

const transformArray = (arr, transformation) => arr.map(transformation);

// Task 2

//1 Destructuring

const {
  status,
  data: {
    user: {
      id: userId,
      name: userName,
      contact: { email, phone },
      preferences: { theme },
    },
    posts,
  },
} = response;

console.log("Status:", status);
console.log("User ID:", userId);
console.log("User name:", userName);
console.log("Email: ", email);
console.log("Phone: ", phone);
console.log("Theme: ", theme);
console.log("Posts: ", posts);

// 2 swapping variables

let a = 10;
let b = 20;
console.log("Before Swap:", a, b);
[a, b] = [b, a];
console.log("After Swap:", a, b);

// 3 function that accepts an object

const greetUser = ({ name = "Guest", greeting = "Hello" }) => {
  console.log(`${greeting}, ${name}!`);
};

greetUser({});
greetUser({ name: "Jaylen" });
greetUser({ greeting: "Hi", name: "Tasha" });

//Task 3

// 1 Spread and Rest Operators

const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));
console.log(sumAll());

// 2 Function that merges multiple objects

const deepMerge = (...objects) => {
  return objects.reduce((merged, obj) => {
    const copy = {};
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        copy[key] = Array.isArray(obj[key])
          ? [...obj[key]]
          : deepMerge(obj[key]);
      } else {
        copy[key] = obj[key];
      }
    }
    return { ...merged, ...copy };
  }, {});
};

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
const mergedObj = deepMerge(obj1, obj2);
console.log("Merged Object:", mergedObj);
obj2.b.d = 10;
console.log("Merged Object after obj2 change: ", mergedObj);

// 3 Utility Function

const removeItems = (arr, ...itemsToRemove) =>
  arr.filter((item) => !itemsToRemove.includes(item));

const originalArray = [1, 2, 3, 4, 5, 3];
const newArray = removeItems(originalArray, 2, 3);
console.log("Original Array:", originalArray);
console.log("New Array:", newArray);

// Task 4

// 1 Template Literals : Miltiline HTML template

const product = {
  name: "Laptop",
  price: 1200,
  instock: true,
  features: ["High Performance", "Long Battery Life"],
};

const generateFeatureList = (features) => `
  <ul>
  ${features.map((feature) => `<li>${feature}</li>`).join("")}
  </ul>
`;

const htmlTemplate = `
  <div class="product-card">
    <h3>${product.name}</h3>
    <p class="price">$${product.price.toFixed(2)}</p>
    ${
      product.instock
        ? '<span class="in-stock">In Stock</span>'
        : '<span class="out-of-stock">Out of Stock</span>'
    }
    <h4>Features:</h4>
    ${
      product.features.length > 0
        ? generateFeatureList(product.features)
        : "<p>No features listed.</p>"
    }
  </div>
`;

console.log(htmlTemplate);

// 2 Tagged Template Function

const formatCurrency = (strings, ...values) => {
  return strings.reduce((result, str, i) => {
    if (i < values.length && typeof values[i] === "number") {
      return result + str + `$${values[i].toFixed(2)}`;
    } else if ((i, values.length)) {
      return result + str + values[i];
    } else {
      return result + str;
    }
  }, "");
};

const itemName = "Book";
const itemPrice = 49.99;
const discount = 0.1;
const discountedPrice = itemPrice * (1 - discount);

const messageWithCurrency = formatCurrency`The price of the ${itemName} is ${itemPrice}, and the discounted price is ${discountedPrice}.`;
console.log(messageWithCurrency);
