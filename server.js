const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router);

router.get('/message', function(req, res){
    console.log(req.headers)
    res.header({
        "Custom-header" : "my personalized header"
    })
    res.send('lista de mensajes')
});

router.post('/post', function(req, res){
    console.log(req.query)
    console.log(req.body)
    res.status(201).send({
        "error": "",
        "message": "this message has been correctly add "

    })
});

/* app.use('/', (req,res)=>{
    res.send('hola')
});
 */

app.listen(3000);
console.log('la aplicacion se esta escuchando en el http://localhost:3000')