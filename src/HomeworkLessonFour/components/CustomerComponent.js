
import { userDatas } from "../data/userDatas.js";
import IUserAddService from "../services/IUserAddService.js";
import IUserDeleteService from "../services/IUserDeleteService.js";
import UsersServices from "../services/UsersServices.js";
import Customer from "../models/customer.js";

export default class CustomerComponent {
    constructor() {
      let Customers = []

      let myCustomer = new Customer(15, "Salih", "Güçbilmez", "Sakarya", 57, "Customer", 1234665)
      
        //UsersServices.add(myCustomer, Customers)
        let values=  IUserAddService.add(myCustomer, Customers)
      console.log(Customers)
      let mcs =  UsersServices.find("Deniz Göktaş", Customers)

        console.log(mcs)
/*
     for (const user of userDatas) {
            if (user.type === "Customer" || user.type === "customer") {
              IUserAddService.add(user, Customers)
             //  UsersServices.add(user, Customers)
            }
        }
        //IUserDeleteService(15,Customers)
        */
    }
}


