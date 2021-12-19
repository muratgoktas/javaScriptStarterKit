import IBaseLogger from "../../Abstracts/logging/IBaseLogger.js";


export default class BaseLogger {
  constructor() { }
  log(entities) {

   return IBaseLogger(entities)

  }
}
