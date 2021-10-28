let products = [
{id:1,name:"Acer Laptop",unitPrice:1500},
{id:2,name:"MacBook Pro",unitPrice:4500},
{id:3,name:"Sony Vaio",unitPrice:2000}
]
// map
console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
// aynı örnek
products.map(product=>console.log("<li>"+`${product.name}`+"</li>"))
console.log("</ul>")

products.map(product=>{
    console.log(products)
    console.log(`<li>${product.name}</li>`)
})
//filtere 
let filteredProducts = products.filter(product=>product.unitPrice>1500)
console.log(filteredProducts)
//reduce matematiksel işlem yapar . acc topla demek
let cartTotal = products.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(cartTotal)

let cartSpacialTotal = products
                .filter(p=>p.unitPrice>1500)
                .map(p=>{p.unitPrice = p.unitPrice*1.18
                        return p
                    })
                .reduce((acc,p)=>acc+p.unitPrice,0)
console.log("Özel Sipariş Fiyatı KDV Dahil :"+cartSpacialTotal)
