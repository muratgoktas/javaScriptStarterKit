let cart = [
    {id:1,productName:"Telefon",quantity:13,unitPrice:1300},
    {id:2,productName:"Computer",quantity:12,unitPrice:5000},
    {id:3,productName:"Printer",quantity:34,unitPrice:1500},
    {id:4,productName:"Keyboard",quantity:6,unitPrice:12},
    {id:5,productName:"Bardak",quantity:16,unitPrice:20},
    {id:6,productName:"Kitap",quantity:51,unitPrice:32}
]
// Map
cart.map(product=>console.log(product.productName))
cart.map(product=>{
    console.log(product.productName+" : "+product.quantity*product.unitPrice)
})

// Filter
let quantityOver15 = cart.filter(product=>product.quantity>15)
console.log(quantityOver15)

// Reduce
let total=cart.reduce((acc,product)=>acc+ product.unitPrice*product.quantity,0)
console.log("Total :"+total)

function addToCart(sepet) {
    sepet.push({id:7,productName:"IPod",quantity:23,unitPrice:450})
}

addToCart(cart)
console.log(cart)

let sayi=10
function sayiTopla(number) {
    number +=1
}
sayiTopla(sayi)
console.log(sayi)