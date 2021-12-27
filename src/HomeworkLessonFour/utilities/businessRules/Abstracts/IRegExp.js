export default class IRegExp {

    constructor(myValue) {
        let value = myValue
        let result = ""
        let patternNumeric = (/[0-9]/igm);
        let patternAlphanumeric = (/[a-zA-ZıİşŞğĞüÜöÖçÇ]/igm)
        let patternOtherSymbol = (/[^ıİşŞğĞüÜöÖçÇ\w\s]/igm)
        class regExp {
            constructor() {
                if (patternAlphanumeric.test(value)) {
                    result = ("A")
                }
                if (patternNumeric.test(value)) {
                    result += ("N")
                }
                if (patternOtherSymbol.test(value)) {
                    result += ("S")
                }

                return result
            }
        }
        return regExp()
    }
}