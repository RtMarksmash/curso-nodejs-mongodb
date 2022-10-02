const express = require('express');
const multer = require('multer')
const response = require('../../network/response')
const router = express.Router();      
   // 3. usamos el router the express en una costante (we used the module router on express and we used a constant with this module)
const controller = require('./controller')

const uploads = multer({
    dest: 'upload/file/',
})

router.get('/', function(req, res){
    const filterUser = req.query.user || null;
    controller.getMessage(filterUser)
        .then((messageList)=>{
            /* console.log(req.headers)
                res.header({
                "Custom-header" : "my personalized header"   
                 
    }) */
            
            response.succes(req,res,messageList,201)
        }).catch((e)=>{
            console.log(e)
            response.error(req,res,'message not found',404)
        })
    
    //5. creamos la logica dentro de la routa, we create the logic under route.
    //res.send('lista de mensajes')
     // 6. we call component succes from response module
});

router.post('/', uploads.single('file') ,function(req, res){
    controller.addMessage(req.body.chat ,req.body.user, req.body.message, req.file)
        .then((fullMessage)=>{
            response.succes(req,res,fullMessage,201)
        }).catch((error)=>{
            response.error(req,res,"has occurred an error", 401, "internal error",error )
        })

     // the same call that part 6 , we call component error from response module.
   /*  res.status(201).send({
        "error": "",
        "message": "this message has been correctly add "

    }) */
});

router.patch('/:id', function(req, res){ 

    console.log(req.params.id)

    controller.updateMessage(req.params.id , req.body.message)
        .then(data =>{
            response.succes(req,res,data,200)
    
        }).catch(err =>{
            response.error(req,res,'internal error',500,err)
        })
})


router.delete('/:id' , (req, res ) => {
    controller.removeMessage(req.params.id) 
        .then(data =>{
            response.succes(req,res, `message erased ${data}` , 200)
        }).catch(err =>{
            response.error(req,res,err, 500)
        })
})

module.exports = router;