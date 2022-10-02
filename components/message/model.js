const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mYSchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
});



const model = mongoose.model('Message', mYSchema);

module.exports = model;