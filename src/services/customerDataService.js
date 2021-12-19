import { userDatas } from "../HomeworkLessonFour/data/userDatas.js";
import DataService from "./dataService.js";


export default class CustomerDataService
    extends DataService {
    constructor(load,list,add,getSorted,customers) {
        super(list,add,getSorted)
        this.customers=customers
       
        


    }
    load(){
        for (const user of userDatas) {
            this.customers.push(user)
        }
    }
    
}