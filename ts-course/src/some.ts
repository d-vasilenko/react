interface Address {
  city: string;
  street: string;
  number: number;
  post: number;
}

interface Person {
  id: number;
  name: string;
  address: Address;
}

const adderss: Address = {
  city: 'Sochi',
  street: 'Nevsky',
  number: 8,
  post: 354057,
};

const person: Person = {
  id: 2224,
  name: 'Denis Vasilenko',
  address: adderss,
};

type MyDeepAllReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? MyDeepAllReadonly<T[P]> : T[P];
};

type MyPerson = MyDeepAllReadonly<Person>;

