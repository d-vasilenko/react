
# 📚 МОДУЛЬ 3: МАССИВЫ И КОРТЕЖИ — ТЕОРИЯ

---

## 1. ДВА СПОСОБА ЗАПИСИ ТИПА МАССИВА

```typescript
// Синтаксис с квадратными скобками
const numbers: number[] = [1, 2, 3];

// Синтаксис с Array<T> (дженерик)
const strings: Array<string> = ['a', 'b', 'c'];
```

Оба варианта эквивалентны. Второй часто используется в дженериках.

---

## 2. `readonly` МАССИВЫ

Массив можно сделать неизменяемым:

```typescript
const readOnlyNumbers: readonly number[] = [1, 2, 3];
// readOnlyNumbers.push(4); // ❌ Ошибка! push не существует на readonly

// Или через ReadonlyArray<T>
const another: ReadonlyArray<number> = [1, 2, 3];
```

`readonly` запрещает изменять массив (push, pop, splice, присвоение по индексу и т.д.).

---

## 3. КОРТЕЖИ (TUPLE)

Кортеж — это массив **фиксированной длины**, где каждый элемент имеет свой тип.

```typescript
// Кортеж из двух элементов
let person: [string, number] = ['Alice', 30];

// Доступ по индексу
console.log(person[0]); // string
console.log(person[1]); // number

// Ошибка: неверная длина
// person = ['Bob', 25, true]; // ❌

// Ошибка: неверный тип элемента
// person = [30, 'Alice']; // ❌
```

---

## 4. ОПЦИОНАЛЬНЫЕ ЭЛЕМЕНТЫ В КОРТЕЖАХ

Элементы кортежа можно сделать опциональными:

```typescript
type OptionalTuple = [string, number?, boolean?];

const t1: OptionalTuple = ['a'];           // OK
const t2: OptionalTuple = ['a', 1];        // OK
const t3: OptionalTuple = ['a', 1, true];  // OK
// const t4: OptionalTuple = ['a', true]; // ❌ Ошибка: порядок важен
```

---

## 5. ОСТАТОЧНЫЕ ЭЛЕМЕНТЫ (REST) В КОРТЕЖАХ

Можно указать, что в конце кортежа может быть произвольное количество элементов одного типа:

```typescript
type StringNumberTuple = [string, ...number[]];

const t1: StringNumberTuple = ['a'];       // OK
const t2: StringNumberTuple = ['a', 1];    // OK
const t3: StringNumberTuple = ['a', 1, 2, 3]; // OK
// const t4: StringNumberTuple = [1, 'a']; // ❌ Ошибка
```

---

## 6. `as const` ДЛЯ МАССИВОВ И КОРТЕЖЕЙ

`as const` делает массив **readonly** и сохраняет **конкретные литеральные типы**:

```typescript
const colors = ['red', 'green', 'blue'] as const;
// Тип: readonly ['red', 'green', 'blue']

// colors[0] = 'yellow'; // ❌ Ошибка: readonly

// Вывод типа: не string[], а конкретные литералы
function getColor(index: number): 'red' | 'green' | 'blue' {
  return colors[index]; // OK
}
```

---

## 7. ТИПИЗАЦИЯ МЕТОДОВ МАССИВОВ

`map`, `filter`, `reduce` тоже имеют типы:

```typescript
const numbers: number[] = [1, 2, 3];
const doubled: number[] = numbers.map((n: number): number => n * 2);

// Можно использовать дженерики
const strings: string[] = numbers.map<string>((n): string => String(n));
```

---

## 📝 ПРАКТИЧЕСКОЕ ЗАДАНИЕ 4

Создайте файл `src/module3/task4-arrays.ts`. Выполните пункты:

1. Создайте массив чисел через `number[]` и через `Array<number>`. Выведите оба.

2. Создайте `readonly` массив строк. Попробуйте изменить его — убедитесь, что TypeScript ругается (закомментируйте ошибочную строку).

3. Создайте кортеж `[string, number]`. Обратитесь к элементам по индексам и выведите их.

4. Создайте кортеж с опциональными элементами `[number, string?, boolean?]`. Создайте три разных варианта (с 1, 2 и 3 элементами) и выведите.

5. Создайте кортеж с rest-элементами: `[string, ...number[]]`. Создайте варианты с 1, 2 и 4 элементами.

6. Создайте массив с `as const`: `['up', 'down', 'left', 'right'] as const`. Выведите его тип через `typeof`. Напишите функцию, которая принимает индекс и возвращает значение из этого массива (тип возврата должен быть соответствующим литералом).

7. Напишите функцию, которая принимает кортеж `[string, number]` и возвращает строку: `"Name: Alice, Age: 30"`.

8. Создайте массив чисел и примените `map`, чтобы удвоить каждый элемент. Выведите результат.

9. Создайте массив строк и отфильтруйте его, оставив только строки длиной > 3.

10. Создайте массив чисел и вычислите сумму через `reduce`. Выведите результат.

В конце файла добавьте `export {}`.

---

## ✅ УСЛОВИЯ

- Никаких готовых решений. Только ваши попытки.
- После выполнения — `pnpm run build` и `node dist/module3/task4-arrays.js`.
- Покажите код и вывод.

**Если вопросы по теории — спрашивайте. Удачи.**