type ArrayValumeType<T> = T extends (infer Item)[] ? Item : T;

type ArrayItem = ArrayValumeType<number[]>;