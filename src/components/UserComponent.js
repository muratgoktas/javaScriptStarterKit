import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/Customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"


console.log("User component loaded!")
let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Murat","GÖKTAŞ","ERZURUM")
let user2 = new User(2,"Melike","GÖKTAŞ","Kocaeli")
userService.add(user1)
userService.add(user2)
console.log("________________________________________")
//console.log(userService.list())


//console.log(userService.getById(2))
//userService.list()

//Prototyping Örneği lastName yoktu sonradan direk ekledi.....
let customer = {id:1,firstName:"Murat"}
customer.lastName="Göktaş"
console.log(customer)
console.log("_________________________________")
// Loose Typing özeliği gevşek tip tanımlama yani number string değer alıyor.
let number =10
number ="Murat"

// Dynamic Typing dinamik tip
let objectAny ={id:1,name:"Pencil",color:"red"}
objectAny.stock =100 // bunlar sonra eklendi
objectAny["unitPrice"] = 23
// Arguments nesnesi
let x  = findMax(1,23,43,56,78,98,87,95)
function findMax(){
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index]>max) {
            max=arguments[index]
        }
        
    }
    return max
}
// break continue
for (let index = 0; index <= 10; index++) {
    if(index==5) {
        //break eğer bu aktif olursa 4 kadar gösterir
        continue // eğer bu aktif olursa 4 den direk 6 ya atlar 5 i göstermez.
    }
    alert(index)
    
}
// while döngüsü
let number11=1
while (number11<11) {
    alert(number11)
    number11++
}

// do while
let age= prompt("your age ?")
let result =""
do {
    result+=age
    result+="."
    age--
    
} while (age>0);
alert(result)
// Try catch finally
let number12 = prompt("5 ila 10 arasında sayı giriniz!")
function numberControl(params) {
    try {
        if (number12=="") throw "is empty"
        if(number12>10) throw "is too high"
        if(number12<5) throw "is too low"
        if(isNaN(number12)) throw "is not a number"
            
        
    } catch (err) {
        console.log(err)
    }finally{
        console.log("Don't worry we happy!")
    }
}
// Validation - https://www.w3schools.com/js/js_regexp.asp
let text = "Is this all there is12345?";
let result = `text.match(/[A-Za-z0-9]/g)`;
console.log (result)
// Result : I,s,t,h,i,s,a,l,l,t,h,e,r,e,i,s,1,2,3,4,5
// Objects constructor ve This keyword
let student = {
    id:1,
    firstName:"Melike",
    middleName:"Tuana",
    lastName:"GÖKTAŞ",
    fullName:function(){
        if(!isNull(this.middleName)){
        return this.firstName+" "+this.middleName+" "+this.lastName
        }else{
            return this.firstName+" "+this.lastName
        }
    }
}
alert(student.fullName())
//userService.loadOther()
// Prototyping
function CustomerOther(id,firstName,lastName,age,city,country) {
    this.id=id
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
    this.city=city
    this.country=country
}
var someCustomerOther = new CustomerOther(1,"Murat","Göktaş",47,"Erzurum","Türkiye")
// prototyping özeliği
someCustomerOther.eMail="mcs.goktas@gmail.com"
someCustomerOther.fullName=function () {
    return this.firstName+" "+this.lastName
}
alert(someCustomerOther.eMail)
alert(someCustomerOther.fullName())
//----------------------------------
//---- Closures özliği
var add=(function (){
    var counter=0 //burası bir kere çalışır. 
    return function (){
        return counter++
    }
})() 
//-------- let kullanılırsa sorun çözülür
userService.load()
let customerToAdd=new Customer(11,"Salih","Güçbilmez","Kocaeli","aaa55","2312432")
customerToAdd.type="customer" //Prototyping
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())


