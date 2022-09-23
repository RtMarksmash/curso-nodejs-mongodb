const express = require('express');
const message = require('../components/message/network')


function routes(server){
    server.use('/message', message)
    server.use('/post', message)

}

module.exports = routes;