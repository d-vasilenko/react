# 📚 МОДУЛЬ 0 – ТЕОРИЯ (ПОЛНАЯ ВЕРСИЯ)

## ТЕОРИЯ 0.1: ЧТО ТАКОЕ TYPESCRIPT

### Определение

TypeScript — это язык программирования, построенный на основе JavaScript, который добавляет статическую типизацию. Весь код TypeScript компилируется в чистый JavaScript.

```typescript
// JavaScript
function greet(name) {
  return "Hello, " + name;
}

// TypeScript
function greet(name: string): string {
  return "Hello, " + name;
}
```

### Три ключевых преимущества

**1. Обнаружение ошибок на этапе разработки**

```typescript
// ❌ Ошибка будет только в runtime
function processUser(user) {
  console.log(user.name.toUpperCase()); // if user is null -> crash!
}

// ✅ Ошибка на этапе компиляции
function processUser(user: { name: string }) {
  console.log(user.name.toUpperCase()); // TS проверит наличие name
}
```

**2. Улучшенная поддержка в IDE**

TypeScript предоставляет автодополнение, навигацию по коду, рефакторинг и документацию прямо в редакторе.

**3. Самодокументируемый код**

Типы служат документацией:

```typescript
// Что принимает эта функция? Что возвращает?
function calculate(input) { /* сложная логика */ }

// Типы говорят всё
function calculate(input: number[]): number {
  // понятно: массив чисел → число
}
```

---

## ТЕОРИЯ 0.2: УСТАНОВКА И НАСТРОЙКА

### Установка

```bash
npm install -g typescript  # глобально
# или
npm install typescript --save-dev  # локально в проекте
```

### Компиляция

```bash
tsc index.ts              # компиляция одного файла
tsc                       # компиляция проекта (ищет tsconfig.json)
tsc --watch              # автоматическая перекомпиляция
tsc --noEmit             # проверка типов без создания файлов
```

### Структура tsconfig.json

```json
{
  "compilerOptions": {
    // Базовые настройки
    "target": "ES2020",        // В какую версию JS компилировать
    "module": "commonjs",      // Система модулей
    "lib": ["ES2020"],         // Какие типы включить

    // Выходные файлы
    "outDir": "./dist",        // Куда компилировать
    "rootDir": "./src",        // Где исходники

    // Строгие проверки (ВАЖНО!)
    "strict": true,            // Включает все strict* опции
    "noImplicitAny": true,     // Запрещает неявный any
    "strictNullChecks": true,  // Проверяет null и undefined
    "strictFunctionTypes": true, // Проверяет сигнатуры функций
    "strictBindCallApply": true, // Проверяет bind/call/apply
    "strictPropertyInitialization": true, // Проверяет инициализацию свойств

    // Дополнительные проверки
    "noUnusedLocals": true,    // Предупреждает о неиспользуемых переменных
    "noUnusedParameters": true, // Предупреждает о неиспользуемых параметрах
    "noImplicitReturns": true, // Требует явных return
    "noFallthroughCasesInSwitch": true, // Запрещает провалы в switch
    "exactOptionalPropertyTypes": true // Точная типизация опциональных свойств
  },
  "include": ["src/**/*"],     // Какие файлы компилировать
  "exclude": ["node_modules"]  // Какие исключить
}
```

---

## ТЕОРИЯ 0.3: БАЗОВЫЕ ТИПЫ

### Примитивные типы

```typescript
// Числа
const age: number = 25;
const price: number = 19.99;
const hex: number = 0xff;       // 255
const binary: number = 0b1010;  // 10

// Строки
const name: string = "Alice";
const greeting: string = 'Hello';
const template: string = `Hello, ${name}`;

// Булевы
const isActive: boolean = true;
const isComplete: boolean = false;

// null и undefined
let empty: null = null;
let notDefined: undefined = undefined;

// bigint (ES2020+)
const big: bigint = 9007199254740991n;

// symbol
const uniqueId: symbol = Symbol("id");
```

### Специальные типы

**void** — отсутствие возвращаемого значения

```typescript
function logMessage(message: string): void {
  console.log(message);
  // return не нужен
}
```

**unknown** — безопасная альтернатива any

```typescript
let data: unknown = "hello";
data = 42;
data = { name: "Alice" };

// ❌ Ошибка: нужно сузить тип
console.log(data.toUpperCase());

// ✅ Сужение типа
if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

**never** — тип, который никогда не возникает

```typescript
// Функция, которая всегда выбрасывает ошибку
function throwError(message: string): never {
  throw new Error(message);
}

// Функция с бесконечным циклом
function infiniteLoop(): never {
  while (true) {}
}

// Исчерпывающая проверка
function processColor(color: "red" | "green"): string {
  switch (color) {
    case "red": return "#FF0000";
    case "green": return "#00FF00";
    default:
      const exhaustiveCheck: never = color;
      return exhaustiveCheck;
  }
}
```

---

## ТЕОРИЯ 0.4: ANY VS UNKNOWN

### any — отключает проверку типов

```typescript
let dangerous: any = "hello";
dangerous = 42;             // OK
dangerous = { name: "A" };  // OK

// ❌ Опасно: любая операция разрешена
dangerous.toUpperCase();    // Может взорваться в runtime
dangerous.notExist();       // Может взорваться
dangerous[0].value;         // Может взорваться
```

### unknown — безопасная альтернатива

```typescript
let safe: unknown = "hello";
safe = 42;      // OK
safe = true;    // OK

// ❌ Ошибка: нельзя использовать без сужения
safe.toUpperCase(); // TS Error!

// ✅ Нужно сузить тип
if (typeof safe === "string") {
  console.log(safe.toUpperCase()); // OK
}

// ✅ Или использовать type guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

if (isString(safe)) {
  console.log(safe.toUpperCase()); // OK
}
```

### Когда что использовать

| Ситуация | Использовать |
|----------|--------------|
| Не знаете тип, но хотите проверять | `unknown` |
| Знаете больше компилятора | `as` или `satisfies` |
| Миграция с JS, нет времени | `any` (временно!) |
| API ответы | `unknown` + проверки |
| Пользовательский ввод | `unknown` |

---

## ТЕОРИЯ 0.5: СУЖЕНИЕ ТИПОВ (TYPE NARROWING)

### typeof

```typescript
function process(value: string | number): string {
  if (typeof value === "string") {
    // Здесь value — string
    return value.toUpperCase();
  } else {
    // Здесь value — number
    return value.toString();
  }
}
```

### instanceof

```typescript
function handleError(error: Error | string): string {
  if (error instanceof Error) {
    return error.message;
  }
  return error;
}
```

### in

```typescript
type Cat = { meow(): void };
type Dog = { bark(): void };

function makeSound(animal: Cat | Dog): void {
  if ("meow" in animal) {
    animal.meow();  // Cat
  } else {
    animal.bark();  // Dog
  }
}
```

### hasOwnProperty

```typescript
function hasName(obj: object): obj is { name: string } {
  return obj.hasOwnProperty("name");
}

function process(obj: { id: number } | { name: string }): string {
  if (hasName(obj)) {
    return obj.name; // name exists
  }
  return obj.id.toString(); // id exists
}
```

### Равенство

```typescript
function process(value: string | null | undefined): string {
  if (value === null) {
    return "Value is null";
  }
  if (value === undefined) {
    return "Value is undefined";
  }
  // Здесь value — string
  return value.toUpperCase();
}
```

---

## ТЕОРИЯ 0.6: ЛИТЕРАЛЬНЫЕ ТИПЫ

### Строковые литералы

```typescript
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction): void {
  // direction может быть только "up", "down", "left" или "right"
}

move("up");    // OK
move("left");  // OK
move("north"); // ❌ Ошибка!
```

### Числовые литералы

```typescript
type StatusCode = 200 | 404 | 500;

function handleStatus(code: StatusCode): string {
  if (code === 200) return "OK";
  if (code === 404) return "Not Found";
  return "Internal Server Error";
}

handleStatus(200); // OK
handleStatus(404); // OK
handleStatus(400); // ❌ Ошибка!
```

### Смешанные литералы

```typescript
type Response = 
  | { status: 200; data: string }
  | { status: 404; error: string }
  | { status: 500; error: string };

function processResponse(response: Response): string {
  if (response.status === 200) {
    return response.data;
  }
  return response.error;
}
```

---

## ТЕОРИЯ 0.7: UNION И INTERSECTION

### Union (|) — или

```typescript
// Может быть строкой ИЛИ числом
type StringOrNumber = string | number;

// Может быть пользователем ИЛИ гостем
type UserOrGuest = User | Guest;

// Использование
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  return value.toFixed(2);
}
```

### Intersection (&) — и

```typescript
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age; // { name: string; age: number }

type Admin = { role: "admin" };
type User = { id: number };
type AdminUser = Admin & User; // { role: "admin"; id: number }

const admin: AdminUser = {
  role: "admin",
  id: 1
};
```

### Распределительные union (Distributive Conditional Types)

```typescript
// TypeScript автоматически распределяет union
type ToArray<T> = T extends any ? T[] : never;
type Result = ToArray<string | number>; // string[] | number[]

// Аналогично работает с условиями
type IsString<T> = T extends string ? true : false;
type Check = IsString<string | number>; // true | false
```

---

## ТЕОРИЯ 0.8: TYPE GUARDS

### Пользовательские type guards

```typescript
// Сигнатура: value is Type
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function isUser(value: unknown): value is { id: number; name: string } {
  return (
    isObject(value) &&
    "id" in value &&
    "name" in value &&
    isNumber(value.id) &&
    isString(value.name)
  );
}

// Использование
function process(value: unknown): string {
  if (isUser(value)) {
    return `User: ${value.name}`;
  }
  if (isString(value)) {
    return value.toUpperCase();
  }
  if (isNumber(value)) {
    return value.toString();
  }
  return "Unknown";
}
```

### Оператор in

```typescript
type Cat = { meow(): void; name: string };
type Dog = { bark(): void; name: string };

// Проверка через in
function makeSound(animal: Cat | Dog): string {
  if ("meow" in animal) {
    return animal.meow();
  }
  if ("bark" in animal) {
    return animal.bark();
  }
  return "Unknown";
}
```

### Оператор instanceof

```typescript
class Animal { name: string }
class Dog extends Animal { bark() {} }
class Cat extends Animal { meow() {} }

function handle(animal: Animal) {
  if (animal instanceof Dog) {
    animal.bark(); // OK
  }
  if (animal instanceof Cat) {
    animal.meow(); // OK
  }
}
```

---

## ТЕОРИЯ 0.9: ASSERTS

### assert condition

```typescript
function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function process(value: unknown): string {
  assert(typeof value === "string", "Must be string");
  // После assert value — string
  return value.toUpperCase();
}
```

### asserts value is Type

```typescript
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Value must be string");
  }
}

function assertIsNumber(value: unknown): asserts value is number {
  if (typeof value !== "number") {
    throw new Error("Value must be number");
  }
}

function assertIsUser(value: unknown): asserts value is { id: number; name: string } {
  if (typeof value !== "object" || value === null) {
    throw new Error("Must be object");
  }
  if (!("id" in value) || typeof (value as any).id !== "number") {
    throw new Error("Must have id: number");
  }
  if (!("name" in value) || typeof (value as any).name !== "string") {
    throw new Error("Must have name: string");
  }
}

// Использование
function process(data: unknown): void {
  assertIsUser(data);
  // После assert data — User
  console.log(data.name); // OK
}
```

### Когда использовать asserts

1. **Валидация входных данных**
2. **Проверка состояния**
3. **Гарантия типов после проверки**
4. **Инварианты в классах**

---

## ТЕОРИЯ 0.10: NEVER

### Что такое never

`never` — это тип, который никогда не встречается. Он используется для:

1. Функций, которые никогда не возвращают результат
2. Исчерпывающих проверок
3. Недостижимого кода

### Примеры

```typescript
// Функция выбрасывает ошибку
function throwError(message: string): never {
  throw new Error(message);
}

// Бесконечный цикл
function infinite(): never {
  while (true) {}
}

// Исчерпывающая проверка
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

type Color = "red" | "green" | "blue";

function getHex(color: Color): string {
  switch (color) {
    case "red": return "#FF0000";
    case "green": return "#00FF00";
    case "blue": return "#0000FF";
    default:
      // Если добавить новый цвет, здесь будет ошибка
      return assertNever(color);
  }
}
```

### Почему never важен

```typescript
// Без never — пропустим ошибку
function processWithoutNever(status: "loading" | "success"): string {
  switch (status) {
    case "loading": return "Loading...";
    case "success": return "Success!";
    default:
      return "Unknown"; // ❌ Скрывает ошибку
  }
}

// С never — обнаружим ошибку
function processWithNever(status: "loading" | "success"): string {
  switch (status) {
    case "loading": return "Loading...";
    case "success": return "Success!";
    default:
      const exhaustive: never = status; // ❌ Ошибка!
      return exhaustive;
  }
}
```

---

## ТЕОРИЯ 0.11: PLAYGROUND

### Что такое Playground

[TypeScript Playground](https://www.typescriptlang.org/play) — онлайн-редактор для экспериментов.

### Возможности

1. **Разные target** — ES5, ES2015, ESNext
2. **Разные lib** — какие типы включены
3. **strict режим** — включить/выключить
4. **TS Version** — тестировать разные версии
5. **Скомпилированный JS** — видеть результат
6. **Типы** — видеть выведенные типы

### Примеры экспериментов

```typescript
// Эксперимент 1: as const
const config = { host: "localhost", port: 3000 } as const;
// Тип: { readonly host: "localhost"; readonly port: 3000 }

// Эксперимент 2: target
async function fetchData(): Promise<string> {
  return "data";
}
// ES5: используется regenerator-runtime
// ES2015: используется native async/await

// Эксперимент 3: strictNullChecks
function process(value: string | null) {
  // strict: true — ошибка
  // strict: false — OK
  return value.toUpperCase();
}
```

---

## ТЕОРИЯ 0.12: AS CONST

### Базовое использование

```typescript
// Без as const
let x = 10;          // number
const y = 10;        // 10

// С as const
const obj = { name: "Alice" } as const;
// Тип: { readonly name: "Alice" }

const arr = [1, 2, 3] as const;
// Тип: readonly [1, 2, 3] (кортеж)

const tuple = ["Alice", 30, true] as const;
// Тип: readonly ["Alice", 30, true]
```

### Глубокое применение

```typescript
const config = {
  server: {
    host: "localhost",
    port: 3000
  },
  auth: {
    secret: "secret-key"
  }
} as const;

// Тип:
// {
//   readonly server: {
//     readonly host: "localhost";
//     readonly port: 3000;
//   };
//   readonly auth: {
//     readonly secret: "secret-key";
//   };
// }

// ❌ Нельзя изменить
config.server.port = 8080; // Ошибка!
```

---

## ТЕОРИЯ 0.13: @TS-EXPECT-ERROR

### Для чего нужен

```typescript
// Используется в тестах для проверки ошибок типов

// @ts-expect-error — ожидается ошибка
// @ts-expect-error
const x: number = "string"; // ✅ OK, ошибка ожидалась

// @ts-expect-error
const y: string = 42; // ✅ OK

// Если ошибки нет — будет ошибка
// @ts-expect-error
const z: number = 10; // ❌ Ошибка: ожидалась ошибка, но её нет
```

### Применение в тестах

```typescript
// Библиотека tsd для тестирования типов
import { expectType, expectError } from "tsd";

// @ts-expect-error
const a: string = 42; // OK — тип ошибки проверен

// @ts-expect-error
const b: number = "hello"; // OK
```

---

## 📝 КОНСПЕКТ ДЛЯ ЗАПОМИНАНИЯ

### Основные типы
```
number   → числа
string   → строки
boolean  → true/false
null     → пустое значение
undefined → не определено
void     → нет возврата
unknown  → неизвестный тип (безопасный)
any      → любой тип (небезопасный)
never    → никогда не происходит
```

### Операторы
```
|   → union (или)
&   → intersection (и)
in  → проверка свойства
as  → утверждение типа
```

### Сужение типов
```
typeof   → проверка примитивов
instanceof → проверка классов
in       → проверка свойств
hasOwnProperty → проверка собственных свойств
type guard → value is Type
asserts  → asserts value is Type
```

### Ключевые концепции
```
strict mode   → все проверки включены
type narrowing → сужение типа в ветках
exhaustive checking → проверка всех вариантов
distributive types → распределение union
```

---

## 🎯 ГОТОВЫ К ПРАКТИКЕ?

Теперь у вас есть вся необходимая теория для Модуля 0.

**Вернитесь к заданиям и решайте их, используя эту теорию.**

Помните:
- `unknown` безопаснее `any`
- `never` помогает найти ошибки
- Type guards делают код безопасным
- `asserts` гарантирует типы в runtime
- `as const` сохраняет литералы

**Приступайте к выполнению! У вас есть всё, чтобы успешно завершить Модуль 0. После выполнения всех заданий покажите мне результаты.**