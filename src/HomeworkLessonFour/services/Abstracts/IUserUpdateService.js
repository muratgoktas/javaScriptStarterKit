
export default class IUpdate {
  constructor(newMyUser, Users) {
    let myUsers=Users
    let newUser=newMyUser
    let Updated = function () {
      try {
       
        let myUser = myUsers.find((user) => user.id === newUser.id)
        let myIndex = myUsers.indexOf(myUser)
        if (myIndex !== -1) {
          myUsers[myIndex] = newUser
        }
      } catch (error) {
        alert(console.error())
      }


    }
    Updated()
  }
}