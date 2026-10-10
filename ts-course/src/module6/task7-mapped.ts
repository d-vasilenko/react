interface User1 {
  id: number;
  name: string;
  role: string[];
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

type MyReadonlyUser = MyReadonly<User1>;

type MyPartial<T> = {
  [P in keyof T]?: T[P];
}

type MyPartialUser = MyPartial<User1>;

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
}

type MutableUser = Mutable<MyReadonlyUser>;

type MyRequire<T> = {
  [P in keyof T]-?: T[P];
};

type MyRequireUser = MyRequire<MyPartialUser>;

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}

type MyPickUser = MyPick<User1, 'id' | 'name'>;

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
}

type MyOmitUser = MyOmit<User1, 'role' | 'id'>;

type MyRecord<K extends PropertyKey, V> = {
  [P in K]: V;
}

type SomeKeys = 'some' | 'keys' | 'name' | 'age';

type MyRecordTest = MyRecord<SomeKeys, string>;

type Nullable<T> = {
  [P in keyof T]: T | null;
}

type MyNullable = Nullable<User1>;

type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
}

type MyGetters = Getters<User1>;

type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T]

type OnlyStrings<T> = {
  [P in StringKeys<T>]: T[P];
}


type OnlyStringsUser = OnlyStrings<User1>;

type ReadonlyPartial<T> = {
  readonly [P in keyof T]?: T[P];
}

type ReadonlyPartialUser = ReadonlyPartial<User1>;

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]; 
}

interface Address {
  city: string;
  street: string;
  postal: number;
}
interface Person {
  id: number;
  name: string;
  address: Address;
}

type DeepPartialPerson = DeepPartial<Person>;

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]; 
}

type DeepReadonlyPerson = DeepReadonly<Person>;

type DeepGetters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: T[P] extends object ? DeepGetters<T[P]> : T[P]; 
}

type DeepGettersPerson = DeepGetters<Person>;

type MyOnlyStrings<T> = {
  [P in keyof T as T[P] extends string ? P : never]: T[P];
}

type MyOnlyStringsPerson = MyOnlyStrings<Person>;