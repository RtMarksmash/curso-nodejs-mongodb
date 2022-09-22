;

const express = require('express');
const bodyParser = require('body-parser')
const response = require('./network/response')
const router = require('./components/message/network.js')

const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router);


/* app.use('/', (req,res)=>{
    res.send('hola')
});
 */
app.use('/app' , express.static('./public'))

app.listen(3000);
console.log('la aplicacion se esta escuchando en el http://localhost:3000')