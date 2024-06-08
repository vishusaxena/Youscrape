const express = require('express');
const app = express();
const PORT=8001;
const {videoRoutes}=require('./routes/videoRoutes');
const { connectToMongoDB } = require('./connect');
app.use('/api/videos', videoRoutes);


connectToMongoDB('mongodb://localhost:27017/YouScrape').then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }).catch((err) => console.log(err));

