# 📚 МОДУЛЬ 8: РЕКУРСИВНЫЕ ТИПЫ — ПОЛНАЯ ТЕОРИЯ

---

## 1. ЧТО ТАКОЕ РЕКУРСИВНЫЙ ТИП

**Рекурсивный тип** — это тип, который ссылается сам на себя. Это ключевая концепция для `DeepReadonly<T>`, `DeepPartial<T>` и других «глубоких» утилит.

```typescript
type Tree<T> = {
  value: T;
  children: Tree<T>[];
};
```

Здесь `Tree<T>` ссылается на себя в `children`.

---

## 2. БАЗОВЫЙ ПРИМЕР: DEEPREADONLY

```typescript
type DeepReadonly<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;
```

**Как это работает:**
1. Если `T` — объект, идём по всем ключам
2. Каждое свойство делаем `readonly`
3. Для значения каждого свойства **рекурсивно** применяем `DeepReadonly`
4. Если `T` — примитив (не объект), возвращаем как есть

**Пример:**

```typescript
interface User {
  name: string;
  address: {
    city: string;
    zip: number;
  };
}

type FrozenUser = DeepReadonly<User>;
// {
//   readonly name: string;
//   readonly address: {
//     readonly city: string;
//     readonly zip: number;
//   };
// }
```

---

## 3. ПРОБЛЕМА: МАССИВЫ

Базовый `DeepReadonly` **ломает массивы**:

```typescript
type A = DeepReadonly<string[]>;
// { readonly [K in keyof string[]]: ... }
// Это НЕ readonly string[], а объект с числовыми ключами
```

**Решение:** обрабатываем массивы отдельно:

```typescript
type DeepReadonly<T> = T extends Array<infer U>
  ? ReadonlyArray<DeepReadonly<U>>
  : T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;
```

Теперь `DeepReadonly<string[]>` → `readonly string[]`.

---

## 4. ПРОБЛЕМА: ФУНКЦИИ

Функции в TypeScript — это `object`. Поэтому базовый `DeepReadonly` превратит их в объекты:

```typescript
type A = DeepReadonly<() => string>;
// Ломается! Функция становится объектом
```

**Решение:** исключаем функции:

```typescript
type DeepReadonly<T> = T extends (...args: any[]) => any
  ? T
  : T extends Array<infer U>
  ? ReadonlyArray<DeepReadonly<U>>
  : T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;
```

---

## 5. ПРОБЛЕМА: DATE, REGEXP, MAP, SET

Эти типы — тоже объекты. Если их рекурсивно обработать, они **сломаются**:

```typescript
type A = DeepReadonly<Date>;
// Ломается! Date не должен иметь readonly-свойства
```

**Решение:** исключаем специальные типы:

```typescript
type DeepReadonly<T> = T extends (...args: any[]) => any
  ? T
  : T extends Date
  ? T
  : T extends RegExp
  ? T
  : T extends Map<infer K, infer V>
  ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
  : T extends Set<infer U>
  ? ReadonlySet<DeepReadonly<U>>
  : T extends Array<infer U>
  ? ReadonlyArray<DeepReadonly<U>>
  : T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;
```

**Почему `Map` и `Set` обрабатываем, а `Date` нет?**
- `Date` — иммутабелен по своей природе (методы меняют сам объект, но рекурсивно там нечего обрабатывать)
- `Map` и `Set` содержат **значения**, которые нужно заморозить рекурсивно

---

## 6. ПРОБЛЕМА: ЦИКЛИЧЕСКИЕ ССЫЛКИ

Если объект ссылается сам на себя, рекурсивный тип **зациклится**:

```typescript
interface Node {
  value: string;
  parent: Node;  // цикл!
}

type A = DeepReadonly<Node>; // ❌ Type instantiation is excessively deep
```

**Решение:** TypeScript **сам** ограничивает глубину рекурсии (~5-10 уровней). Но иногда это ломает код. Обходные пути:
- Ограничение глубины (`Depth extends number`)
- Обработка циклов через «сентинельные» типы (сложно)

**В большинстве случаев** TypeScript справляется. Если ошибка — используйте `Depth`:

```typescript
type DeepReadonly<T, Depth extends number = 5> = Depth extends 0
  ? T
  : T extends (...args: any[]) => any
  ? T
  : T extends Date
  ? T
  : T extends Array<infer U>
  ? ReadonlyArray<DeepReadonly<U, Prev<Depth>>>
  : T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K], Prev<Depth>> }
  : T;
```

Где `Prev<Depth>` — уменьшение числа (реализуется через кортеж).

**Это продвинутая тема.** Пока просто знайте, что она существует.

---

## 7. DEEPPARTIAL

Аналогично `DeepReadonly`, но делает всё опциональным:

```typescript
type DeepPartial<T> = T extends (...args: any[]) => any
  ? T
  : T extends Date
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;
```

---

## 8. DEEPREQUIRED

```typescript
type DeepRequired<T> = T extends (...args: any[]) => any
  ? T
  : T extends Date
  ? T
  : T extends Array<infer U>
  ? Array<DeepRequired<U>>
  : T extends object
  ? { [K in keyof T]-?: DeepRequired<T[K]> }
  : T;
```

---

## 9. ГЛУБОКАЯ КОМБИНАЦИЯ

Можно комбинировать: `DeepReadonly` + `DeepPartial`:

```typescript
type DeepReadonlyPartial<T> = T extends object
  ? { readonly [K in keyof T]?: DeepReadonlyPartial<T[K]> }
  : T;
```

---

## 10. ПРАКТИЧЕСКОЕ ПРИМЕНЕНИЕ

Рекурсивные типы используются в:
- **Redux** — `DeepReadonly<State>`
- **Immer** — `Draft<T>` (глубокая мутабельность)
- **React Query** — `DeepPartial<Data>`
- **Zod** — `DeepReadonly<Schema>`
- **Наш `deepFreeze`** — финальный проект

---

## 📝 ПРАКТИЧЕСКОЕ ЗАДАНИЕ 9

Создайте файл `src/module8/task9-recursive.ts`. Выполните все пункты:

---

1. Напишите тип `DeepReadonly<T>` (базовый), который делает объект readonly рекурсивно. Проверьте на объекте `{ name: string; address: { city: string } }`.

2. Расширьте `DeepReadonly<T>`, добавив обработку **массивов** через `ReadonlyArray<DeepReadonly<U>>`. Проверьте на `{ items: { id: number }[] }`.

3. Расширьте `DeepReadonly<T>`, добавив обработку **функций** (оставляем без изменений). Проверьте на `{ onClick: () => void; name: string }`.

4. Расширьте `DeepReadonly<T>`, добавив обработку **Date** (оставляем без изменений). Проверьте на `{ createdAt: Date; name: string }`.

5. Расширьте `DeepReadonly<T>`, добавив обработку **Map** и **Set** через `ReadonlyMap` и `ReadonlySet`. Проверьте на `{ map: Map<string, { value: number }> }`.

6. Напишите тип `DeepPartial<T>`, который делает объект опциональным рекурсивно. Проверьте на `{ name: string; address: { city: string } }`.

7. Напишите тип `DeepRequired<T>`, который делает объект обязательным рекурсивно (убирает `?`). Проверьте на `{ name?: string; address?: { city?: string } }`.

8. Напишите тип `DeepReadonlyPartial<T>`, который делает объект и readonly, и опциональным. Проверьте на объекте `User`.

9. Напишите функцию `deepFreezeShallow<T>(obj: T): DeepReadonly<T>`, которая **не** рекурсивно замораживает объект (только первый уровень). Используйте `Object.freeze`.

10. Напишите тип `DeepMutable<T>`, который убирает `readonly` рекурсивно. Проверьте на `DeepReadonly<{ name: string }>`.

---

## ✅ УСЛОВИЯ

- В каждом пункте добавьте `console.log` или пример, чтобы проверить.
- В конце файла — `export {}`.
- После написания — `pnpm run build` и `node dist/module8/task9-recursive.js`.

---

**Приступайте. Если вопросы — спрашивайте. Удачи.**