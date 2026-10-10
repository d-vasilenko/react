# 📚 МОДУЛЬ 7: CONDITIONAL TYPES И `infer` — ПОЛНАЯ ТЕОРИЯ

---

## 1. ЧТО ТАКОЕ CONDITIONAL TYPES

**Conditional Types** — это типы, которые выбирают один из двух вариантов в зависимости от условия.

Синтаксис:

```typescript
T extends U ? X : Y
```

Читается так: «если `T` является подтипом `U`, то тип `X`, иначе тип `Y`».

**Пример:**

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
```

---

## 2. ПРАКТИЧЕСКОЕ ПРИМЕНЕНИЕ

### Пример 1: Проверка на массив

```typescript
type IsArray<T> = T extends any[] ? true : false;

type A = IsArray<string[]>;  // true
type B = IsArray<string>;    // false
```

### Пример 2: Извлечение типа элемента массива

```typescript
type ElementType<T> = T extends (infer U)[] ? U : never;

type A = ElementType<string[]>;  // string
type B = ElementType<number[]>;  // number
```

Здесь `infer U` — это **вывод типа** из позиции. Мы говорим: «если `T` — массив, выведи тип его элемента в `U` и верни `U`».

---

## 3. `infer` — ВЫВОД ТИПА

`infer` позволяет **извлечь** тип из другого типа. Используется **только внутри conditional types**.

### Пример: извлечение типа из Promise

```typescript
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>;  // string
type B = UnwrapPromise<number>;           // number
```

### Пример: извлечение типа возврата функции

```typescript
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function greet(): string {
  return "hello";
}

type GreetReturn = MyReturnType<typeof greet>;  // string
```

### Пример: извлечение параметров функции

```typescript
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

function add(a: number, b: number): number {
  return a + b;
}

type AddParams = MyParameters<typeof add>;  // [number, number]
```

---

## 4. РАСПРЕДЕЛИТЕЛЬНЫЕ CONDITIONAL TYPES

Когда conditional type применяется к **union**, он **распределяется** по каждому элементу union.

```typescript
type ToArray<T> = T extends any ? T[] : never;

type A = ToArray<string | number>;
// string[] | number[]  (распределилось!)
```

Если бы мы хотели **не распределять**, нужно обернуть в кортеж:

```typescript
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;

type B = ToArrayNonDist<string | number>;
// (string | number)[]  (не распределилось)
```

**Это важно!** Распределительность — ключевая особенность conditional types.

---

## 5. ВСТРОЕННЫЕ CONDITIONAL TYPES

TypeScript предоставляет несколько встроенных утилит на основе conditional types:

```typescript
// Exclude<T, U> — исключает из T те типы, которые есть в U
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"

// Extract<T, U> — оставляет из T те типы, которые есть в U
type Extract<T, U> = T extends U ? T : never;

type B = Extract<"a" | "b" | "c", "a" | "b">;  // "a" | "b"

// NonNullable<T> — убирает null и undefined
type NonNullable<T> = T extends null | undefined ? never : T;

type C = NonNullable<string | null | undefined>;  // string
```

---

## 6. `ReturnType` И `Parameters` (ВСТРОЕННЫЕ)

```typescript
function add(a: number, b: number): number {
  return a + b;
}

type AddReturn = ReturnType<typeof add>;       // number
type AddParams = Parameters<typeof add>;       // [number, number]
```

Это работает через conditional types + `infer`.

---

## 7. КОМБИНАЦИЯ С MAPPED TYPES

Conditional types можно комбинировать с mapped types:

```typescript
type Nullable<T> = {
  [K in keyof T]: T[K] extends object ? Nullable<T[K]> : T[K] | null;
};

interface User {
  name: string;
  address: { city: string };
}

type NullableUser = Nullable<User>;
// { name: string | null; address: { city: string | null } | null }
```

---

## 8. РЕКУРСИВНЫЕ CONDITIONAL TYPES

Conditional types могут вызывать себя:

```typescript
type DeepReadonly<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;
```

**Важно:** TypeScript ограничивает глубину рекурсии (~5-10 уровней). Для сложных случаев нужны обходные пути (о них в Модуле 8).

---

## 9. `infer` С ОГРАНИЧЕНИЯМИ (TS 4.7+)

Можно указать ограничение для `infer`:

```typescript
type FirstElement<T> = T extends [infer F extends string, ...any[]] ? F : never;

type A = FirstElement<["hello", 1, 2]>;  // "hello"
// type B = FirstElement<[1, 2, 3]>;     // never (первый не string)
```

---

## 10. ПРАКТИЧЕСКИЙ ПРИМЕР: UNWRAP REF

```typescript
type UnwrapRef<T> = T extends { value: infer V } ? V : T;

type A = UnwrapRef<{ value: string }>;  // string
type B = UnwrapRef<{ value: number }>;  // number
type C = UnwrapRef<string>;             // string
```

Это полезно для работы с React refs.

---

## 📝 ПРАКТИЧЕСКОЕ ЗАДАНИЕ 8

Создайте файл `src/module7/task8-conditional.ts`. Выполните все пункты:

---

1. Напишите тип `IsString<T>`, который возвращает `true`, если `T` — `string`, иначе `false`. Проверьте на `string` и `number`.

2. Напишите тип `IsArray<T>`, который возвращает `true`, если `T` — массив. Проверьте на `string[]` и `string`.

3. Напишите тип `ElementType<T>`, который извлекает тип элемента массива. Проверьте на `string[]` и `number[]`.

4. Напишите тип `UnwrapPromise<T>`, который извлекает тип из `Promise`. Проверьте на `Promise<string>` и `number`.

5. Напишите тип `MyReturnType<T>`, который извлекает тип возврата функции. Проверьте на функции `() => string` и `(a: number) => number`.

6. Напишите тип `MyParameters<T>`, который извлекает параметры функции. Проверьте на `(a: number, b: string) => void`.

7. Напишите тип `MyExclude<T, U>`, который исключает из `T` типы, входящие в `U`. Проверьте на `"a" | "b" | "c"` и `"a"`.

8. Напишите тип `MyExtract<T, U>`, который оставляет в `T` типы, входящие в `U`. Проверьте.

9. Напишите тип `MyNonNullable<T>`, который убирает `null` и `undefined`. Проверьте на `string | null | undefined`.

10. Напишите тип `UnwrapRef<T>`, который извлекает тип из `{ value: T }`. Проверьте на `{ value: string }` и `string`.

---

## ✅ УСЛОВИЯ

- В каждом пункте добавьте `console.log` с примером, чтобы проверить.
- В конце файла — `export {}`.
- После написания — `pnpm run build` и `node dist/module7/task8-conditional.js`.

---

**Приступайте. Если вопросы — спрашивайте. Удачи.**