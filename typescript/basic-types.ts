// Primitive types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";

// Arrays
let list: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

// Tuple
let person: [string, number] = ["Alice", 30];

// Enum
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

// Any - use sparingly
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Void
function logMessage(msg: string): void {
  console.log(msg);
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Unknown - safer than any
let userInput: unknown;
userInput = 5;
userInput = "hello";

// Type assertions
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;