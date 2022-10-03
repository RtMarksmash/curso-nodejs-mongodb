
const db = require('./db.js')
const express = require('express');// 1. montamos express
const app = express(); // 2. metemos express en una costante
const bodyParser = require('body-parser')
const server = require('http').createServer(app)
const socket = require('./socket')
//const router = require('./components/message/network.js')
const router = require('./network/routes')

db()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
//app.use(router);
router(app)
socket.connect(server)



/* app.use('/', (req,res)=>{
    res.send('hola')
});
 */
app.use('/app' , express.static('./public'))

server.listen(3000, function(){
    console.log('the app is listening at the  http://localhost:3000')
});
