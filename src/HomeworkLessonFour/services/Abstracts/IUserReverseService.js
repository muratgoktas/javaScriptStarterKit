export default class IReverseSort {
    constructor(myUsers, mySortColomn) {
        let Users = myUsers
        let sortColomn = mySortColomn
        if (sortColomn === undefined) { sortColomn = "firstName" }
        class Reverse {
            constructor() {
                let result = Users.sort((userA, userB) => {
                    if (userA[sortColomn] < userB[sortColomn]) {
                        return 1;
                    } else if (userA[sortColomn] === userB[sortColomn]) {
                        return 0;
                    } else {
                        return -1;
                    }
                })

                return result
            }
        }
        return Reverse()
    }
}