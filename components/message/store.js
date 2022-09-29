

const Model = require('./model')


function addMessage(message){
     //return list.push(mesagge);
     const myMessage =  new Model(message);
     myMessage.save();

};

 function getMessage(filterUser){
    return new Promise((resolve,reject)=>{
        let filter = {};
    if(filterUser !== null){
        filter = { user: filterUser}
    }

    const messages = Model.find(filter)
        .populate('user')
        .exec((err,populated)=>{
            if(err){
                reject(err)
                return false
            }
            resolve(populated) 
        });
    
    });
    
    }


function removeMessage(id){
    return Model.deleteOne({
        _id: id 
    })
}

async function updateText(id,text){
    const foundMessage = await Model.findOne({
        _id: id
    })

    foundMessage.message = text;

    const newMessage = await foundMessage.save()
    return newMessage;
}





module.exports = {
    addMessage,
    getMessage,
    updateText,
    removeMessage,

}