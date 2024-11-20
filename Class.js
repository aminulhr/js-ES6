// class ar nam Capital latter diya suru hobe
class Vehical {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("gari chole na ");
  }
}
class Bus extends Vehical {
  constructor(name, price, seat, ticket) {
    super(name, price);
    this.seat = seat;
    this.ticket = ticket;
  }
}
