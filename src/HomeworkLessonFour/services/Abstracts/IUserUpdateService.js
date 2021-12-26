
export default class IUpdate {
  constructor(myUser, myUsers) {
    let Users=myUsers
    let newUser=myUser
    let Updated = function () {
      try {
       
        let myUser = Users.find((user) => user.id === newUser.id)
        let myIndex = Users.indexOf(myUser)
        if (myIndex !== -1) {
          Users[myIndex] = newUser
        }
      } catch (error) {
        alert(console.error())
      }


    }
    Updated()
  }
}