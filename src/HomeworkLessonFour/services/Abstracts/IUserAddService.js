export default class IUserAddService {

    constructor(myUser, myUsers) { // Interface
      let user=myUser
      let Users=myUsers
        try {
          class add{
            constructor(){
              Users.push(user)
            }
          }
       
         add()
       } catch (error) {
           alert("No add! Error message :"+error)
       }
       
    }
   
}

