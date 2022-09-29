const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mYSchema = new Schema({
           name: String
    });


const model = mongoose.model('User', mYSchema);

module.exports = model;