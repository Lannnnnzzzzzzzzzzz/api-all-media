const axios = require("axios");

async function fetchDouyinVideoInfo(douyinUrl) {
  try {
    const response = await axios.get("https://www.tikwm.com/api/", {
      params: {
        url: douyinUrl,
        hd: 1
      },
      headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    if (response.data.code !== 0 || !response.data.data) {
      throw new Error("Invalid response from Douyin API");
    }

    const data = response.data.data;

    return {
      status: "success",
      thumbnail: data.cover || data.origin_cover || null,
      title: data.title || null,
      author: data.author?.nickname || null,
      timestamp: data.create_time || null,
      videoLinks: [
        {
          label: "Download Video (No Watermark)",
          url: data.hdplay || data.play || null,
        },
        {
          label: "Download Video (Watermark)",
          url: data.wmplay || null,
        },
        {
          label: "Download Audio",
          url: data.music || null,
        }
      ].filter(item => item.url)
    };
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchDouyinVideoInfo };
