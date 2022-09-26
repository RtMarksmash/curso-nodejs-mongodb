const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mYSchema = new Schema({
            username: String,
            message: {
                type: String,
                required: true,
            },
            date: Date

    });


const model = mongoose.model('Message', mYSchema);

module.exports = model;