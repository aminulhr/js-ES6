const book = [
  { name: "Time Management", writer: "Ismail Kamdar", page: "150", price: 130 },
];
// console.log(book.name); // can't access value , because its a "Array of Obj"
// console.log(book[0].name);

const book2 = [
  { name: "Time Management", writer: "Ismail Kamdar", page: "150", price: 130 },
  {
    name: "Imaner Dabi",
    writer: "saber Abdullah",
    chapter: [{ first: "Iman", page: 7, topic: "Tahrik a Iman" }],
  },
];
console.log(book2[1].chapter[0].topic);
