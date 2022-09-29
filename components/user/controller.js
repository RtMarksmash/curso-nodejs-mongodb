

const store = require('./store');


function addUser(name){
    return new Promise((resolve,reject) => {
        if(!name){
            reject('there is not name')
            return false
        };

        const newUser = {
            name: name 
        };

        store.add(newUser)
        resolve(newUser)
    })

    }


    function getUser(){
        return new Promise((resolve,reject)=>{
            resolve(store.get())
        })

    }



module.exports = {
    addUser,
    getUser
}