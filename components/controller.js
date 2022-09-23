const store = require('./message/store')


function addMessage(username, mesagge){
    return new Promise((resolve,reject) =>{
        if (!username || !mesagge){
            console.error('[Message control]: there are not user or message ');
            reject('there is a problem with message')
            return false

        }
            const fullMessage = {
                username: username,
                message: mesagge,
                date: new Date()       

        }
    
    
    store.addMessage(fullMessage);
    resolve(fullMessage)
})}


function getMessage(){
    return new Promise((resolve,reject) =>{
        resolve(store.getMessage());
    })
}


module.exports = {
    addMessage,
    getMessage
}