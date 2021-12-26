export default class IUserAddService {

    constructor(myUser, myUsers) { // Interface
      let user=myUser
      let Users=myUsers
        try {
        let add = function () {
            Users.push(user)
        }
         add()
       } catch (error) {
           alert("No add! Error message :"+error)
       }
       
    }
   
}

