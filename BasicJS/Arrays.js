let shoppingCart = []

shoppingCart.push('Book')
console.log(shoppingCart)

shoppingCart.push('Meat')
console.log(shoppingCart)

shoppingCart.push('Pen')
console.log(shoppingCart)

shoppingCart.push('Food')
console.log(shoppingCart)

shoppingCart.pop()
console.log(shoppingCart)

let nums = [1, 3, 2, 8, 3, 1, 9]
console.log(nums)
let numsMult = nums.map((n) => n * n)
console.log(numsMult)
let EvenNums = nums.filter((n) => n % 2 == 0)
console.log(EvenNums)
let products = [
    { name: 'p1', price: 200 },
    { name: 'p2', price: 100 },
    { name: 'p1', price: 320 }
]

let findProName = products.find((p) => p.name == 'p2')
console.log(findProName)

let UpdatePriceFound = products.map((p) => {
    if (p.price == findProName.price) { return { name: p.name, price: p.price + 20 } }
    else { return p }
})
console.log(UpdatePriceFound)