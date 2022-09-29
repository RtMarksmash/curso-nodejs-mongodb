const Model = require('./model')

function addUser(name){
    const newUser = new Model(name)
    newUser.save();
};

function getUsers(){
    const users = Model.find()
    return users
}


module.exports = {
    add: addUser,
    get: getUsers
}