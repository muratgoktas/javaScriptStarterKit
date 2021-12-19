export default class IBaseLogger {
    constructor(Entities) {
        let myErrorDatas = []
        //let myErrorData = Entities.myErrorData
        //let myErrorMessage = Entities.myErrorMessage
        let myEntities = Entities
       
        let myLog = function () {
            try {

                myErrorDatas.push(myEntities)
                return myErrorDatas
            } catch (error) {
                return "No error record!" + error
            }
        }
        return myLog()

    }
}