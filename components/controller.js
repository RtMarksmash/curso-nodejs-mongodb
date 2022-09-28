const store = require('../components/message/store')

function addMessage(user, message){
    return new Promise((resolve,reject) =>{
        if (!user || !message){
            console.error('[Message control]: there are not user or message ');
            reject('there is a problem with message')
            return false

        }
            const fullMessage = {
                user: user,
                message: message,
                date: new Date()       

        }
    
    
    store.addMessage(fullMessage);
    resolve(fullMessage)
})}


function getMessage(filterUser){
    return new Promise((resolve,reject) =>{
        resolve(store.getMessage(filterUser));
    })
}

function updateMessage(id , text){
    return new Promise(async (resolve, reject) =>{
        if(!id || !text){
            reject('invalid data')
            return false
        }
        const result = await store.updateText(id , text)

        resolve(result)

    })

}

function removeMessage(id){
    return new Promise((resolve, reject)=>{
        if(!id){
            reject('id dont exist')
            return false 
        };

        store.removeMessage(id)
            .then((data)=>{
                resolve(data)
            }).catch(e=>{
                reject(e)
            });
        
    });
}


module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    removeMessage
}