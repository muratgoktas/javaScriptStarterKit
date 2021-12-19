import { userDatas } from "../data/userDatas.js"
import IUserAddService from "../services/IUserAddService.js";
import ErrorData from "./models/errorData.js"; 
let ErrorDatas=[]

let erroData =new ErrorData (15,"Salih","Güçbilmez","Sakarya",57,"Custoer","1234665")
IUserAddService(errorData, ErrorData)

for (const user of userDatas) {
    IUserAddService(user, ErrorDatas)
}