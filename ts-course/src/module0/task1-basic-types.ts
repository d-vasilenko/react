const myName: string = 'John';

const myAge: number = 20;

const isStudent: boolean = true;

const myNull: null = null;

const myUndefined: undefined = undefined;

function greetUser(name: string): void {
  console.log(`Hello, ${name}!`);
}

greetUser("Denis Vasilenko");

const result: number = 10 + 5;

const isAdult: boolean = myAge >= 18;
 
const message: string = `${myName} is ${myAge} years old`;


console.log(result);
console.log(isAdult);
console.log(message);

export {}