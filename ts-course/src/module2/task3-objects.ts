// 1
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const me: User = {
  id: 109,
  name: 'Denis',
  email: 'ghostinchip@gmail.com',
  isActive: true,
}

console.log(me);

// 2
interface Product {
  title: string;
  price: number;
  inStock: boolean;
  description?: string;
}

const prod1: Product = {
  title: 'Product one',
  price: 1000,
  inStock: false,
}

const prod2: Product = {
  title: 'Product two',
  price: 300,
  inStock: true,
  description: 'some description',
}

console.log(prod1);
console.log(prod2);

// 3
interface Point {
  readonly x: number;
  readonly y: number;
}

const somePoint: Point = {
  x: 200,
  y: 121,
}
console.log(somePoint);
// somePoint.x = 200 // readonly не позволяет изменить свойство

// 4
interface Dictionary {
  [key: string]: string;
}
const somdeDict: Dictionary = {
  en: 'Hello',
  re: 'Привет',
}

console.log(somdeDict);

// 5
interface Config {
  apiUrl: string;
  timeout?: number;
}

const obj1: Config = { apiUrl:'some url' };
const obj2: Config = { apiUrl: 'another url', timeout: 100 };

console.log(obj1);
console.log(obj2);

// 6
const createUser = (user: User): string => `Welcome, ${user.name}`;
console.log(createUser(me));

// 7
interface Employee extends User {
  department: string;
}
const myInfo: Employee = {
  id: 109,
  name: 'Denis',
  email: 'ghostinchip@gmail.com',
  isActive: true,
  department: 'dev',
}

console.log(myInfo);

// 8
// type BinaryOperation = (a: number, b: number) => number; в задании было через интерфейс
interface BinaryOperation  { 
  (a: number, b: number): number 
};
const sum: BinaryOperation = (a, b) => a + b;
console.log(sum(1, 4)); 

// 9
const someObj = {
  one: 1,
  two: 2,
  three: 3,
}

function countKey(obj: Record<string, unknown>): number {
  return Object.keys(obj).length;
}
console.log(countKey(someObj)); // myInfo ругаеться на то что Employee не имеет параметров типа Record<string, unknown

// 10
interface NumberArray {
  [index: number]: number;
}

const someArray: NumberArray = [1, 4, 5, 6, 5];
console.log(someArray);
