"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1
function identity(value) {
    return value;
}
console.log(identity("string"));
console.log(identity(43));
// 2
function getLength(value) {
    return value.length;
}
console.log(getLength("denis"));
console.log(getLength([2, 4, 3]));
// 3
function swap(a, b) {
    return [b, a];
}
console.log(swap(20, "denis"));
console.log(swap(20, 10));
console.log(swap("some", "text"));
const someBox01 = {
    value: 49,
};
const someBox02 = {
    value: "some text",
};
console.log(someBox01);
console.log(someBox02);
// 5
function merge(a, b) {
    return {
        ...a,
        ...b,
    };
}
console.log(merge({ name: "denis" }, { age: 43 }));
const someInterface = {
    data: { name: "some text" },
    status: 200,
};
console.log(someInterface);
// 7
class Stack {
    constructor() {
        this.dataArray = [];
    }
    push(item) {
        this.dataArray.push(item);
    }
    pop() {
        return this.dataArray.pop();
    }
    getData() {
        return [...this.dataArray];
    }
}
const testClass = new Stack();
testClass.push(49);
testClass.push(39);
testClass.push(20);
console.log(testClass.pop());
console.log(testClass.getData());
// 8
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty({ id: 1, name: "Alice" }, "name"));
// 9
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray("wrap string in array"));
// 10
function shallowFreeze(obj) {
    return Object.freeze(obj);
}
console.log(Object.isFrozen(shallowFreeze({ name: "some name" })));
