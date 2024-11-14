// object Destructure
const book = {
  name: "Time Management",
  writer: "Ismail Kamdar",
  page: "150",
  price: 130,
};
const { name, writer, page, price: dam } = book;
console.log(page);
console.log(dam); //change variable name
