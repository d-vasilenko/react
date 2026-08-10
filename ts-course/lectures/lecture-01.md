
# 📚 МОДУЛЬ 1: ФУНКЦИИ (УГЛУБЛЁННО)

Теперь, когда вы уверенно работаете с базовыми типами, изучим функции более детально. Это важно, потому что в `deepFreeze` мы будем активно использовать функции и их типизацию.

---

## ТЕОРИЯ

### 1. Необязательные параметры (`?`)

Параметр становится необязательным, если после его имени поставить `?`. Такой параметр может быть опущен при вызове, и его значение будет `undefined`.

```typescript
function greet(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}! You are ${age} years old.`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));        // "Hello, Alice!"
console.log(greet("Bob", 25));      // "Hello, Bob! You are 25 years old."
```

**Важно:** необязательные параметры должны идти **после** обязательных.

---

### 2. Параметры по умолчанию

Можно задать значение по умолчанию прямо в объявлении параметра. Тогда, если аргумент не передан, будет использовано значение по умолчанию.

```typescript
function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiply(5));    // 10 (b = 2 по умолчанию)
console.log( multiply(5, 3)); // 15
```

---

### 3. Rest-параметры (`...`)

Когда вы не знаете, сколько аргументов будет передано, используйте rest-параметр. Он собирает все оставшиеся аргументы в массив.

```typescript
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3));      // 6
console.log(sumAll(10, 20, 30, 40)); // 100
```

---

### 4. Функции как значения (тип функции)

Функции можно присваивать переменным и передавать как аргументы. Для этого нужно указать их тип — сигнатуру вызова.

```typescript
// Тип переменной — функция, принимающая два числа и возвращающая число
let operation: (a: number, b: number) => number;

function add(a: number, b: number): number {
  return a + b;
}

operation = add;
console.log(operation(3, 4)); // 7

// Функция, принимающая другую функцию как параметр
function compute(a: number, b: number, fn: (x: number, y: number) => number): number {
  return fn(a, b);
}

console.log(compute(5, 3, add)); // 8
```

---

### 5. Функции, возвращающие функции (замыкания)

Функция может возвращать другую функцию. Это широко используется в паттернах программирования.

```typescript
function createMultiplier(factor: number): (x: number) => number {
  return function (x: number): number {
    return x * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(5)); // 15
```

---

### 6. Перегрузки (overloads)

Перегрузки позволяют описать несколько сигнатур для одной функции. Это нужно, когда функция может принимать разные типы аргументов и возвращать разные типы.

```typescript
// Сигнатуры перегрузки (только типы)
function process(value: string): string;
function process(value: number): number;
function process(value: boolean): boolean;

// Реализация (с универсальным типом или any)
function process(value: any): any {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'boolean') {
    return !value;
  }
}

console.log(process("hello")); // "HELLO"
console.log(process(5));       // 10
console.log(process(true));    // false
```

---

### 7. Типизация `this`

В TypeScript можно указать, какой тип должен иметь `this` внутри функции. Обычно это используют в классах или при передаче методов как колбэков.

```typescript
interface User {
  name: string;
  greet(this: User): void;
}

const user: User = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

user.greet(); // "Hello, Alice"
```

---

## 📝 ПРАКТИЧЕСКОЕ ЗАДАНИЕ 2

Создайте файл `src/module0/task2-functions.ts` и реализуйте следующие функции согласно комментариям:

```typescript
// 1. add(a: number, b: number): number – возвращает сумму a и b

// 2. multiply(a: number, b: number): number – возвращает произведение

// 3. greet(name: string, age: number): string – возвращает "Hello, name! You are age years old."

// 4. isEven(num: number): boolean – возвращает true, если число чётное

// 5. getLength(str: string): number – возвращает длину строки

// 6. toUpperCase(str: string): string – возвращает строку в верхнем регистре

// 7. printArray(arr: number[]): void – выводит каждый элемент массива в консоль

// 8. sumAll(...numbers: number[]): number – возвращает сумму всех переданных чисел

// 9. greetWithDefault(name: string, greeting?: string): string
//    Если greeting не передан, используйте "Hello", иначе используйте переданное приветствие.
//    Пример: greetWithDefault("Alice") → "Hello, Alice!"
//            greetWithDefault("Bob", "Hi") → "Hi, Bob!"

// 10. applyOperation(a: number, b: number, op: (x: number, y: number) => number): number
//     Применяет переданную операцию к a и b

// 11. createCounter(): () => number – возвращает функцию, которая при каждом вызове увеличивает счётчик на 1 и возвращает новое значение.

// 12. overloadedFunction(value: string): string;
//     overloadedFunction(value: number): number;
//     overloadedFunction(value: boolean): boolean;
//     (реализация) – если строка – возвращает её длину, если число – его квадрат, если boolean – отрицание.

// После каждой функции напишите пример её вызова и вывод результата в консоль (с пояснением).
```

---

## ✅ КОНТРОЛЬНАЯ ТОЧКА

После выполнения всех пунктов:

1. Скомпилируйте: `pnpm run build`
2. Запустите: `node dist/module0/task2-functions.js`
3. Убедитесь, что все функции работают корректно и выводят ожидаемые значения.

---

**Когда сделаете – пришлите код и результат выполнения. После этого перейдём к следующему модулю.**