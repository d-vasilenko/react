// 1
type DeepReadonly1<T> = T extends object
  ? { readonly [P in keyof T]: DeepReadonly1<T[P]>}
  : T

interface I1 {
  name: string;
  address: { city: string };
}

type I1DeepReadonly = DeepReadonly1<I1>;

// 2
type DeepReadonly2<T> = T extends (infer U)[]
  ? DeepReadonly1<U>[]
  : T extends object
    ? { readonly [P in keyof T]: DeepReadonly2<T[P]>}
    : T

interface I2 {
  items: {
    id: number
  }[]
}

type I2DeepReadOnly2 = DeepReadonly2<I2>;


type DeepReadonly3<T> = T extends (infer U)[]
  ? ReadonlyArray<DeepReadonly3<U>>
  : T extends object
    ? { readonly [P in keyof T]: DeepReadonly3<T[P]>}
    : T

type I2DeepReadOnly3 = DeepReadonly3<I2>;


// 3
type DeepReadonly4<T> = T extends (...args: unknown[]) => unknown
  ? T
  : T extends (infer U)[]
    ? ReadonlyArray<DeepReadonly4<U>>
    : T extends object
      ? { readonly [P in keyof T]: DeepReadonly4<T[P]>}
      : T


type I3 = DeepReadonly4<{ onClick: () => void, name: string }>;

// 4
type DeepReadonly5<T> = T extends (...args: any[]) => any
  ? T
  : T extends Date
    ? T
    : T extends (infer U)[]
      ? ReadonlyArray<DeepReadonly5<U>>
      : T extends object
        ? { readonly [P in keyof T]: DeepReadonly5<T[P]>}
        : T

type I4 = DeepReadonly5<{ createAt: Date; name: string }>;

// 5


export {}