const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const talkSchema = mongoose.Schema({
    user: {
        type: ObjectId, 
        required: true, 
        ref: 'User'
    }, 
    text: {
        type: String, 
        required: [true, 'Please add a text value']
    },
    likes: [{type:ObjectId, ref:'User'}], 
    comments: [{
        text: String, 
        postedBy:{type:ObjectId, ref:'User'}
    }],
}, 
{
    timestamps: true
}
)

module.exports = mongoose.model('Talk', talkSchema)