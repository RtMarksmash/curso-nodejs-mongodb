const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'invalid format',
    '500': 'internal error' 
}


exports.succes = function(req,res,message,status){
    let statusCode = status;
    let statusMessage = message;
    if(!status){
        status = 200;
    }
    if(!message){
        statusMessage = statusMessages[status];
    }
    res.status(statusCode ).send({
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