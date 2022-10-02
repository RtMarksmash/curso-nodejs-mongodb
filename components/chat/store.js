const Model = require('./model')


function createChat(listUsers){
    const myChat = new Model(listUsers);
    return myChat.save()

}


function getChats(userId){
    return new Promise((resolve,reject)=>{
        let filter = {};
    if(!userId){
        filter = { users: userId}
    }

    Model.find(filter)
        .populate('users')
        .exec((err,populated)=>{
            if(err){
                reject(err)
                return false
            }
            resolve(populated) 
        });

})}



module.exports = {
    create: createChat,
    get: getChats
}