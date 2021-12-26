
export default class IDelete {
    constructor(myEntity, myUsers) {
        let id=myEntity
        let Users=myUsers
        let Delete = function () {

            try {

                for (const user of Users) {
                    if (user.id === id) {
                        Users.splice(Users.indexOf(user), 1)
                    }
                }
            
            } catch (error) {
                alert("No Records Deleted! Error message :" + error)
            }
        }
      
        Delete()
    }
}