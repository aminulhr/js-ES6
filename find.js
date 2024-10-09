//কন্ডিশন অনুসারে ১ টা মান নিবে এবং যেটা প্রথমে থাকবে সেটাকে নিবে। 
const num1 = [6,5,623,32,45,65,7]
const getNum1 = num1.find(num1 => num1 < 30)
console.log(getNum1)