export default class IUserAddService {

    constructor(personInterface, myUsers) { // Interface
       try {
        let add = function () {
            myUsers.push(personInterface)
           // alert (name+" Added!")
        }
         add()
       } catch (error) {
           alert("No add! Error message :"+error)
       }
       
    }
   
}

