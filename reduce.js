// সব গুলোকে একসাথে নিয়ে কিছু একটা করবে। 
const number = [ 22, 44,5,6,6,7,8,5,4]
const total = number.reduce((previous, current) => previous + current,0)
console.log(total)

const num2 = [34,43,5,5,6,8,9,23]
const sum = num2.reduce((a,b)=>a+b,0)
console.log(sum)