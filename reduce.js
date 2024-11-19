// সব গুলোকে একসাথে নিয়ে কিছু একটা করবে।
const number = [22, 44, 5, 6, 6, 7, 8, 5, 4];
const total = number.reduce((previous, current) => previous + current, 0);
console.log(total);

const num2 = [34, 43, 5, 5, 6, 8, 9, 23];
// 2 ta parameter dite hobe, 1 ta hole previous value ar onno ta holo current value
const sum = num2.reduce((a, b) => a + b, 0);
console.log(sum);
