const axios = require('axios');
const cheerio = require('cheerio');

const scrapeYouTubeVideoData = async (videoUrl) => {
  try {
    const { data } = await axios.get(videoUrl);
    const $ = cheerio.load(data);

    const title = $('meta[name="title"]').attr('content');
    const description = $('meta[name="description"]').attr('content');
    const views = parseInt($('meta[itemprop="interactionCount"]').attr('content'), 10);
    const uploadDate = new Date($('meta[itemprop="uploadDate"]').attr('content'));
    const channelId = $('meta[itemprop="channelId"]').attr('content');
    const videoId = videoUrl.split('v=')[1];

    return { title, description, views, uploadDate, channelId, videoId };
  } catch (error) {
    console.error('Error scraping video data:', error);
    throw error;
  }
};

module.exports = { scrapeYouTubeVideoData };
