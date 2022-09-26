
const db = require('mongoose')
const Model = require('./model')
const passwordData = require('../../contraseña')
const uri = `mongodb://${passwordData.username}:${passwordData.passwordData}@ac-0xnchs0-shard-00-00.z9aglvc.mongodb.net:27017,ac-0xnchs0-shard-00-01.z9aglvc.mongodb.net:27017,ac-0xnchs0-shard-00-02.z9aglvc.mongodb.net:27017/?ssl=true&replicaSet=atlas-hsqjib-shard-0&authSource=admin&retryWrites=true&w=majority`

db.Promise = global.Promise;
db.connect(uri , {
    useNewUrlParser: true,
})
 .then(()=>{
    console.log('[db] conectada con exito')
 }).catch(e =>{
    console.log(e)
 })




function addMessage(message){
     //return list.push(mesagge);
     const myMessage =  new Model(message);
     myMessage.save();

};

 async function getMessage(){
    //return list
    const messages = await Model.find();
    return messages 
    }



module.exports = {
    addMessage,
    getMessage
}