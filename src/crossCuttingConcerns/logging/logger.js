export  class BaseLogger{
    log(data){
        console.log("Default logger"+data)
    }
    logger(data){
        console.log(data+" deneme")
    }

}
export  class ElasticLogger extends BaseLogger{
    super()
    log(data){
        console.log("Logged to Elastic. "+ data)
    }

}
export  class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo. "+ data)
    }

}