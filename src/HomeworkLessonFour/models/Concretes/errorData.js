
import UserBase from "./userBase.js"

export default class ErrorData extends UserBase {
    constructor(id, firstName, lastName, city, age,type, creditCardNumber, salary) {
        super(id, firstName, lastName, city, age,type)
        this.creditCardNumber = creditCardNumber
        this.salary = salary
    }
}