let cart=[
    {id:1,productName:"Phone",quantity:12,unitPrice:1500},
    {id:2,productName:"Mouse",quantity:120,unitPrice:11},
    {id:3,productName:"Keyboard",quantity:23,unitPrice:15},
    {id:4,productName:"LcdScreen",quantity:12,unitPrice:600},
    {id:5,productName:"FlashDisk",quantity:100,unitPrice:200},
    {id:6,productName:"Battary",quantity:34,unitPrice:150}
]
console.log("<ul>")
cart.map(product=>console.log("<li>"+product.productName+"</li>"))
console.log("</ul>")
