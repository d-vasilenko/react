// 1
const arr1: number[] = [1, 23, 34];

const arr2: Array<number> = [4, 32, 89];

console.log(arr1, arr2);

// 2
const str1: readonly string[] = ['a', 'b', 'c'];

const str2: ReadonlyArray<string> = ['some', 'text', 'string'];

const str3: string[] = ['my', 'you', 'we'] as const;

console.log(str1, str2, str3);

// 3
const cort1: [string, number] = ['Denis', 46];

console.log(cort1[0]);
console.log(cort1[1]);

// 4
type SomeTuple = [number, string?, boolean?];

const one: SomeTuple = [39];
const two: SomeTuple = [49, 'Denis'];
const three: SomeTuple = [29, 'Milana', true];

console.log(one);
console.log(two);
console.log(three);

// 5
type AnotherTuple = [string, ...number[]];

const t1: AnotherTuple = ['denis', 5];
console.log(t1);

const t2: AnotherTuple = ['milana', 4, 6];
console.log(t2);

const t3: AnotherTuple = ['peter', 4, 9, 84];
console.log(t3);

// 6
const directions = ['up', 'down', 'left', 'right'] as const;
type Directions = typeof directions;
console.log(typeof directions);
function getDirection<I extends number>(index: I): Directions[I] {
  return directions[index];
}

console.log(getDirection(1));

// 7
function tupleToString(tuple: [string, number]): string {
  return `Name: ${tuple[0]}, Age: ${tuple[1]}`;
}

console.log(tupleToString(['denis', 44]));

// 8
const nums: Array<number> = [1, 2, 3, 4];
console.log(nums.map((item: number) => item * 2));

// 9
const strArray: Array<string> = ['denis', 'some', 'foo', 'dises', 'go'];
const result: Array<string> = strArray.filter((item) => item.length > 3);
console.log(result);

// 10
const numArray: Array<number> = [1, 2, 3, 4];
const sum: number = numArray.reduce((acc, item) => acc + item, 0);
console.log(sum);

export {};