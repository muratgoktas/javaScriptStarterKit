import { userDatas } from "../data/userDatas.js"
import UsersServices from "../services/Concretes/UsersServices.js";
import Employee from "../models/employee.js";
import ErrorData from "../models/errorData.js";
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
console.log(person)

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
let newUser = new Employee(5, "Mustafa", "Kurukafa", "Malatya", 37, "Empl0yee", 120344)


if (regExpAll.checkedRegExp(newUser["id"])==="N"
&&regExpAll.checkedRegExp(newUser["firtsName"])==="A"
&&regExpAll.checkedRegExp(newUser["lastName"])==="A"
&&regExpAll.checkedRegExp(newUser["city"])==="A"
&&regExpAll.checkedRegExp(newUser["age"])==="N"
&&regExpAll.checkedRegExp(newUser["type"])==="A"
&&regExpAll.checkedRegExp(newUser["salary"])==="N")
{
    userServices.update(newUser, Employees)
    console.log(Employees)
}else{
     userServices.add(newUser, ErrorDatas)
     console.log(ErrorDatas)
}
