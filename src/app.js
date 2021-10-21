console.log("Merhaba Dünya!")
console.log ("Benim Adım Murat")
//request istek
// response cevap

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