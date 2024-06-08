const express = require('express');
const { getVideos, addVideo } = require('../controllers/videoController');

const router = express.Router();

router.get('/', getVideos);
router.post('/', addVideo);

module.exports = router;
