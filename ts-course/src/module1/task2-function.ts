// 1. add(a: number, b: number): number – возвращает сумму a и b
function add(a: number, b: number): number {
  return a + b;
}

// 2. multiply(a: number, b: number): number – возвращает произведение
function multiply(a: number, b: number): number {
  return a * b;
}

// 3. greet(name: string, age: number): string – возвращает "Hello, name! You are age years old."
function greet(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`
}

// 4. isEven(num: number): boolean – возвращает true, если число чётное
const isEven = (num: number): boolean => num % 2 === 0;

// 5. getLength(str: string): number – возвращает длину строки
const getLength = (str: string): number => str.length;

// 6. toUpperCase(str: string): string – возвращает строку в верхнем регистре
const toUpperCase = (str: string): string => {
  return str.toUpperCase();
}

// 7. printArray(arr: number[]): void – выводит каждый элемент массива в консоль
const pringArray = (arr: number[]): void => {
  arr.forEach((item) => console.log(item));
}

// 8. sumAll(...numbers: number[]): number – возвращает сумму всех переданных чисел
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, item) => acc + item, 0);
}

// 9. greetWithDefault(name: string, greeting?: string): string
//    Если greeting не передан, используйте "Hello", иначе используйте переданное приветствие.
//    Пример: greetWithDefault("Alice") → "Hello, Alice!"
//            greetWithDefault("Bob", "Hi") → "Hi, Bob!"
const greetWithDefault = (name: string, greeting?: string): string => {
  if (!greeting) {
    return `Hello, ${name}`;
  }
  return `${greeting}, ${name}`;
}

// 10. applyOperation(a: number, b: number, op: (x: number, y: number) => number): number
//     Применяет переданную операцию к a и b
function applyOperation(a: number, b: number, op: (x: number, y: number) => number): number {
  return op(a, b);
}

// 11. createCounter(): () => number – возвращает функцию, которая при каждом вызове увеличивает счётчик на 1 и возвращает новое значение.
const createCounter = (): () => number => {
  let count = 0;
  return (): number => {
    count += 1;
    return count;
  }
}

// 12. overloadedFunction(value: string): string;
//     overloadedFunction(value: number): number;
//     overloadedFunction(value: boolean): boolean;
//     (реализация) – если строка – возвращает её длину, если число – его квадрат, если boolean – отрицание.
function overloadedFunction(value: string): string;
function overloadedFunction(value: number): number;
function overloadedFunction(value: boolean): boolean;

function overloadedFunction(value: any): any {
  if (typeof value === 'string') return value.length;
  if (typeof value === 'number') return value * value;
  if (typeof value === 'boolean') return !value;
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
