const db = require('mongoose')
const passwordData = require('./contraseña')
const uri = `mongodb://${passwordData.username}:${passwordData.passwordData}@ac-0xnchs0-shard-00-00.z9aglvc.mongodb.net:27017,ac-0xnchs0-shard-00-01.z9aglvc.mongodb.net:27017,ac-0xnchs0-shard-00-02.z9aglvc.mongodb.net:27017/?ssl=true&replicaSet=atlas-hsqjib-shard-0&authSource=admin&retryWrites=true&w=majority`

db.Promise = global.Promise;

async function connect(){
    await db.connect(uri , {
        useNewUrlParser: true,
    })
     .then(()=>{
        console.log('[db] conectada con exito')
     }).catch(e =>{
        console.log(e)
     })
    

}


module.exports = connect;