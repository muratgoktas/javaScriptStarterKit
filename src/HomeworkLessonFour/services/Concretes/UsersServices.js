import IService from "../Abstracts/IService.js"
import IUserAddService from "../Abstracts/IUserAddService.js"
import IFind from "../Abstracts/IUserFindService.js"
import IDelete from "../Abstracts/IUserDeleteService.js"
import IUpdate from "../Abstracts/IUserUpdateService.js"
import ISort from "../Abstracts/IUserSortService.js"
import IReverseSort from "../Abstracts/IUserReverseService.js"


export default class UserServices extends IService {
    constructor() {
        super()
    }
    
    add(myUser, myUsers) {
        IUserAddService(myUser, myUsers);

    }
    update(myUser, myUsers) {
        IUpdate(myUser, myUsers)
    }
    delete(myId, myUsers) {
        IDelete(myId, myUsers)
    }
    find(myId, myUsers,mySelectColumn) {
        return IFind(myId, myUsers,mySelectColumn);
    }

    sort(myUsers, mySortColomn) {
        ISort(myUsers, mySortColomn)
    }
    reverse(myUsers, mySortColomn) {
        IReverseSort(myUsers, mySortColomn)
    }
   


}