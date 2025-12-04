const axios = require("axios");

async function redditDownloader(url) {
  try {
    const response = await axios.post(
      "https://www.reddit.com/oembed.json",
      null,
      {
        params: { url },
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      }
    );

    if (!response.data) {
      throw new Error("Invalid response from Reddit");
    }

    const videoUrl = url.replace(/\/$/, '') + '/DASH_720.mp4';
    const audioUrl = url.replace(/\/$/, '') + '/DASH_audio.mp4';

    return {
      status: "ok",
      title: response.data.title || "Reddit Video",
      author: response.data.author_name || "Unknown",
      thumbnail: response.data.thumbnail_url || null,
      downloads: [
        {
          quality: "720p",
          url: videoUrl,
          type: "video"
        },
        {
          quality: "Audio",
          url: audioUrl,
          type: "audio"
        }
      ]
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = redditDownloader;
