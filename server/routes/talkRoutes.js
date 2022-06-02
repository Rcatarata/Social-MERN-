const express = require('express')
const router = express.Router()
const {getTalks, setTalk, updateTalk, deleteTalk} = require('../controllers/talkController');

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getTalks).post(protect, setTalk)
router.route('/:id').put(protect, updateTalk).delete(protect, deleteTalk)

module.exports = router