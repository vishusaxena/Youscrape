const express = require('express');
const { getVideos, addVideo,deleteVideo,updateVideo } = require('../controllers/videoController');

const router = express.Router();

router.get('/', getVideos);
router.post('/', addVideo);
router.delete('/:id', deleteVideo);
router.put('/:id', updateVideo);
module.exports = router;
