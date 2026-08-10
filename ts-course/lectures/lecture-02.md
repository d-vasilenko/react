Вы абсолютно правы! Я дал задание, но не дал теорию. Исправляюсь.

---

# 📚 МОДУЛЬ 2: ОБЪЕКТЫ И ИНТЕРФЕЙСЫ — ТЕОРИЯ

Прежде чем писать код, нужно понять, как TypeScript работает с объектами.

---

## 1. ОБЪЕКТНЫЕ ТИПЫ (ОБЪЯВЛЕНИЕ)

В TypeScript объект можно описать **анонимно** — прямо на месте:

```typescript
// Анонимный объектный тип
const user: { name: string; age: number } = {
  name: "Alice",
  age: 30
};
```

Такой тип действует только для этой переменной. Если нужно переиспользовать описание, используют **интерфейсы** или **type**.

---

## 2. ИНТЕРФЕЙСЫ

Интерфейс — это именованное описание структуры объекта.

```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Alice",
  age: 30
};
```

**Особенности интерфейсов:**
- Могут быть расширены (`extends`)
- Могут объединяться (если объявить два интерфейса с одним именем, они сольются)
- Используются в основном для объектов (но могут описывать и функции)

---

## 3. ОПЦИОНАЛЬНЫЕ СВОЙСТВА (`?`)

Свойство можно сделать необязательным. Тогда объект может его не содержать.

```typescript
interface Config {
  url: string;
  timeout?: number; // необязательно
}

const config1: Config = { url: "https://api.com" };         // OK
const config2: Config = { url: "https://api.com", timeout: 5000 }; // OK
```

Если свойство не указано, его значение будет `undefined`.

---

## 4. `readonly` СВОЙСТВА

Свойство можно пометить как `readonly` — тогда его нельзя изменить после создания объекта.

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

const p: Point = { x: 10, y: 20 };
// p.x = 5; // ❌ Ошибка! Cannot assign to 'x' because it is a read-only property.
```

`readonly` действует только на уровне TypeScript, в скомпилированном JS его нет.

---

## 5. INDEX SIGNATURES (ИНДЕКСНЫЕ СИГНАТУРЫ)

Когда вы не знаете точных названий свойств, но знаете тип ключей и значений, используйте индексную сигнатуру.

```typescript
interface StringDictionary {
  [key: string]: string;
}

const dict: StringDictionary = {
  greeting: "Hello",
  farewell: "Goodbye"
};
```

Можно использовать `number` для массивоподобных объектов:

```typescript
interface NumberArray {
  [index: number]: number;
}
const arr: NumberArray = [10, 20, 30];
```

---

## 6. `type` vs `interface`

| `type` | `interface` |
|--------|-------------|
| Может описывать любые типы (примитивы, union, кортежи, функции, объекты) | Описывает только объекты (и функции как особый случай) |
| Не может быть расширен через `extends` (но можно использовать пересечение `&`) | Может быть расширен через `extends` |
| Не поддерживает слияние (declaration merging) | Поддерживает слияние при повторном объявлении |

**Пример с `type`:**

```typescript
type ID = string | number; // union
type User = { name: string; age: number }; // объект
type StringOrNumber = string | number; // union
```

**Когда использовать `interface`:** для объектов, которые будут расширяться или использоваться в классах.

**Когда использовать `type`:** для union, кортежей, примитивов, или когда нужно пересечение (`&`).

---

## 7. РАСШИРЕНИЕ ИНТЕРФЕЙСОВ (`extends`)

Интерфейс может наследовать свойства другого интерфейса.

```typescript
interface User {
  id: number;
  name: string;
}

interface Employee extends User {
  department: string;
}

const emp: Employee = {
  id: 1,
  name: "Alice",
  department: "Engineering"
};
```

Можно расширять несколько интерфейсов:

```typescript
interface A { a: number }
interface B { b: number }
interface C extends A, B { c: number }
```

---

## 8. ТИП ФУНКЦИИ ЧЕРЕЗ ИНТЕРФЕЙС

Интерфейс может описывать функцию с помощью сигнатуры вызова.

```typescript
interface AddFunction {
  (a: number, b: number): number;
}

const add: AddFunction = (a, b) => a + b;
```

Это альтернатива записи `(a: number, b: number) => number`.

---

## 9. ВЛОЖЕННЫЕ ОБЪЕКТЫ

Свойства объекта тоже могут быть объектами.

```typescript
interface Address {
  city: string;
  zip: number;
}

interface User {
  name: string;
  address: Address;
}

const user: User = {
  name: "Alice",
  address: {
    city: "Moscow",
    zip: 101000
  }
};
```

---

## 10. ОПЕРАТОР `keyof`

`keyof` возвращает объединение ключей типа.

```typescript
interface User {
  name: string;
  age: number;
}

type UserKeys = keyof User; // "name" | "age"
```

Это полезно для ограничения строковых значений допустимыми ключами.

---

## ✅ ТЕПЕРЬ — ПРАКТИКА

Теперь, когда у вас есть теория, переходите к **заданию 3**, которое я уже дал ранее. Оно закрепляет все эти концепции.

**Создайте файл `src/module2/task3-objects.ts` и выполните 10 пунктов** (я продублирую их в следующем сообщении, чтобы не переключаться).

Отлично! Переходим к **Модулю 2: Объекты и интерфейсы**.

---

## 📌 ЗАДАНИЕ

Создайте файл `src/module2/task3-objects.ts` и выполните все пункты:

1. Создайте интерфейс `User` с полями: `id` (number), `name` (string), `email` (string), `isActive` (boolean). Создайте объект этого типа и выведите в консоль.

2. Создайте интерфейс `Product` с полями: `title` (string), `price` (number), `inStock` (boolean). Сделайте поле `description` опциональным.

3. Создайте интерфейс `Point` с `readonly` координатами `x` и `y` (number). Попробуйте изменить `x` после создания – убедитесь, что TypeScript ругается.

4. Создайте интерфейс `Dictionary` с индексной сигнатурой `[key: string]: string`. Заполните его несколькими парами ключ-значение.

5. Создайте интерфейс `Config`, который объединяет обязательное поле `apiUrl` и необязательное поле `timeout`.

6. Напишите функцию `createUser`, которая принимает объект типа `User` и возвращает строку с приветствием.

7. Создайте интерфейс `Employee`, который расширяет `User` и добавляет поле `department` (string).

8. Создайте интерфейс для функции, которая принимает два числа и возвращает число (тип функции).

9. Напишите функцию, принимающую объект с любыми строковыми ключами и возвращающую количество ключей.

10. Создайте интерфейс для массива чисел с индексной сигнатурой (например, `number[]`).

---

После выполнения:
- Скомпилируйте: `pnpm run build`
- Запустите: `node dist/module2/task3-objects.js`
- Покажите мне код и вывод в консоль.

**Жду ваше решение. Без этого не переходим дальше.**