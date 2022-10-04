

const express = require('express');
const app = express(); // 2. metemos express en una costante
const server = require('http').Server(app);

const config = require('./config'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db.js');
const socket = require('./socket');
const router = require('./network/routes');

db()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
router(app)
socket.connect(server)



/* app.use('/', (req,res)=>{
    res.send('hola')
});
 */
app.use(config.publicRoute , express.static('./public'))

server.listen(config.port, function(){
    console.log(`the app is listening at the  ${config.host}${config.port}`)
});
