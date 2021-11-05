function addToCart(product){
    console.log("Sepete eklendi! "+product.stocks+" adet."+ product.name +" fiyatı: "+product.quantity*product.unitPrice)
}
let product={name:"Ürün seçilmedi.",unitPrice:0,stocks:0,quantity:0}
let productA ={name:"Bilgisayar",unitPrice:12000,stocks:30,quantity:4}

let productB ={name:"Yazıcı",unitPrice:1000,stocks:45,quantity:4}
let productC = {name:"Klavye",unitPrice:30,stocks:340,quantity:56}
let productD= {name:"Mouse",unitPrice:130,stocks:30,quantity:5}

productD=productC;
productC.name="HOPÖRLÖR"
addToCart(productA)
addToCart(productB)
addToCart(productC)
addToCart(1,2,3,0)
addToCart(productD)




// Function u değişkene eşitleme... () sen function demek ve değerinde {} içindeki
let sayMerhaba= ()=>{
     console.log("Merhaba gençler.")
 }

 // Veya fonction bu şekilde de eşitleyebiliriz.
 let sayAllah = function(){
     console.log("Allah birdir!")
 }

 sayAllah()

 sayMerhaba()
 function addList(words) {
    console.log(words)
}

let objectArray=[
    {trName:"Deney",engName:"Expriment"},
    {trName:"Mahsur Kalmak",engName:"Trap"},
    {trName:"Yıkılmak",engName:"Coillapsed"},
    {trName:"Sırasında,Esnasında",engName:"During"}
]
addList(objectArray)
//rest ... demek. fonctionda sona bırakımalıdır.
function add(bisey,...numbers) {
    let total=0
    for (let index = 0; index < numbers.length; index++) {
       console.log(numbers[index])
       total=total+numbers[index]
        
    }
    console.log("total numbers :"+total)
    console.log("message:"+bisey)
}

add(12)
add(13,56,78,33)
add("bisey",34,56,77,89)
//spread rest zıttını yapar ...numbers şeklinde kullanılır.
console.log(Math.max(12,345,6,7799,898,900))
let numbers = [12,345,6,7799,898,900]
console.log(Math.max(numbers))
console.log(Math.max(...numbers)) // spread ayrıştırır.

//reack örneği
let regions  = ["marmara","doguAnadolu","icAnadolu","Ege","Akdeniz","Karadeniz","guneyDoguAnadolu"]
console.log(regions)

let [marmara,doguAnadolu,icAnadolu,Ege,Akdeniz,Karadeniz,guneyDoguAnadolu,[cities1,cities2,cities3]] = [
    {city:"Kocaeli",number:41},
    {city:"Erzurum",number:25},
    {city:"Ankara",number:6},
    {city:"İzmir",number:35},
    {city:"Muğla",number:48},
    {city:"Trabzon",number:61},
    {city:"Diyarbakır",number:21},
    [
        ["İstanbul","Yalova"],
        ["Kars","Erzincan"],
        [],
        ["Manisa"],
        ["Bodrum","Aydın"],
        ["Samsun","Sinop"],
        ["ŞanlıUrfa"]
    ]
]
console.log(marmara)
console.log(cities2)

let newProductName,newQuantity,newUnitprice
({productName:newProductName,quantity:newQuantity,unitPrice:newUnitprice}
= {productName:"Elma",quantity:12,unitPrice:33})

console.log("Product Name :"+newProductName)
console.log("Quantity :"+newQuantity)
console.log("Unit Price:"+newUnitprice)

