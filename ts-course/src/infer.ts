type ArrayValumeType<T> = T extends (infer Item)[] ? Item : T;

type ArrayItem = ArrayValumeType<number[]>;

type IsStirng<T> = T extends string ? true : false;

type A = IsStirng<string>;
type B = IsStirng<number>;

type IsArray<T> = T extends unknown[] ? true : false;

type C = IsArray<string[]>;
type D = IsArray<string>;

type ElemmentType<T> = T extends (infer U)[] ? U : never;

type E = ElemmentType<string[]>;
type J = ElemmentType<number[]>;