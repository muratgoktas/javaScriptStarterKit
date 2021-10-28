console.log("Merhaba Dünya!")
console.log ("Benim Adım Murat")
// tip güvenli bir değil.
// bu sebeple typescript diye üst seviye microsfot geliştridiği bir dil. Saf javaya çeviriyor.
//request istek
// response cevap
// değişken tanımlama keyleri : var, let, const
var dolarBugun = 10.20
let dolarDun = 9.20
// var yerine let kullanacağız. Sebebi
{
    var dolarBugun=10.05
    let dolarDun = 8.50
}
console.log(dolarBugun) // var kulanıldığı için parantez içindeki değeri en son değer olarak kullandı ve hata yaptı.
console.log(dolarDun) // let kullanıldığı için parentez içindeki değeri kullanmadı. Doğrusu bu. Başka yerde(fonksiyonda entegre olan başka programlarda kullanılan aynı isimli değişkenler var ile en değişebilir buda karışıklığa sebebiyet verir.)
// var yerine let kullanılacak kesin kural...
const euroDun=11
// euroDun =12.11 
//  euroDun is read-only' hatası verir. const sabit demek. Değişmez.
console.log(euroDun)
//arrays
//camelCasing ilk kelimenin ilk harfi küçük diğer kelimelerin ilk harflari büyük
//PascalCasing kelimelerin ilk harflari büyük.

let bankaKredileri = ["Araç Kredisi","Konut Kredisi","Arsa Kredisi","İhtiyaç Kredisi"]
console.log("<ul>")
for (let index = 0; index < bankaKredileri.length; index++) {
    
    console.log("<li>")
    console.log(bankaKredileri[index])
    console.log("</li>")
}
console.log("</ul>")

console.log(bankaKredileri)
// objects object notation
let student = {id:1,name:"Murat GÖKTAŞ",birthDay:1974}
//console.log(student)
function save(ogrenci,puan=10) {
    console.log(ogrenci.name + " :" + puan)
}
save(student);
save(student,100)
save("Saved!")
save(bankaKredileri,1453)
function deleted(ogrenci) {
    console.log(ogrenci.name+" deleted!")
}
deleted(student);

function modify(puan=10,ogrenci){
    console.log(ogrenci.name+" : "+puan)
}
// modify(student) burada ilk değer puan olduğundan hata veriyor. Bunu için undefined yaparak puan yok defult puan değerini kullan demek. Aşağıda örneği var.
modify(undefined,student)
let students = ["Murat GÖKTAŞ","Melike Tuana","Kayra Deniz"]
console.log(students)
let students2 = [student,{id: "1", name: "Birgül" }]
console.log(students2)
let students3 = [{id:2,name:"Sakarya"},"Ali topu at.",{carModel:"BMW"}]
console.log(students3)
//Rest Spread Destructure
// Rest geriye kalan parametreler yani id ve geriye kalanlar yani ...products oluyor. Array oluşturur.
// js= Rest - c#= params - java = varArgs karşılıkları
let showProducts = function (id,...products){
    console.log(id)
    console.log(products)
}
// ...proudcts Array demek.
console.log(typeof showProducts) // typeof function
showProducts() // Bir undefine ve  boş Array döner.
showProducts(10,"Elma","Armut","Karpuz")
showProducts(10,["Elma","Armut","Karpuz"]) //Array içinde Array oldu
//Spread ayırma .Array ayırma.
let points = [103,204,3,4,5,67,89,13] //spread etti. Yani points Arrayının elemanlarını ayırdı. Listelenen sonuç artık Array değil.
console.log(...points)

console.log(Math.max(points)) // Burada Array istemez. Sonuç NaN olur.
console.log(Math.max(103,204,3,4,5,67,89,13))
// Yukarıdaki gibi yollarsak çalışır.Ve sonuç = 204 olur.
console.log(...points) // Böylede Array yollaya biliriz.
console.log(..."ABC","D",..."FGH","I",..."JK")
//Destructuring Önemli Redux ve React aşırı kullanılıyor.
let populations = [10000,20000,30000,[40000,50000]] // Bu değerleri ayrı değişkenlere aktarmak. 
let [small,medium,high,[veryHigh,maximum]] = populations
console.log("small : "+small)
console.log("medium : "+medium)
console.log("high : "+high)
console.log("veryHigh :"+veryHigh)
console.log("maximum :"+maximum)
// fonction da Arrayı Destructuring yapma.
function someFuction([small1],number) {
    console.log("small1 :"+small1)
    console.log("number :"+number)
}
someFuction(populations,56)
// Object yi Destructuring yapma.
let category = {id:1,name:"Drink"}
console.log(category.id)
console.log(category["name"])
// Destructuring yapalım category objesine
let {id,name} = category;
console.log("id :"+ id)
console.log("name :"+name)

