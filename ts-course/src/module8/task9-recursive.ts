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
type DeepReadonly4<T> = T extends (...args: any[]) => any
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
type DeepReadonly6<T> = T extends Date
  ? T
  : T extends Map<infer K, infer V>
    ? ReadonlyMap<DeepReadonly6<K>, DeepReadonly6<V>>
    : T extends Set<infer S>
      ? ReadonlySet<DeepReadonly6<S>>
      : T extends (...args: any[]) => any
        ? T
        : T extends (infer U)[]
          ? ReadonlyArray<DeepReadonly6<U>>
          : T extends object
            ? { readonly [P in keyof T]: DeepReadonly6<T[P]> }
            : T

type I5 = DeepReadonly6<{ map: Map<string, { value: number }> }>

// 6
type DeepPartialV1<T> = T extends Date
  ? T
  : T extends Map<infer K, infer V>
    ? Map<K, V>
    : T extends Set<infer S>
      ? Set<S>
      : T extends (...args: any[]) => any
        ? T
        : T extends (infer U)[]
          ? Array<DeepPartialV1<U>>
          : T extends object
            ? { [P in keyof T]?: DeepPartialV1<T[P]> }
            : T

type I6 = DeepPartialV1<{ name: string; address: { city: string } }>


// 7
type DeepRequiredV1<T> = T extends Date
  ? T
  : T extends Map<infer K, infer V>
    ? Map<K, V>
    : T extends Set<infer U>
      ? Set<U>
      : T extends (...args: any[]) => any
        ? T
        : T extends (infer U)[]
          ? Array<DeepRequiredV1<U>>
          : T extends object
            ? { [P in keyof T]-?: DeepRequiredV1<T[P]> }
            : T

type I7 = DeepRequiredV1<{ name?: string; address?: { city?: string } }>


export {}