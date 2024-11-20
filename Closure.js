function rosts() {
  let rost = 0;
  return function () {
    rost++;
    return rost;
  };
}
const givemeRost = rosts();

console.log(givemeRost());
console.log(givemeRost());
console.log(givemeRost());
