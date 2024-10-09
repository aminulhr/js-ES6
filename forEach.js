//for Each এর কাজ map মতোই কিন্তু map return করে for each return করেনা।  এর কাজ হলো কোনো একটা array ar প্রত্যেকটা উপাদানের উপর একটা করে ফাংশন চালাবে। কিন্তু রিটার্ন করবে না।

const num1 = [23,32,45,65,7,6,5,6]
const getNum1 = num1.forEach(num1 => num1 + 10)
console.log(getNum1)