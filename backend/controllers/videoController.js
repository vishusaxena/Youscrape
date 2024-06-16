const Video=require('../models/videoModel');
const {scrapeYouTubeVideoData}=require('../services/scraperService')

const getVideos=async(req,res)=>{
    try {
        const videos = await Video.find();
        res.json(videos);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};
const addVideo=async(req,res)=>{
  const { videoUrl } = req.body;
  try {
    const videoData = await scrapeYouTubeVideoData(videoUrl);
    const newVideo = new Video(videoData);
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports={
    getVideos,
    addVideo,
}