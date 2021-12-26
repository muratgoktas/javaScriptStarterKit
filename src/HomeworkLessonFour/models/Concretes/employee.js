
import UserBase from "./userBase.js"


export default class Employee extends  UserBase {
    constructor(id, firtsName, lastName, city, age,type, salary) {
        super(id, firtsName, lastName, city, age,type)
        this.salary = salary
    }
}