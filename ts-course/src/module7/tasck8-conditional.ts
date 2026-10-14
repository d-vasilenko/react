// 1
type IsString<T> = T extends string ? true : false;
type A1 = IsString<string>;
type A2 = IsString<'some'>;
type A3 = IsString<number>;

// 2
type IsArray<T> = T extends unknown[] ? true : false;
type A4 = IsArray<string[]>;
type A5 = IsArray<string>;

// 3
type ElementType<T> = T extends (infer Item)[] ? Item : never;
type A6 = ElementType<string[]>;
type A7 = ElementType<[]>;

// 4
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type A8 = UnwrapPromise<Promise<string>>;
type A9 = UnwrapPromise<number>;

// 5
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type A10 = MyReturnType<() => string>;
type A11 = MyReturnType<(a: number, b: number) => number>; 

// 6
type MyParameters<T> = T extends (...args: infer P) => unknown ? P : never;
type A12 = MyParameters<(a: number, b: string) => void>;

// 7
type MyExclude<T, U> = T extends U ? never : T;
type A13 = MyExclude<"a" | "b" | "c", "a">;

// 8
type MyExtract<T, U> = T extends U ? T : never;
type A14 = MyExtract<"a" | "b" | "c", "a" | "c">;

// 9
type MyNonNullable<T> = T extends null | undefined ? never : T;
type A15 = MyNonNullable<string | null | undefined>;

// 10
type UnwrapRef<T> = T extends { value: infer U } ? U : never;
type A16 = UnwrapRef<{ value: string }>;
type A17 = UnwrapRef<string>;


export {}