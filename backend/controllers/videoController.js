const Video=require('../models/videoModel');


const getVideos=async(req,res)=>{
    try {
        const videos = await Video.find();
        res.json(videos);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};
const addVideo=async(req,res)=>{
    const { title, description, views, uploadDate, channelId, videoId } = req.body;
  try {
    const newVideo = new Video({ title, description, views, uploadDate, channelId, videoId });
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