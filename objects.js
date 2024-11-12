let laptop = {
    brand: 'HP',
    color: "gray",
    price: "300$",
    bdBrand:{
        name: 'dell',
        color: 'red',
        price: {
            i5: 30000,
            i7: 40000,
            i10:50000,
        }
    }

}
console.log(laptop["brand"])
console.log(laptop["bdBrand"]["color"])
console.log(laptop["bdBrand"]["price"]["i10"])