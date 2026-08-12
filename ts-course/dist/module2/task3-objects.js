"use strict";
const me = {
    id: 109,
    name: 'Denis',
    email: 'ghostinchip@gmail.com',
    isActive: true,
};
console.log(me);
const prod1 = {
    title: 'Product one',
    price: 1000,
    inStock: false,
};
const prod2 = {
    title: 'Product two',
    price: 300,
    inStock: true,
    description: 'some description',
};
console.log(prod1);
console.log(prod2);
const somePoint = {
    x: 200,
    y: 121,
};
console.log(somePoint);
const somdeDict = {
    en: 'Hello',
    re: 'Привет',
};
console.log(somdeDict);
const obj1 = { apiUrl: 'some url' };
const obj2 = { apiUrl: 'another url', timeout: 100 };
console.log(obj1);
console.log(obj2);
// 6
const createUser = (user) => `Welcome, ${user.name}`;
console.log(createUser(me));
const myInfo = {
    id: 109,
    name: 'Denis',
    email: 'ghostinchip@gmail.com',
    isActive: true,
    department: 'dev',
};
console.log(myInfo);
const sum = (a, b) => a + b;
console.log(sum(1, 4));
