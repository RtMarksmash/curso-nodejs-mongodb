const express = require('express');
const controller = require('./controller');
const router = express.Router();
const response = require('../../network/response')



router.post('/',function(request, res){
    controller.createChat(request.body.users)
        .then(()=>{
            response.succes(request,res,'chat has been add',200)  
        }).catch((e)=>{
            response.error(request,res,'internal error',500,e)
        })


})

router.get('/:userId', function(req,res){
    controller.getChat(req.params.userId)
        .then(()=>{
            response.succes(req,res,'chat has been add',200)  
        }).catch((e)=>{
            response.error(req,res,'internal error',500,e)
        })

})

module.exports = router;