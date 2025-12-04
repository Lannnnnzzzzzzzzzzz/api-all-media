const axios = require("axios");

async function fetchCapcutData(url) {
  try {
    const response = await axios.post(
      "https://api.teknogram.id/v1/capcut",
      { url },
      {
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      }
    );

    if (!response.data || response.data.status !== "success") {
      throw new Error("Invalid response from CapCut API");
    }

    const data = response.data.result;

    return {
      status: "ok",
      title: data.title || "CapCut Video",
      description: data.description || null,
      thumbnail: data.cover || null,
      author: data.author?.nickname || null,
      downloads: [
        {
          url: data.video_url || data.video || null,
          quality: "Original",
          type: "video"
        }
      ].filter(item => item.url)
    };
  } catch (error) {
    throw new Error(`Capcut API request failed: ${error.message}`);
  }
}

module.exports = { fetchCapcutData };
