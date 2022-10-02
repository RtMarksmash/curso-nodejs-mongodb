const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mYSchema = new Schema({
           users:[{
                type: Schema.ObjectId,
                ref: 'user'
               }]
        });
        

const model = mongoose.model('chat', mYSchema);

module.exports = model;




    
 