
export default class IDelete {
    constructor(id, myUsers) {

        let Delete = function () {

            try {

                for (const user of myUsers) {
                    if (user.id === id) {
                        myUsers.splice(myUsers.indexOf(user), 1)
                    }
                }
            
            } catch (error) {
                alert("No Records Deleted! Error message :" + error)
            }
        }
      
        Delete()
    }
}