export default class ICheckedStringValues {
    constructor(myStringValue, myMini, myMaxi) {

        let stringValue = myStringValue
        let mini = myMini
        let maxi = myMaxi
        if (mini === undefined) { mini = 1 }
        if (maxi === undefined) { maxi = 999999 }

        class checkedStringValue {
            constructor() {
                if (stringValue.length > mini && stringValue.length < maxi) {
                    return true
                } else {
                    return false
                }
            }
        }
        return checkedStringValue()
    }
}