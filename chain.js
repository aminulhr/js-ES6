const data = [{id: 1, name: 'HP', price: 24000}, {id: 1, name:'makbook', price: 120000}
]
console.log(data.name) //undefined  আসবে কারন এটা arrray of object
console.log(  data[0].price) // তাই আগে Array ar index number  দিতে হবে।
console.log(data[1].price) 



//Most important

const user = {
    name: 'Aminul',
    id: 3434,
    address: {
        village: 'surasram',
        union: 'Gangail',
        upazila: 'Nandail',
        street: {
            bari: 'boro bari',
            road: 'village road'
        }
    }
}


const user2 = {
    name: 'Haque',
    id: 3470,
    address: {
        village: 'surasram',
        upazila: 'Nandail'
    }
}
console.log(user.address.street?.bari)
console.log(user2.address.street?.bari) // যদি এখানে ? চিহ্ন না দেই তাহলে ইরর আরবে। এটাকে বলে  optional chaning ( যদি মান পাওয়া যায় তবে,সামনে যাও, অন্যথায় undefine আসবে but Error আসবে না )
