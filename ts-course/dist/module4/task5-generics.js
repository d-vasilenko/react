"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1
function identity(value) {
    return value;
}
console.log(identity('string'));
console.log(identity(43));
// 2
function getLength(value) {
    return value.length;
}
console.log(getLength('denis'));
console.log(getLength([2, 4, 3]));
// 3
function swap(a, b) {
    return [b, a];
}
console.log(swap(20, 'denis'));
console.log(swap(20, 10));
console.log(swap('some', 'text'));
const someBox01 = {
    value: 49,
};
const someBox02 = {
    value: 'some text',
};
console.log(someBox01);
console.log(someBox02);
