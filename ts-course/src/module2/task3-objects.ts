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

// somePoint.x = 200 // readonly не позволяет изменить свойство