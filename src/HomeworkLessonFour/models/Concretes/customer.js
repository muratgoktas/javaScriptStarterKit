
import UserBase from "./userBase.js";


export default class Customer extends UserBase {
    constructor(id, firstName, lastName, city, age, type, creditCardNumber) {
        super(id, firstName, lastName, city, age, type)
        this.creditCardNumber = creditCardNumber
    }
}