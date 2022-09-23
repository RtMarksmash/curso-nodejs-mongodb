exports.succes = function(req,res,message,status){
    res.status(status || 201 ).send({
        "error": "",
        "body": message
    })
    // 4. creamos las respuestas,we made a reponses about error or message 
}

exports.error = function(req,res,message,status,details){
    console.log(details)
    res.status(status || 500).send({
        "error": message,
        "message": ""
    })
    //
}