const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please add a name']
    },
    email: {
        type: String, 
        required: [true, 'Please add an email'],
        unquie: true
    },
    password: {
        type: String, 
        required: [true, 'Please add a password']
    }, 
    followers: [{type:ObjectId, ref:"User"}], 
    following: [{type:ObjectId, ref:"User"}]
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)