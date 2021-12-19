
import { dataUsers } from "./myData/dataUsers.js"

export default class ISort {
    constructor(Users, sortColomn) {
        let myUsers = Users
        let mySortColomn = sortColomn
        if(mySortColomn===undefined){mySortColomn="name"}
       
        let Sort = function () {
            let result = myUsers.sort((myUserA, myUserB) => {
                if (myUserA[mySortColomn] > myUserB[mySortColomn]) {
                    return 1;
                } else if (myUserA[mySortColomn] === myUserB[mySortColomn]) {
                    return 0;
                } else {
                    return -1;
                }
            })
            return result
        }

        return Sort()
    }
}
export default class IReverseSort {
    constructor(Users, sortColomn) {
        let myUsers = Users
        let mySortColomn = sortColomn
        if(mySortColomn===undefined){mySortColomn="name"}
        let Reverse = function () {
            let result = myUsers.sort((myUserA, myUserB) => {
                if (myUserA[mySortColomn] < myUserB[mySortColomn]) {
                    return 1;
                } else if (myUserA[mySortColomn] === myUserB[mySortColomn]) {
                    return 0;
                } else {
                    return -1;
                }
            })
            return result
        }
        return Reverse()
    }
}

export default class IUserAddModel {

    constructor(personInterface, myUsers) { // Interface

        let add = function () {
            myUsers.push(personInterface)
            //alert (" Added!")
        }
        add()


    }
}
export default class IFind {
    constructor(myName, Users) {
        let name = myName
        let myUsers = Users
        let find = function () {
            try {
                let status = false
                let values = []
                for (const user of myUsers) {

                    if (user.name === name) {
                        status = true
                        values.push({ index: myUsers.indexOf(user), email: user.eMail })
                    }
                }
                if (status) {

                    for (const iterator of values) {
                        alert(iterator.index + "-" + iterator.email)
                    }
                }


            } catch (error) {
                alert("No Records Found!" + error)
                //myResult.message=("No Records Found!")
            }

        }
        find()
    }
}
export default class IDelete {
    constructor(name, myUsers) {

        let iDelete = function () {

            try {

                for (const user of myUsers) {

                    if (user.name === name) {
                        myUsers.splice(myUsers.indexOf(user), 1)
                    }
                }

                //alert(user.name + " Deleted!")
            } catch (error) {
                alert("No Records Deleted! Error message :" + error)
            }
        }
        iDelete()
    }
}
export default class IUpdate {
    constructor(newUser, myUsers) {
        let Updated = function () {
            let myUser = myUsers.find((user) => user.name === newUser.name)
            let myIndex = myUsers.indexOf(myUser)
            // alert(myIndex+"-"+myUser.CreditCardNumber)
            myUsers[myIndex] = newUser
            //alert(myUsers.CreditCardNumber)
        }
        Updated()
    }

}
export default class IGetById {
    constructor(myName, Users) {
        let name = myName
        let myUsers = Users
        let GetById = function () {
            let myUser = myUsers.find((user) => user.name === name)
            let myIndex = myUsers.indexOf(myUser)
            return myUser
        }
        return GetById()
    }

}
export default class UserBase {
    constructor(name, eMail, type) {
        this.name = name
        this.eMail = eMail
        this.type = type
        //Other staff
    }
}
export default class EmployeeOther extends UserBase {
    constructor(name, eMail, salary, type) {
        super(name, eMail, type)
        this.salary = salary
        //Other staff
    }
}
export default class CustomerOther extends UserBase {
    constructor(name, eMail, CreditCardNumber, type) {
        super(name, eMail, type)
        this.CreditCardNumber = CreditCardNumber
        //Other staff
    }
}
export default class ErrorOther extends UserBase {
    constructor(name, eMail, type, errorMessage) {
        super(name, eMail, type)
        this.errorMessage = errorMessage

        //Other staff
    }
}
//----------   Components ---------
let Employees = []
let Customers = []
let ErrorDatas = []




let someEmployeeOther = new EmployeeOther("Kayra Deniz Göktaş", "kayra@kayra.com", 35000, "Employees")
IUserAddModel(someEmployeeOther, Employees)
someEmployeeOther = new ErrorOther(" 11Deniz Göktaş", "kayra@kayra.com", 35000, "Employee")

IUserAddModel(someEmployeeOther, ErrorDatas)
someEmployeeOther = new CustomerOther("Deniz Göktaş", "deniz@kayra.com", 1234567, "Customers")
IUserAddModel(someEmployeeOther, Customers)
someEmployeeOther = new CustomerOther("Kayra Deniz Göktaş", "deniz@goktas.com", 456777, "Customers")

IUserAddModel(someEmployeeOther, Customers)

someEmployeeOther = new CustomerOther("Kayra Deniz Göktaş", "karadeniz@goktas.com", 12900292, "Customers")
IUpdate(someEmployeeOther, Customers)
let mcs = new IFind("Deniz Göktaş", Customers)

console.log(mcs)


/*
console.log(Employees)
let someCustomerOther=new CustomerOther("Murat GÖKTAŞ","muratgoktas@biryetmez.com",24000,"Employees")
*/


for (const user of dataUsers) {
    if (user.type === "Employees") {
        IUserAddModel(user, Employees)
        //myAdd(user,Employees) 

    } else if (user.type === "Customers") {
        IUserAddModel(user, Customers)
        // myAdd(user,Customers) 
    } else {
        IUserAddModel(user, ErrorDatas)
        // myAdd(user,ErrorDatas) 
    }
}

IFind("Deniz Göktaş", Customers)
console.log("-------------------------------")

console.log(Customers)



console.log(Employees)
console.log(ErrorDatas)
IDelete("Melike Tuana", Customers)
console.log("Evreka----------------------------")
console.log(Customers)
//------------------------------------------------
let myArray = ['a', 'b', 'c', 'd']; myArray.splice(2, 1);

for (var count = 0; count < myArray.length; count++) {
    console.log(myArray[count]);
}
console.log(myArray.splice(2, 1))
//--------------------------------------------------
var items = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];

while (items.indexOf('c') !== -1) {
    items.splice(items.indexOf('c'), 1);
}
console.log(items);

console.log("------------------jjjjjjj")
Customers.filter((customer) => customer.name !== "Melike Tuana")


let myObjects = EmployeeOther
myObjects = Employees
myObjects.filter((tr) => tr.name !== "Birgül Çetin")
myObjects.splice(0, 1)
for (const iterator of myObjects) {
    console.log(iterator.name)
    if (iterator.name === "Birgül Çetin") {

        console.log(myObjects.indexOf(iterator))
        // myObjects.push(iterator)
    }
}

console.log("-------------GetById------")
let deger = IGetById("Kayra Deniz Göktaş", Customers)
console.log(deger)


console.log("-----------------Sort--------------------")
let mySort = ISort(Employees)
console.log(mySort)
let myReverseSort = IReverseSort(Employees,"eMail")
console.log(myReverseSort)

console.log("----------------------Examples -------------------")


let text = "Is this all there is12345?";
result = text.toUpperCase().match(/[^A-Za-z0-9]/g);
console.log ("match :"+result)
result = text.search(/[A-Za-z]/g);
console.log (result)

const myPattern = /[a-zA-Z]/g;
console.log(myPattern.test("The best things in life are 0 1 345789509free!"))
console.log(myPattern.exec("The best things in life are free!"))

console.log("--------Validation examples----------")
let deger = validations.checkedNumberValidation(12,1,123)
console.log("deger:"+ deger)
if(deger){
    console.log("true")
}else{
    console.log("false")
}

let sayi = 123
if(!isNaN(sayi)){
    console.log("sayı :"+sayi)
}
console.log("-------Validation string -------")
let mytext = "a.e563hgt/&%)=^dd&4.!,#";
mytext="abskrfğĞüÜşŞıİÖöÇç901"

let resultum = mytext.match(/[a-zA-ZıİşŞğĞüÜöÖçÇ]/igm);
let control =mytext.match(/[0-9]/igm);
let noktalama =mytext.match(/[^ıİşŞğĞüÜöÖçÇ\w\s]/igm);
console.log("Symbol :"+noktalama)
console.log("numeric: "+control)
console.log("alfanumeric:"+resultum)
if((/[0-9]/igm).test(mytext)){
    console.log("if alphaNumeric :"+resultum)
}
if((/[0-9]/igm).test(mytext)){
     console.log("if numeric :"+control)
}
if((/[\W\s]/igm).test(mytext)){
     console.log("if noktalama :"+noktalama)
}
/*console.log("------------Special IRegExp---------")

let sonuc = myExp.checkedRegExp(mytext)
    console.log(sonuc)
// sonuc : A =Alphanumeric(aAbB), N = numeric(0-9), S = Symbol Other(!#,.;)

/*    let result = Customers.sort((customer1, customer2) => {
      if (customer1.name > customer2.name) {
        return 1;
      } else if (customer1.name === customer2.name) {
        return 0;
      } else {
        return -1;
      }
    });



console.log(result)*/

/*
/* export default  class IUser {
    constructor(userInfo){
        let myId=userInfo.id
        let myFirstName=userInfo.firstName
        let myLastName=userInfo.lastName
        let fullName = function(){
            alert(myId+" "+myFirstName+" "+myLastName)
        }
        fullName()
    }

}
export default class IUser{
    constructor(){
        function sendEmail(personInterface) { // Interface
            var to = personInterface.eMail
            var name =personInterface.name
            var mySend = function () {
               alert("Mail sent to :"+name+"/"+to)
            }
            mySend()
        }
    }
}

/*export default class Employee extends IUser{
    constructor(id,firstName,lastName,salary){

       this.id=id
       this.firstName=firstName
       this.lastName=lastName
       this.salary=salary

    }
}
export default class Employee extends IUser {
    constructor(){
       let  EmployeeOther =  function(name,eMail,salary) {

          /*  this.name=name
            this.eMail=eMail
            super(name,eMail)

            this.salary=salary
            //Other staff
        }

    }
}

let employeeInfo = new Employee("Murat","abc@Goktasçcom",34000)
mySent(employeeInfo)
//console.log(employeeInfo)
//console.log(employeeInfo.id+":"+employeeInfo.firstName+". /Salary :"+employeeInfo.salary)

*/