import { userDatas } from "../HomeworkLessonFour/data/userDatas.js"

export default class DataService {
    constructor(people) {
        this.people = people
    }

    load() {
        for (const user of userDatas) {
            this.people.push(user)
        }
    }
    list(user) {
        return this.people
    }
    add(user) {

        return this.people.push(user)
    }
   // getById() {
        //  return this.people.find(u => u.id === id)
    //}
    getSorted() {
        return this.people.sort((person1, person2) => {
            //customer["firtsName"] dinamik yapmak içi kullan
            if (person1.firtsName < person2.firstName) {
                return -1
            } else if (person1.firstName === person2.firstName) {
                return 0
            } else {
                return 1
            }
        })
    }
}