// 1
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 49,
  name: 'some name',
  email: 'some@email.com'
}


type UserKeys = keyof User;
const key2: UserKeys = 'name';

// 2
const id: User['id'] = 4930;
console.log(id);

// 3
type IdAndName = User['id' | 'name'];

// 4 
type AllKeys = User[keyof User];
// все типы ключей User
// 5
interface Company {
  name: string;
  address: { city: string, street: string };
}

type CityType = Company['address']['city'];

// 6
function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

updateProperty(user, 'id', 100);
console.log(user.id);

7
function getKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}

// 8 
interface Config {
  url: string;
  timeout: number;
  retries: number;
}

type ConfigKey = keyof Config;

const someConfigKey: ConfigKey = 'url';

// 9
interface Response<T> {
  data: T;
  status: number;
  message: string;
}

type AllRespoceKeys = keyof Response<unknown>;

const status: AllRespoceKeys = 'status';
const message: AllRespoceKeys = 'message';

// 10
function shallowFreezeWithKeysof<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

const user2 = { name: 'alice', age: 20};
const forzen = shallowFreezeWithKeysof(user2);
console.log(Object.isFrozen(forzen));

// как сделать проверку через keyof?


export {}