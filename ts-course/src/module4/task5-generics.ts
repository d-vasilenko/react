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

 export {}