# 📚 МОДУЛЬ 6: MAPPED TYPES — ПОЛНАЯ ТЕОРИЯ

---

## 1. ЧТО ТАКОЕ MAPPED TYPES

**Mapped Types** — это способ создавать новый тип на основе другого, «проходясь» по всем его ключам.

Синтаксис:

```typescript
type NewType<T> = {
  [K in keyof T]: T[K];
};
```

Здесь:
- `[K in keyof T]` — проходимся по всем ключам `T`
- `T[K]` — тип значения по этому ключу

**Пример:**

```typescript
interface User {
  id: number;
  name: string;
  age: number;
}

// Копия User
type UserCopy = {
  [K in keyof User]: User[K];
};
// { id: number; name: string; age: number }
```

---

## 2. МОДИФИКАТОР `readonly`

Можно добавить `readonly` ко всем свойствам:

```typescript
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

interface User {
  id: number;
  name: string;
}

type ReadonlyUser = MyReadonly<User>;
// { readonly id: number; readonly name: string }
```

Это **внутренняя реализация** встроенного `Readonly<T>`.

---

## 3. МОДИФИКАТОР `?` (ОПЦИОНАЛЬНОСТЬ)

Можно сделать все свойства опциональными:

```typescript
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

interface User {
  id: number;
  name: string;
}

type PartialUser = MyPartial<User>;
// { id?: number; name?: string }
```

Это **внутренняя реализация** встроенного `Partial<T>`.

---

## 4. УДАЛЕНИЕ МОДИФИКАТОРОВ (`-`)

Можно **убрать** `readonly` или `?` с помощью `-`:

```typescript
// Убираем readonly
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

// Убираем опциональность
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};
```

**Пример:**

```typescript
interface User {
  readonly id?: number;
  readonly name?: string;
}

type MutableUser = Mutable<User>;
// { id?: number; name?: string } — readonly убран

type RequiredUser = MyRequired<User>;
// { readonly id: number; readonly name: string } — ? убран
```

---

## 5. ДОБАВЛЕНИЕ МОДИФИКАТОРОВ (`+`)

`+` можно использовать явно (но это не обязательно — по умолчанию `+`):

```typescript
type MyReadonly<T> = {
  +readonly [K in keyof T]: T[K];
};

type MyPartial<T> = {
  [K in keyof T]+?: T[K];
};
```

Обычно `+` не пишут, потому что он подразумевается.

---

## 6. КОМБИНАЦИЯ МОДИФИКАТОРОВ

```typescript
type ReadonlyPartial<T> = {
  readonly [K in keyof T]?: T[K];
};

interface User {
  id: number;
  name: string;
}

type FrozenOptionalUser = ReadonlyPartial<User>;
// { readonly id?: number; readonly name?: string }
```

---

## 7. ВСТРОЕННЫЕ MAPPED TYPES

TypeScript предоставляет несколько встроенных утилит, построенных на mapped types:

```typescript
type Partial<T> = {
  [K in keyof T]?: T[K];
};

type Required<T> = {
  [K in keyof T]-?: T[K];
};

type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

---

## 8. ПЕРЕИМЕНОВАНИЕ КЛЮЧЕЙ ЧЕРЕЗ `as`

Можно **переименовать** ключи прямо в mapped type:

```typescript
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

interface User {
  name: string;
  age: number;
}

type UserGetters = Getters<User>;
// {
//   getName: () => string;
//   getAge: () => number;
// }
```

Здесь:
- `as` — переименование ключа
- `` `get${Capitalize<string & K>}` `` — шаблонный литерал

---

## 9. ФИЛЬТРАЦИЯ КЛЮЧЕЙ ЧЕРЕЗ `as`

Можно **исключать** ключи, возвращая `never`:

```typescript
type OnlyStrings<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type StringProps = OnlyStrings<User>;
// { name: string; email: string }
```

Здесь мы оставляем только те свойства, тип которых `string`.

---

## 10. `keyof` + MAPPED TYPES (ГЛУБОКАЯ СВЯЗЬ)

Mapped types всегда работают в паре с `keyof`:

```typescript
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
}

type UserName = MyPick<User, 'name'>;
// { name: string }

type UserIdName = MyPick<User, 'id' | 'name'>;
// { id: number; name: string }
```

---

## 📝 ПРАКТИЧЕСКОЕ ЗАДАНИЕ 7

Создайте файл `src/module6/task7-mapped.ts`. Выполните все пункты:

---

1. Создайте тип `MyReadonly<T>`, который делает все свойства `readonly`. Проверьте на интерфейсе `User` (с полями `id`, `name`).

2. Создайте тип `MyPartial<T>`, который делает все свойства опциональными. Проверьте на `User`.

3. Создайте тип `MyRequired<T>`, который убирает опциональность (`-?`). Проверьте на типе `{ id?: number; name?: string }`.

4. Создайте тип `Mutable<T>`, который убирает `readonly` (`-readonly`). Проверьте на `{ readonly id: number }`.

5. Создайте тип `MyPick<T, K extends keyof T>`, который оставляет только указанные ключи. Проверьте на `User` с ключами `'id' | 'name'`.

6. Создайте тип `MyRecord<K extends keyof any, V>`, который создаёт объект с ключами `K` и значениями `V`. Проверьте с `'a' | 'b'` и `number`.

7. Создайте тип `Nullable<T>`, который делает все свойства `T | null`. Проверьте на `User`.

8. Создайте тип `Getters<T>`, который превращает все свойства в функции-геттеры (с префиксом `get`). Проверьте на `{ name: string; age: number }`.

9. Создайте тип `OnlyStrings<T>`, который оставляет только свойства типа `string`. Проверьте на `User` (где `id: number`, `name: string`, `email: string`).

10. Создайте тип `ReadonlyPartial<T>`, который делает свойства **и** `readonly`, **и** опциональными. Проверьте на `User`.

---

## ✅ УСЛОВИЯ

- В каждом пункте добавьте `console.log` с примером объекта, чтобы проверить типы.
- В конце файла — `export {}`.
- После написания — `pnpm run build` и `node dist/module6/task7-mapped.js`.

---

**Приступайте. Если вопросы — спрашивайте. Удачи.**