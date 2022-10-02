const store = require('./store')

function addMessage(chat, user, message, file){
    return new Promise((resolve,reject) =>{
        if (!user || !message || !chat){
            console.error('[Message control]: there are not user or message ');
            reject('there is a problem with message')
            return false

        }

        let fileUrl = '';
        if(file){
            fileUrl = 'http://localhost:3000/app/files/' + file.filename.toString();

        }
            const fullMessage = {
                chat: chat,
                user: user,
                message: message,
                date: new Date(),
                file: fileUrl       

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

