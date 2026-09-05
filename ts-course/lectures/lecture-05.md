
# 📚 МОДУЛЬ 5: KEYOF И INDEXED ACCESS — ТЕОРИЯ

---

## 1. KEYOF (ОБЪЕДИНЕНИЕ КЛЮЧЕЙ)

`keyof T` возвращает объединение всех ключей типа `T`.

```typescript
interface User {
  id: number;
  name: string;
  age: number;
}

type UserKeys = keyof User; // "id" | "name" | "age"
```

`UserKeys` может быть только `"id"`, `"name"` или `"age"`.

---

## 2. INDEXED ACCESS (T[K])

`T[K]` — получение типа значения по ключу.

```typescript
interface User {
  id: number;
  name: string;
  age: number;
}

type IdType = User['id']; // number
type NameType = User['name']; // string
```

Можно получать тип по ключу, который является переменной:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

---

## 3. INDEXED ACCESS С НЕСКОЛЬКИМИ КЛЮЧАМИ

```typescript
interface User {
  id: number;
  name: string;
  age: number;
}

type IdOrName = User['id' | 'name']; // number | string
type AllTypes = User[keyof User]; // number | string (все возможные типы)
```

---

## 4. ВЛОЖЕННЫЙ INDEXED ACCESS

Можно получать типы вложенных свойств:

```typescript
interface Address {
  city: string;
  zip: number;
}

interface User {
  id: number;
  address: Address;
}

type CityType = User['address']['city']; // string
```

---

## 5. KEYOF С GENERICS (УГЛУБЛЁННО)

```typescript
function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

const user = { id: 1, name: "Alice" };
setProperty(user, "name", "Bob"); // OK
// setProperty(user, "name", 42); // ❌ Ошибка! 42 не string
// setProperty(user, "email", "test"); // ❌ Ошибка! "email" нет в User
```

---

## 6. READONLY И KEYOF

`keyof` работает и с `readonly` свойствами:

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

type PointKeys = keyof Point; // "x" | "y"
```

---

## 📝 ПРАКТИЧЕСКОЕ ЗАДАНИЕ 6

Создайте файл `src/module5/task6-keyof.ts`. Выполните все пункты:

1. Создайте интерфейс `User` с полями `id: number`, `name: string`, `email: string`. Используйте `keyof` для получения объединения ключей. Выведите тип в консоль (через `console.log` с пояснением).

2. Используя `User['id']`, получите тип поля `id`. Присвойте переменной значение и выведите.

3. Используя `User['id' | 'name']`, получите объединение типов. Выведите пояснение.

4. Используя `User[keyof User]`, получите все возможные типы полей. Выведите пояснение.

5. Создайте интерфейс `Company` с полями `name: string`, `address: { city: string; street: string }`. Используя вложенный indexed access, получите тип `city`. Выведите значение.

6. Напишите функцию `updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void`, которая изменяет значение свойства. Проверьте на объекте `User`.

7. Напишите функцию `getKeys<T>(obj: T): (keyof T)[]`, которая возвращает массив ключей объекта. Проверьте на объекте `User`.

8. Создайте интерфейс `Config` с полями `url: string`, `timeout: number`, `retries: number`. Используя `keyof`, создайте тип `ConfigKey`, который может быть только ключами `Config`. Проверьте на переменной.

9. Создайте интерфейс `Response<T>` с полями `data: T`, `status: number`, `message: string`. Используя `keyof`, получите тип для `status` и `message`. Выведите пояснение.

10. Напишите функцию `shallowFreezeWithKeyof<T>(obj: T): Readonly<T>`, которая замораживает объект и возвращает его. Используйте `keyof` для проверки, что функция возвращает `Readonly<T>`.

---

## ✅ КОНТРОЛЬНАЯ ТОЧКА

После выполнения:
```bash
pnpm run build
node dist/module5/task6-keyof.js
```

Покажите код и вывод.

---

**Удачи! Если есть вопросы по теории — спрашивайте.**