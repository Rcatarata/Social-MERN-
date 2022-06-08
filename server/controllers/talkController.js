const asyncHandler =  require('express-async-handler');
const Talk = require('../models/talkModel');
const User = require('../models/userModel');

// decription get talk
// route get /api/goals
// access Private

const getTalks = asyncHandler(async (req, res) => {
    const talks = await Talk.find({user: req.user.id})
    // const talks = await Talk.find()
    res.status(200).json(talks)
})

// description set talk
//  route post /api/talks
// access Private

const setTalk = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const talk = await Talk.create({
        text: req.body.text, 
        user: req.user.id, 
    })
    res.status(200).json(talk)
})

const updateTalk = asyncHandler(async (req, res) => {
    const talk = await Talk.findById(req.params.id)

    if (!talk) {
        res.status(400)
        throw new Error('Talk not found')
    }
    const user = await User.findById(req.user.id)

    // check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // ensure user match talks
    if (talk.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updateTalk = await Talk.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updateTalk)
})

const deleteTalk = asyncHandler(async (req, res) =>{
    const talk = await Talk.findById(req.params.id)
    if (!talk) {
        res.status(400)
        throw new Error('Talk not found')
    }
    
    const user = await User.findById(req.user.id)

    // check for user
    if(!req.user) {
        res.status(401)
        throw new Error('user not found')
    }
    // ensure user matches talk
    if (talk.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    await talk.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getTalks, setTalk, updateTalk, deleteTalk
}
