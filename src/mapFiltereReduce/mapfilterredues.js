let cart = [
    {id:1,productName:"telefon",quantity:3,unitPrice:15000},
    {id:2,productName:"saat",quantity:4,unitPrice:100},
    {id:3,productName:"kitap",quantity:4,unitPrice:40},
    {id:4,productName:"fincan",quantity:12,unitPrice:300},
    {id:5,productName:"kulaklık",quantity:2,unitPrice:50},
    {id:6,productName:"pil",quantity:20,unitPrice:75}

]
//MAP c# foreach
//iterait eder veya yeni array oluşturur. Map te
//product takma isim
console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName+":"+product.quantity*product.unitPrice+"</li>")
})
console.log("</ul>")
//FILTER c# daki where gibi.
let quantityOver3 =cart.filter(product=>product.quantity>3)
console.log(quantityOver3)
// REDUCE
// 0 acc(accumulator) başlatığınız değer.
let total = cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)
console.log(total)

//SPA single page aplication 
// Referans tip
function addToCart(sepet){
    sepet.push({id:7,productName:"tarak",quantity:6,unitPrice:5})
}

addToCart(cart)
console.log(cart)

// değer tip
let sayi=10
function sayiTopla(params) {
    params=params+1
}
sayiTopla(sayi)
console.log(sayi)