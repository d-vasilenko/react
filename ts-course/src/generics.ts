type SuperType = {
  name: string;
}
type SubType = SuperType & {
  age: number;
}

const subtype1: SubType = {
  name: 'subtype1 name',
  age: 40,
};

const supertype1: SuperType = subtype1;
console.log(supertype1);

const supertype2: SuperType = {
  name: 'next name',
};

//const subtype2: SubType = supertype2;

