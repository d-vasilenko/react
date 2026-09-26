"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 49,
    name: 'some name',
    email: 'some@email.com'
};
const key2 = 'name';
// 2
const id = 4930;
console.log(id);
// 6
function updateProperty(obj, key, value) {
    obj[key] = value;
}
updateProperty(user, 'id', 100);
console.log(user.id);
const someConfigKey = 'url';
const status = 'status';
const message = 'message';
// 10
function shallowFreezeWithKeysof(obj) {
    return Object.freeze(obj);
}
const user2 = { name: 'alice', age: 20 };
const forzen = shallowFreezeWithKeysof(user2);
console.log(Object.isFrozen(forzen));
