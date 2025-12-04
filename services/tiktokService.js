const axios = require("axios");
const cheerio = require("cheerio");

/**
 * Scrape TikDownloader.io for TikTok video/audio data.
 * @param {string} videoUrl - TikTok video URL
 * @returns {Promise<Object>}
 */
async function fetchTikTokData(videoUrl) {
  try {
    const res = await axios.get("https://www.tikwm.com/api/", {
      params: {
        url: videoUrl,
        hd: 1
      },
      headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    if (res.data.code !== 0 || !res.data.data) {
      throw new Error("Invalid response from TikWM API");
    }

    const data = res.data.data;

    return {
      status: "success",
      title: data.title || null,
      thumbnail: data.cover || data.origin_cover || null,
      author: data.author?.nickname || null,
      downloads: [
        {
          text: "Download Video (No Watermark)",
          url: data.hdplay || data.play || null,
        },
        {
          text: "Download Video (Watermark)",
          url: data.wmplay || null,
        },
        {
          text: "Download Audio",
          url: data.music || null,
        }
      ].filter(item => item.url),
    };
  } catch (error) {
    throw new Error(`TikTok download failed: ${error.message}`);
  }
}

module.exports = {
  fetchTikTokData,
};
