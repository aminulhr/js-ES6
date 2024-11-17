//map এর কাজ হলো কোনো একটা array ar প্রত্যেকটা উপাদানের উপর একটা করে ফাংশন চালাবে। তারপর সেগুলো array আকারে return করবে।

const eidSalami = [150, 250, 150, 250, 350, 450];
const bonus = eidSalami.map((eidSalami) => eidSalami + 50);
const shareSalami = eidSalami.map((eidSalami) => eidSalami - 100);
// console.log(bonus)
// console.log(shareSalami)
const numbers = [2, 3, 4, 5, 6, 7];
const num = numbers.map((n = n + 2));
console.log(num);
