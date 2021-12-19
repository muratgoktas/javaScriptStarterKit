export default class IReverseSort {
    constructor(Users, sortColomn) {
        let myUsers = Users
        let mySortColomn = sortColomn
        if(mySortColomn===undefined){mySortColomn="firstName"}
        let Reverse = function () {
            let result = myUsers.sort((myUserA, myUserB) => {
                if (myUserA[mySortColomn] < myUserB[mySortColomn]) {
                    return 1;
                } else if (myUserA[mySortColomn] === myUserB[mySortColomn]) {
                    return 0;
                } else {
                    return -1;
                }
            })
            return result
        }
        return Reverse()
    }
}