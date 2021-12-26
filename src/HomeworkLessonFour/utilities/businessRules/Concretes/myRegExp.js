import IRegExp from "../Abstracts/IRegExp.js";

export default class myRegExp {
    constructor() { }

    checkedRegExp(myValue) {

        return IRegExp(myValue)
    }
    checkedRegExpObj(myObject, myDnaModel) {
        //NAAANAN => IRegExp.js You can look at the IRegExp.js .

        this.myObject = myObject
        this.myDnaModel = myDnaModel
        if (this.myDnaModel === undefined) { this.myDnaModel = "NAAANAN" }
        let counter = 0
        for (let key in this.myObject) {
            if (IRegExp(this.myObject[key]) !== this.myDnaModel[counter]) {
                return false
            }
            counter++
        }
        return true
    }
}