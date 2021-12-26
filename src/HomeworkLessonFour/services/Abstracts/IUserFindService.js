export default class IFind {
    constructor(myEntity, myUsers, mySelectColumn) {
        let column = mySelectColumn
        if (column === undefined) { column = "id" }
        let entity = myEntity
        let Users = myUsers

        let find = function () {
            try {
                let status = false
                let user
                for (user of Users) {
                    // filter ile bir türlü yapamadım. Bende klasik yöntemle yaptım.
                    if (user[column] === entity) {
                        status = true
                        return user
                    }
                }
                if (!status) {
                    alert("No Records Found!")
                    //alert(myUsers.indexOf(user) + "-" + user.id)
                }
            } catch (error) {
                alert("Error : " + error)
            }
        }
        return find()
    }
}