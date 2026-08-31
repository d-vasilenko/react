"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1
const arr1 = [1, 23, 34];
const arr2 = [4, 32, 89];
console.log(arr1, arr2);
// 2
const str1 = ['a', 'b', 'c'];
const str2 = ['some', 'text', 'string'];
const str3 = ['my', 'you', 'we'];
console.log(str1, str2, str3);
// 3
const cort1 = ['Denis', 46];
console.log(cort1[0]);
console.log(cort1[1]);
const one = [39];
const two = [49, 'Denis'];
const three = [29, 'Milana', true];
console.log(one);
console.log(two);
console.log(three);
const t1 = ['denis', 5];
console.log(t1);
const t2 = ['milana', 4, 6];
console.log(t2);
const t3 = ['peter', 4, 9, 84];
console.log(t3);
// 6
const directions = ['up', 'down', 'left', 'right'];
console.log(typeof directions);
function getDirection(index) {
    return directions[index];
}
console.log(getDirection(1));
// 7
function tupleToString(tuple) {
    return `Name: ${tuple[0]}, Age: ${tuple[1]}`;
}
console.log(tupleToString(['denis', 44]));
// 8
const nums = [1, 2, 3, 4];
console.log(nums.map((item) => item * 2));
// 9
const strArray = ['denis', 'some', 'foo', 'dises', 'go'];
const result = strArray.filter((item) => item.length > 3);
console.log(result);
// 10
const numArray = [1, 2, 3, 4];
const sum = numArray.reduce((acc, item) => acc + item, 0);
console.log(sum);
