const express = require('express');
const message = require('../components/message/network')
const user = require('../components/user/network')


function routes(server){
    server.use('/message', message)
    server.use('/post', message)

}


function ruotesUser(server){
    server.use('/user', user)
}


module.exports = routes;

module.exports = ruotesUser;
