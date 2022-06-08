const express = require('express');
const { route } = require('./talkRoutes');
const router = express.Router()
const {registerUser, loginUser, getMe, findUsers} = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/search', findUsers)

module.exports = router