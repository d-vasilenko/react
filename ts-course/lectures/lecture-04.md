
# 📚 МОДУЛЬ 4: GENERICS — ПОЛНАЯ ТЕОРИЯ

---

## 1. ЗАЧЕМ НУЖНЫ GENERICS?

**Проблема:** мы хотим написать функцию, которая работает с **любым типом**, но при этом **сохраняет тип**.

```typescript
// ❌ Без generics — теряем тип
function identity(value: any): any {
  return value;
}
const result = identity("hello"); // result: any (тип потерян)

// ✅ С generics — тип сохраняется
function identity<T>(value: T): T {
  return value;
}
const result = identity("hello"); // result: string
```

**Generics** позволяют создавать компоненты, работающие с разными типами, но сохраняющие информацию о типе.

---

## 2. СИНТАКСИС GENERICS

```typescript
function имя<T>(параметр: T): T {
  // тело
}
```

- `<T>` — объявление generic-параметра (обычно используют `T`, `U`, `V`, `K`, `V`)
- `T` — любой тип, который будет передан

**Примеры:**

```typescript
// Функция, возвращающая переданное значение
function identity<T>(value: T): T {
  return value;
}

// Использование (явное указание типа)
const num: number = identity<number>(42);

// Использование (вывод типа автоматически)
const str: string = identity("hello");
```

---

## 3. GENERICS С НЕСКОЛЬКИМИ ПАРАМЕТРАМИ

```typescript
function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

const result = swap("hello", 42); // [42, "hello"] (тип: [number, string])
```

---

## 4. ОГРАНИЧЕНИЯ (extends)

Иногда нужно ограничить, какие типы можно передавать.

```typescript
// ❌ Ошибка: length может не быть у всех типов
function getLength<T>(value: T): number {
  return value.length; // Error: Property 'length' does not exist on type 'T'
}

// ✅ Ограничиваем: T должен иметь свойство length
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("hello"); // 5 (строки имеют length)
getLength([1, 2, 3]); // 3 (массивы имеют length)
// getLength(42); // ❌ Ошибка! number не имеет length
```

**Ограничения могут быть на интерфейсы:**

```typescript
interface HasId {
  id: number;
}

function getUserId<T extends HasId>(obj: T): number {
  return obj.id;
}

getUserId({ id: 1, name: "Alice" }); // OK
// getUserId({ name: "Alice" }); // ❌ Ошибка! нет id
```

---

## 5. GENERICS В ИНТЕРФЕЙСАХ

Интерфейсы тоже могут быть generic:

```typescript
interface Box<T> {
  value: T;
}

const box1: Box<string> = { value: "hello" };
const box2: Box<number> = { value: 42 };

// Вложенные generic
interface Response<T> {
  data: T;
  status: number;
}

const response: Response<{ name: string }> = {
  data: { name: "Alice" },
  status: 200,
};
```

---

## 6. GENERICS В КЛАССАХ

```typescript
class Storage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const stringStorage = new Storage<string>();
stringStorage.add("hello");
stringStorage.add("world");
// stringStorage.add(42); // ❌ Ошибка! 42 не string
```

---

## 7. GENERICS В TYPE ALIASES

```typescript
type Result<T> = {
  success: boolean;
  data: T;
  error?: string;
};

const successResult: Result<number> = {
  success: true,
  data: 42,
};

const errorResult: Result<string> = {
  success: false,
  error: "Something went wrong",
  data: "", // data всё равно обязателен, но можно использовать null
};
```

---

## 8. ОГРАНИЧЕНИЕ НА КЛЮЧИ (keyof)

```typescript
interface User {
  id: number;
  name: string;
  age: number;
}

// Функция, которая принимает объект и ключ
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, name: "Alice", age: 30 };

getProperty(user, "name"); // "Alice" (string)
getProperty(user, "age");  // 30 (number)
// getProperty(user, "email"); // ❌ Ошибка! "email" нет в User
```

Здесь:
- `T` — тип объекта
- `K extends keyof T` — ограничение: `K` должен быть одним из ключей `T`
- `T[K]` — тип значения по ключу

---

## 9. ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ ДЛЯ GENERIC

```typescript
function wrapInArray<T = string>(value: T): T[] {
  return [value];
}

const arr1 = wrapInArray("hello"); // string[] (по умолчанию)
const arr2 = wrapInArray<number>(42); // number[]
```

---

## 📝 ПРАКТИЧЕСКОЕ ЗАДАНИЕ

Создайте файл `src/module4/task5-generics.ts`. Выполните все пункты:

1. Напишите generic-функцию `identity<T>(value: T): T`, которая возвращает переданное значение. Проверьте с числом и строкой.

2. Напишите generic-функцию `getLength<T extends { length: number }>(value: T): number`, которая возвращает длину. Проверьте со строкой и массивом.

3. Напишите функцию `swap<T, U>(a: T, b: U): [U, T]`, которая меняет местами два значения. Проверьте со строкой и числом.

4. Напишите generic-интерфейс `Box<T>` с полем `value`. Создайте объект `Box<string>` и `Box<number>`.

5. Напишите generic-функцию `merge<T, U>(a: T, b: U): T & U`, которая объединяет два объекта. Проверьте с двумя объектами.

6. Напишите интерфейс `ApiResponse<T>` с полями `data: T` и `status: number`. Проверьте с `{ name: string }`.

7. Напишите generic-класс `Stack<T>` с методами `push(item: T): void` и `pop(): T | undefined`. Проверьте с числами.

8. Напишите функцию `getProperty<T, K extends keyof T>(obj: T, key: K): T[K]`. Проверьте с объектом `{ id: 1, name: "Alice" }`.

9. Напишите функцию `wrapInArray<T>(value: T): T[]`. Добавьте значение по умолчанию для `T` — `string`.

10. Напишите функцию `shallowFreeze<T>(obj: T): Readonly<T>`, которая возвращает объект, обёрнутый в `Readonly<T>`. Проверьте с объектом.

В конце файла добавьте `export {}`.

---

## ✅ КОНТРОЛЬНАЯ ТОЧКА

После выполнения:
```bash
pnpm run build
node dist/module4/task5-generics.js
```

Покажите код и вывод.

---

**Если есть вопросы по теории — спрашивайте. Удачи.**