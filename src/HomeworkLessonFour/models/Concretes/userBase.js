import IEntity from "../Abstracts/IEntity.js"

export default class UserBase extends IEntity {
    constructor(id, firstName, lastName, city, age,type) {
            super()
            this.id = id
            this.firstName = firstName
            this.lastName = lastName
            this.city = city
            this.age = age
            this.type=type

    }
}