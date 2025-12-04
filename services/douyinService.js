const axios = require("axios");

async function fetchDouyinVideoInfo(douyinUrl) {
  try {
    const response = await axios.post(
      "https://www.douyin.wtf/api/hybrid/video_data",
      { url: douyinUrl },
      {
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "origin": "https://www.douyin.wtf",
          "referer": "https://www.douyin.wtf/"
        },
        timeout: 30000
      }
    );

    if (!response.data || response.data.status !== "success") {
      throw new Error("Invalid response from Douyin API");
    }

    const data = response.data.data;

    return {
      status: "success",
      thumbnail: data.cover || data.dynamicCover || null,
      title: data.title || data.desc || null,
      author: data.author || null,
      timestamp: data.createTime || null,
      videoLinks: [
        {
          label: "Download Video (No Watermark)",
          url: data.video_data?.nwm_video_url || data.nwm_video_url_HQ || null
        },
        {
          label: "Download Video (Watermark)",
          url: data.video_data?.wm_video_url || data.wm_video_url || null
        }
      ].filter(item => item.url)
    };
  } catch (error) {
    throw new Error(`Douyin fetch failed: ${error.message}`);
  }
}

module.exports = { fetchDouyinVideoInfo };
