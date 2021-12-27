export default class ICheckedNumericValues {
    constructor(myNumber, myMini, myMaxi) {
        let number = myNumber
        let mini = myMini
        let maxi = myMaxi
        if (mini === undefined) { mini = 1 }
        if (maxi === undefined) { maxi = 999999 }

        class checkedNumericValue {
            constructor() {

                if (!isNaN(Number(number)) && myNumber > mini && myNumber < maxi) {
                    return true
                } else {
                    return false
                }

            }
        }
        return checkedNumericValue()
    }
}