import { userDatas } from "../data/userDatas.js"
import UsersServices from "../services/Concretes/UsersServices.js";
import Employee from "../models/Concretes/employee.js";
import ErrorData from "../models/Concretes/errorData.js";
import ElasticLogger from "../crossCuttingConcerns/Concretes/logging/elasticLogger.js";
import IBaseLogger from "../crossCuttingConcerns/Abstracts/logging/IBaseLogger.js";
import BaseLogger from "../crossCuttingConcerns/Concretes/logging/baseLogger.js";
import CheckedValuesValidation from "../utilities/businessRules/Concretes/checkedValuesValidation.js";
import myRegExp from "../utilities/businessRules/Concretes/myRegExp.js";


let Employees = [Employee]
let ErrorDatas =[ErrorData]

let userServices = new UsersServices(Employees)
let validations= new CheckedValuesValidation()
let regExpAll = new myRegExp()
let person = new Employee(15, "Salih", "Güçbilmez", "Sakarya", 57, "Employee", 12344)
//userServices.add(Employees)


console.log("-------Add record's id:15 ----")
userServices.add(person, Employees)
console.log(Employees)

console.log("------Add records. All ------")
for (const person of userDatas) {
    if (person.type === "Employee" || person.type === "employee") {
        userServices.add(person, Employees)
    }
}
console.log(Employees)
console.log("-----find record's id:7------")
console.log(userServices.find(7, Employees))
console.log("-----find record's firstName:'Melike Tuana'------")
console.log(userServices.find("Melike Tuana",Employees,"firstName"))

console.log("-------- Delete Record 15--------")
userServices.delete(15, Employees)

console.log("-------Sort record salary------")
userServices.sort(Employees, "salary")
console.log("-------- ReverseSort record firstName")
userServices.reverse(Employees)

console.log("--------Update record 5 -------")



let entity=[{myErrorData:newUser ,myErrorMessage:"This record error."}]
let myElasticLogger =new ElasticLogger()
console.log(myElasticLogger.log(entity))

console.log("-------------------regExp Kontrol--------------------")
let newUser = new Employee(0, "Mustafa", "Kurukafa", "Malatya", 37, "Employee", 120344)
//NAAANAN => IRegExp.js You can look at the IRegExp.js .
/*let dnaModel ="NAAANAN"
let counter=0

for (let key in newUser) {
    if(regExpAll.checkedRegExp(newUser[key])!==dnaModel[counter]){
        alert(newUser[key])
        alert(dnaModel[counter])
        dnaModel =false
        break
    }
    counter++
//  alert(key + ' => ' + newUser[key]);
} 
console.log(regExpAll.checkedRegExpObj(newUser,"NAAANAN"))
*/

if (regExpAll.checkedRegExpObj(newUser)===false){
    console.log("Hatalı kayıt")
     userServices.add(newUser, ErrorDatas)
     console.log(ErrorDatas)
}else if(regExpAll.checkedRegExpObj(newUser)===true){
     userServices.update(newUser, Employees)
     console.log(Employees)
}else{
    console.log("3.seçenek")
}
let checkedValidation =new CheckedValuesValidation()
let mybolean= checkedValidation.CheckedNumberValidation(newUser["id"],1,1000)
console.log(mybolean)
let sabolean=checkedValidation.CheckedStringValidation(newUser["firstName"],3,15)
console.log(sabolean)

function NameSpec(myFirstName) {
    let name=myFirstName.myName
    let mini=myFirstName.myMini
    let maxi=myFirstName.myMaxi
    let mySpec = function(){
        console.log(name +"="+mini+"-"+maxi)
    }
     mySpec()
}

class NameSpec2 {
    constructor(myFirstName) {
        let name=myFirstName.myName
        let mini=myFirstName.myMini
        let maxi=myFirstName.myMaxi
        let mySpec = function(){
            console.log(name +"="+mini+"-"+maxi)
        }
        mySpec()
    }
}

class myNameSpec {
    constructor(myName, myMini, myMaxi) {
        this.myName = myName;
        this.myMini = myMini;
        this.myMaxi = myMaxi;
    }
}

let myFirstNameSpec=new myNameSpec("Murat","1","15")
NameSpec(myFirstNameSpec)
NameSpec2(myFirstNameSpec)


/*or
console.log(Object.keys(newUser))  */
//Object.keys(newUser).forEach(key => { console.log(key, newUser[key]) })




