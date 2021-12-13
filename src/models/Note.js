const {Schema, model} = require('mongoose');

const  NoteSchema =new Schema({
    title: {
        type: String, 
        require: true
    },
    description: {
        type: String,
        require: true 
    }, 
    user: {type: String, 
        required: true}
}, {
     timestamps: true
});

module.exports = model('Note',NoteSchema);