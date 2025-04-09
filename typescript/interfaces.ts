// Basic interface
interface User {
  id: number;
  name: string;
  email: string;
  active?: boolean; // Optional property
  readonly createdAt: Date; // Read-only property
}

// Using an interface
const newUser: User = {
  id: 1,
  name: "Alice Smith",
  email: "alice@example.com",
  createdAt: new Date()
};

// Function interfaces
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (a, b) => a + b;
const subtract: MathFunc = (a, b) => a - b;

// Class interfaces
interface Drawable {
  draw(): void;
  resize(width: number, height: number): void;
}

class Circle implements Drawable {
  constructor(private radius: number) {}
  
  draw(): void {
    console.log(`Drawing a circle with radius ${this.radius}`);
  }
  
  resize(width: number, height: number): void {
    this.radius = Math.min(width, height) / 2;
  }
}

// Extending interfaces
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
  department: string;
}

const employee: Employee = {
  name: "John",
  age: 30,
  employeeId: "EMP123",
  department: "Engineering"
};

// Type Aliases

// Type alias
type Point = {
  x: number;
  y: number;
};

// Union types
type ID = string | number;

let userId: ID = 123;
userId = "ABC-123"; // Also valid

// Intersection types
type Colorful = {
  color: string;
};

type Circle = {
  radius: number;
};

type ColorfulCircle = Colorful & Circle;

const redCircle: ColorfulCircle = {
  color: "red",
  radius: 10
};

// Function type
type Callback = (error: Error | null, data: any) => void;

// Literal types
type Direction = "north" | "south" | "east" | "west";
let heading: Direction = "north";
// heading = "northeast"; // Error: Type '"northeast"' is not assignable to type 'Direction'.