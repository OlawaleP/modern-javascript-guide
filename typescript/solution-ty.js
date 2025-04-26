// Task 1: Basic Types

// Declare variables with appropriate TypeScript types for the following:

//1: A user's profile information
const userProfile: {
  userId: number;
  username: string;
  email: string;
  isActive: boolean;
  lastLogin?: Date;
} = {
  userId: 123,
  username: "coder123",
  email: "coder@gmail.com",
  isActive: true,
};

//2: A shopping cart
const shoppingCart: {
  items: { productId: number; quantity: number }[];
  totalPrice: number;
} = {
  items: [
    { productId: 1, quantity: 2 },
    { productId: 3, quantity: 1 },
  ],
  totalPrice: 55.98,
};

//3: A configuration object
const config: {
  apiUrl: string;
  timeout: number;
  theme: "light" | "dark";
  features: string[];
} = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  theme: "light",
  features: ["auth", "logging"],
};

//4: A callback function
type DataCallback = (error: Error | null, data: string[]) => void;

const processData: DataCallback = (err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Data:", data);
  }
};

//5: Create a function with typed parameters and return value.
function calculateTax(price: number, taxRate: number): number {
  const taxAmount = price * taxRate;
  return price + taxAmount;
}

const finalPrice = calculateTax(100, 0.08);
console.log("Final Price:", finalPrice);

// Task 2: Interfaces

// Create interfaces for a blog application with:

interface BlogUser {
  userId: number;
  username: string;
  email: string;
  registrationDate: Date;
}

interface Post {
  postId: number;
  title: string;
  content: string;
  author: BlogUser;
  createdAt: Date;
  updatedAt?: Date;
  comments: Comment[];
}

interface Comment {
  commentId: number;
  text: string;
  author: BlogUser;
  postId: number;
  createdAt: Date;
}

// Implement classes that use these interfaces.
class BlogPost implements Post {
  postId: number;
  title: string;
  content: string;
  author: BlogUser;
  createdAt: Date;
  updatedAt?: Date | undefined;
  comments: Comment[] = [];

  constructor(
    postId: number,
    title: string,
    content: string,
    author: BlogUser,
    createdAt: Date
  ) {
    this.postId = postId;
    this.title = title;
    this.content = content;
    this.author = author;
    this.createdAt = createdAt;
  }

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }
}

class BlogComment implements Comment {
  commentId: number;
  text: string;
  author: BlogUser;
  postId: number;
  createdAt: Date;

  constructor(
    commentId: number,
    text: string,
    author: BlogUser,
    postId: number,
    createdAt: Date
  ) {
    this.commentId = commentId;
    this.text = text;
    this.author = author;
    this.postId = postId;
    this.createdAt = createdAt;
  }
}

const blogUser: BlogUser = {
  userId: 1,
  username: "blogger",
  email: "blog@example.com",
  registrationDate: new Date(),
};

const firstPost = new BlogPost(
  101,
  "My First Post",
  "This is the content.",
  blogUser,
  new Date()
);
const firstComment = new BlogComment(
  1,
  "Great post!",
  blogUser,
  101,
  new Date()
);
firstPost.addComment(firstComment);
console.log("First Post:", firstPost);

// Create function interfaces for event handlers.
interface ClickHandler {
  (event: MouseEvent): void;
}

const handleClick: ClickHandler = (event) => {
  console.log("Clicked at:", event.clientX, event.clientY);
};

interface ChangeHandler {
  (event: Event): void;
}

const handleChange: ChangeHandler = (event) => {
  console.log("Input changed:", (event.target as HTMLInputElement).value);
};

// Task 3: Generics

// Create a generic Stack class with push, pop, and peek methods.
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }
}

const stringStack = new Stack<string>();
stringStack.push("apple");
stringStack.push("banana");
console.log("String Stack Peek:", stringStack.peek());
console.log("String Stack Pop:", stringStack.pop());
console.log("String Stack Size:", stringStack.size);

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log("Number Stack Peek:", numberStack.peek());

//1: Implement a generic function that filters an array based on a predicate function.
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
  const filteredArray: T[] = [];
  for (const item of array) {
    if (predicate(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
}

const numbersToFilter = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbersToFilter, (num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

const stringsToFilter = ["apple", "banana", "cherry", "date"];
const longStrings = filterArray(stringsToFilter, (str) => str.length > 5);
console.log("Long Strings:", longStrings);

//2: Create a generic memoization function that caches results.
function memoize<T extends (...args: any[]) => any>(func: T): T {
  const cache = new Map<string, ReturnType<T>>();

  return function (...args: any[]): ReturnType<T> {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  } as T;
}

function expensiveOperation(n: number): number {
  console.log("Performing expensive operation for:", n);
  return n * n;
}

const memoizedOperation = memoize(expensiveOperation);
console.log("Memoized Operation 1:", memoizedOperation(5));
console.log("Memoized Operation 2:", memoizedOperation(5));
console.log("Memoized Operation 3:", memoizedOperation(10));

// Task 4: Type Guards

// Implement type guards using:

//1: typeof
function processValue(val: string | number) {
  if (typeof val === "string") {
    console.log("Value is a string:", val.toUpperCase());
  } else if (typeof val === "number") {
    console.log("Value is a number:", val * 2);
  } else {
    console.log("Unknown value type:", val);
  }
}

processValue("hello");
processValue(42);
processValue(true as any);

//2: instanceof
class Bird {
  fly() {
    console.log("Bird is flying");
  }
}

class Fish {
  swim() {
    console.log("Fish is swimming");
  }
}

function moveAnimal(animal: Bird | Fish) {
  if (animal instanceof Bird) {
    animal.fly();
  } else if (animal instanceof Fish) {
    animal.swim();
  }
}

moveAnimal(new Bird());
moveAnimal(new Fish());

//3: in operator
interface Car {
  make: string;
  model: string;
}

interface Boat {
  name: string;
  length: number;
}

function logVehicleDetails(vehicle: Car | Boat) {
  if ("make" in vehicle) {
    console.log("Vehicle is a car:", vehicle.make, vehicle.model);
  } else if ("name" in vehicle) {
    console.log("Vehicle is a boat:", vehicle.name, vehicle.length);
  }
}

logVehicleDetails({ make: "Toyota", model: "Camry" });
logVehicleDetails({ name: "Sailboat", length: 25 });

//4: Custom type predicates
interface CircleWithArea {
  kind: "circle";
  radius: number;
  area: number;
}

interface SquareWithArea {
  kind: "square";
  side: number;
  area: number;
}

type ShapeWithArea = CircleWithArea | SquareWithArea;

function isCircle(shape: ShapeWithArea): shape is CircleWithArea {
  return shape.kind === "circle";
}

function logShapeArea(shape: ShapeWithArea) {
  if (isCircle(shape)) {
    console.log("Circle area:", shape.area);
    console.log("Circle radius:", shape.radius);
  } else {
    console.log("Square area:", shape.area);
    console.log("Square side:", shape.side);
  }
}

const myCircle: CircleWithArea = {
  kind: "circle",
  radius: 5,
  area: Math.PI * 25,
};
const mySquare: SquareWithArea = { kind: "square", side: 4, area: 16 };

logShapeArea(myCircle);
logShapeArea(mySquare);

//5: Create a function that safely processes different types of input.
function safelyProcessInput(
  input: string | number | boolean | null | undefined
) {
  if (typeof input === "string") {
    console.log("Processing string:", input.toUpperCase());
  } else if (typeof input === "number") {
    console.log("Processing number:", input * 10);
  } else if (typeof input === "boolean") {
    console.log("Processing boolean:", !input);
  } else if (input === null) {
    console.log("Input is null");
  } else if (input === undefined) {
    console.log("Input is undefined");
  } else {
    console.log("Unknown input type:", input);
  }
}

safelyProcessInput("typescript");
safelyProcessInput(100);
safelyProcessInput(true);
safelyProcessInput(null);
safelyProcessInput(undefined);
safelyProcessInput({});
