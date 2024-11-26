// setInterbal bar bar exicute hoy
let num = 0;
const clockID = setInterval(() => {
  num++;
  if (num > 5) {
    clearInterval(clockID);
  }
  console.log(clockID, num);
}, 2000);
