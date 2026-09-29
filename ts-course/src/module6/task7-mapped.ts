
interface User {
  id: number;
  name: string;
}

interface User2 {
  id?: number;
  number?: string;
}

interface User3 {
  readonly id: number;
  readonly name: string;
}

// 1
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type MyReadonlyUser = MyReadonly<User>;

// 2
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type MyPartialUser = MyPartial<User>;

// 3

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

type MyRequiredUser = MyRequired<User>;

// 4
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
}

type MutableUser = Mutable<User3>;

export {}