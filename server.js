const express = require('express');

const app = express();

app.use('/', (req,res)=>{
    res.send('hola')
});


app.listen(3000);
console.log('la aplicacion se esta escuchando en el http://localhost:3000')