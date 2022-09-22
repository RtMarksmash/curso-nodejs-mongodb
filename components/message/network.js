const express = require('express');

const router = express.Router();


router.get('/message', function(req, res){
    console.log(req.headers)
    res.header({
        "Custom-header" : "my personalized header"
    })
    //res.send('lista de mensajes')
    response.succes(req,res,"has been correctly add",201)
});

router.post('/post', function(req, res){
    console.log(req.query)
    console.log(req.body)
    response.error(req,res,"has occurred an error", 401, "internal error" )
   /*  res.status(201).send({
        "error": "",
        "message": "this message has been correctly add "

    }) */
});


module.exports = router;