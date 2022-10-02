 const store = require('./store');


function createChat(users){
    return  new Promise((resolve,reject)=>{
        if(!users || !Array.isArray(users)){
            reject('internal error there is not users')
            return false
        }

        const chat = {
            users: users,     
        
        }

        return store.create(chat)
        

})
}

function getChat(userId){ 
    return store.get(userId)

}

module.exports ={
    createChat,
    getChat
} 