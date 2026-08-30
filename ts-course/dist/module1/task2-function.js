"use strict";
// 1. add(a: number, b: number): number – возвращает сумму a и b
function add(a, b) {
    return a + b;
}
// 2. multiply(a: number, b: number): number – возвращает произведение
function multiply(a, b) {
    return a * b;
}
// 3. greet(name: string, age: number): string – возвращает "Hello, name! You are age years old."
function greet(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}
// 4. isEven(num: number): boolean – возвращает true, если число чётное
const isEven = (num) => num % 2 === 0;
// 5. getLength(str: string): number – возвращает длину строки
const getLength = (str) => str.length;
// 6. toUpperCase(str: string): string – возвращает строку в верхнем регистре
const toUpperCase = (str) => {
    return str.toUpperCase();
};
// 7. printArray(arr: number[]): void – выводит каждый элемент массива в консоль
const pringArray = (arr) => {
    arr.forEach((item) => console.log(item));
};
// 8. sumAll(...numbers: number[]): number – возвращает сумму всех переданных чисел
function sumAll(...numbers) {
    return numbers.reduce((acc, item) => acc + item, 0);
}
// 9. greetWithDefault(name: string, greeting?: string): string
//    Если greeting не передан, используйте "Hello", иначе используйте переданное приветствие.
//    Пример: greetWithDefault("Alice") → "Hello, Alice!"
//            greetWithDefault("Bob", "Hi") → "Hi, Bob!"
const greetWithDefault = (name, greeting) => {
    if (!greeting) {
        return `Hello, ${name}`;
    }
    return `${greeting}, ${name}`;
};
// 10. applyOperation(a: number, b: number, op: (x: number, y: number) => number): number
//     Применяет переданную операцию к a и b
function applyOperation(a, b, op) {
    return op(a, b);
}
// 11. createCounter(): () => number – возвращает функцию, которая при каждом вызове увеличивает счётчик на 1 и возвращает новое значение.
const createCounter = () => {
    let count = 0;
    return () => {
        count += 1;
        return count;
    };
};
function overloadedFunction(value) {
    if (typeof value === 'string')
        return value.length;
    if (typeof value === 'number')
        return value * value;
    if (typeof value === 'boolean')
        return !value;
}
// После каждой функции напишите пример её вызова и вывод результата в консоль (с пояснением).
console.log(add(5, 20));
console.log(multiply(3, 9));
console.log(greet('Denis', 44));
console.log(isEven(4));
console.log(getLength('Vasilenko'));
console.log(toUpperCase('some string'));
pringArray([2, 3, 4, 5, 6]);
console.log(sumAll(1, 3, 4, 5));
console.log(greetWithDefault('Milana'));
console.log(greetWithDefault('Milana', 'Hi'));
console.log(applyOperation(3, 4, add));
console.log(overloadedFunction("hello"));
console.log(overloadedFunction(5));
console.log(overloadedFunction(true));
