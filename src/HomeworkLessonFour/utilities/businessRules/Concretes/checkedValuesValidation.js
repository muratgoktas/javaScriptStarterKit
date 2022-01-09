import ICheckedNumericValues from "../Abstracts/ICheckedNumericValues.js";
import ICheckedStringValues from "../Abstracts/ICheckedStringValues.js";
import IRegExp from "../Abstracts/IRegExp.js";
import myRegExp from "./myRegExp.js";

export default class CheckedValuesValidation extends myRegExp {
  constructor() {
    super()
  }


  CheckedNumberValidation(myNumber, myMini, myMaxi) {
    if (ICheckedNumericValues(myNumber, myMini, myMaxi) && this.checkedRegExp(myNumber) === "N") {
      return true
    }
    return false

  }

  CheckedStringValidation(myStringValue, myMini, myMaxi) {
    if (ICheckedStringValues(myStringValue, myMini, myMaxi)
      && this.checkedRegExp(myStringValue) === "A") {
      return true
    }
    return false
  }
  // kimin myMini kimin myMaxi ????
  CheckedObjectValidation(myObject, myDnaModel, myMinis, myMaxis) {
    //NAAANAN => IRegExp.js You can look at the IRegExp.js .
   
    let [minId,minFirstName,minLastName,minCity,minAge,minType,minEntity]  = myMinis
    let [maxId,maxFirstName,maxLastName,maxCity,maxAge,maxType,maxEntity]   = myMaxis
    this.myObject = myObject
    this.myDnaModel = myDnaModel
    if (this.myDnaModel === undefined) { this.myDnaModel = "NAAANAN" }
    let counter = 0
  
    for (let key in this.myObject) {

      if (IRegExp(this.myObject[key]) !== this.myDnaModel[counter]) {
        return false
      }

      if (this.myDnaModel[counter] === "N") {
        if (!ICheckedNumericValues(this.myObject[key])) {
          return false
        }
      }
      if (this.myDnaModel[counter] === "A") {
        if (!ICheckedStringValues(this.myObject[key])) 
        { 
          return false
        }
      }
      counter++

    }
    return true

  }


}


