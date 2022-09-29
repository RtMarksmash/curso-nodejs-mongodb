const express = require('express');
const controller = require('./controller');
const router = express.Router();
const response = require('../../network/response')



router.post('/' , (request, res)=> {
    const newUser = request.body.name
    controller.addUser(newUser)
        .then(data =>{
            response.succes(request,res,'user add correctly',200)
        }).catch((e)=>{

            response.error(request,res,'theres is a problem, user dont add',500)
        });

})

router.get('/', (request, res)=>{
    controller.getUser()
        .then((data)=>{
            response.succes(request,res,data,200)
        }).catch((e) =>{
            response.error(request,res,'internal error',500)
        })
})


module.exports = router;



