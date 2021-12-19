export default class ISort {
    constructor(Users, sortColomn) {
        let myUsers = Users
        let mySortColomn = sortColomn
        if(mySortColomn===undefined){mySortColomn="firstName"}
        let Sort = function () {
            let result = myUsers.sort((myUserA, myUserB) => {
                if (myUserA[mySortColomn] > myUserB[mySortColomn]) {
                    return 1;
                } else if (myUserA[mySortColomn] === myUserB[mySortColomn]) {
                    return 0;
                } else {
                    return -1;
                }
            })
            return result
        }

        return Sort()
    }
}