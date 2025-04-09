// Generic function
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
let output2 = identity(123); // Type inference works too

// Generic interface
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "hello" };
const numberBox: Box<number> = { value: 42 };

// Generic classes
class Queue<T> {
  private data: T[] = [];
  
  push(item: T): void {
    this.data.push(item);
  }
  
  pop(): T | undefined {
    return this.data.shift();
  }
}

const numberQueue = new Queue<number>();
numberQueue.push(10);
numberQueue.push(20);
const item = numberQueue.pop(); // Type is number | undefined

// Generic constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("hello"); // OK
logLength([1, 2, 3]); // OK
// logLength(123); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'