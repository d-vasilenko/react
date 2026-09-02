// 1
 function identity<T>(value: T): T {
  return value;
 }

 console.log(identity('string'));
 console.log(identity<number>(43));

 // 2
 function getLength<T extends { length: number }>(value: T): number {
  return value.length;
 }

 console.log(getLength('denis'));
 console.log(getLength([2, 4, 3]));

// 3
function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

console.log(swap(20, 'denis'));
console.log(swap(20, 10));
console.log(swap('some', 'text'));


// 4
interface Box<T> {
  value: T;
}

const someBox01: Box<number> = {
  value: 49,
}

const someBox02: Box<string> = {
  value: 'some text',
} 

console.log(someBox01);
console.log(someBox02)

// 5
function merge<T, U>(a: T, b: U): T & U {
  return {
    ...a,
    ...b,
  }
}

console.log(merge({name: 'denis'}, {age: 43}));

// 6
interface ApiResponse<T> {
  data: T;
  status: number;
}

const someInterface: ApiResponse<{ name: string }> = {
  data: { name: 'some text'},
  status: 200,
}

console.log(someInterface);

// 7
class Stack<T> {
  private data: T[] = [];
  push(item: T): void {
    this.data.push(item);
  };
  pop(): T | undefined {
    return this.data.pop();
  }
} 

const someClass = new Stack<number>();

console.log(someClass);



export {}