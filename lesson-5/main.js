const numbers = [1, 2, 3, 4, 5];

const newArray = numbers.map((number) => {
  return { age: number };
});

console.log(newArray.length);
console.log(newArray);

const words = ["Hello", "World!"];

const wordsInfo = words.map((word, index) => {
  return {orderNumber: index + 1,  word: word, length: word.length };
});

console.log(wordsInfo);
