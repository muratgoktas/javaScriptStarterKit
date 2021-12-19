// Class 
function Customer(id,firstName,lastName){//constructor
    this.id=id
    this.firstName=firstName //public
    this.lastName=lastName

    let someField="some value" //private

    this.someOperation = function (){ // method operation
        alert("operation")
    }
}
let murat = new Customer(1,"Murat","GÖKTAŞ") //counstructor değerleri
murat.someOperation()
// Class end
// Inheritance Miras
function Person(firstName,lastName) {
    this.firstName=firstName
    this.lastName=lastName
}
function Customer(creditCardNumber){
    this.creditCardNumber=creditCardNumber
}
Customer.prototype=new Person("Hüseyin","Göktaş")
let huseyin = new Customer("12345654")
alert(huseyin.firstName+" "+huseyin.lastName+" "+huseyin.creditCardNumber)
// Inheritance End
// Abstract Classes
let User  ={ //User newlenemz Abstract bir classtır
    name: "None", //fake tanımlama
    email:"None",
    sendEmail:function () {
        alert("Mail send to:"+this.name+"/"+this.email)
    }
}
function Employee(name,email) {
    this.name=name
    this.email=email
    //Other staff
}
function Customer(name,email){
    this.name=name
    this.email=email
    //Other staff
}

Employee.prototype = User() //User Abstract classdan inheritance ediliyor.
let someEmployee =new Employee("Murat GÖKTAŞ","mcs.goktas@gmail.com")
someEmployee.sendEmail()
Customer.prototype = User()// User Abstruct Clasından Inheritance ediliyor
let someCustomer =new Customer("Birgül Çetin","brgctn@hotmail.com")
someCustomer.sendEmail()
//Abstract classes end
//Interface Class
function sendEmail(personInterface) { // Interface
    let to = personInterface.email
    let name =personInterface.name
    let send = function () {
        alert("Mail sent to :"+name+"/"+to)
    }   
    send()
}
function CustomerOther(name,eMail) {
    this.name=name
    this.eMail=eMail
    //Other staff
}
function EmployeeOther(name,eMail) {
    this.name=name
    this.eMail=eMail
    //Other staff
}
 let someCustomerOther = new CustomerOther("Melike Göktaş","melike@biryetmez.com")
 sendEmail(someCustomerOther)
 
 let someEmployeeOther = new EmployeeOther("Kayra Göktaş","kayra@biryetmez.com")
 sendEmail(someEmployeeOther)