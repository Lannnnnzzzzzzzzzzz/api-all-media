const axios = require("axios");

async function fetchLinkedinData(url) {
  try {
    const response = await axios.post(
      "https://api.keeplinked.com/download",
      { url },
      {
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "origin": "https://keeplinked.com",
          "referer": "https://keeplinked.com/"
        }
      }
    );

    if (!response.data || !response.data.url) {
      throw new Error("Invalid response from LinkedIn API");
    }

    return {
      status: "ok",
      title: response.data.title || "LinkedIn Video",
      thumbnail: response.data.thumbnail || null,
      downloads: [
        {
          url: response.data.url,
          quality: "Original",
          type: "video"
        }
      ]
    };
  } catch (error) {
    throw new Error(`LinkedIn API request failed: ${error.message}`);
  }
}

module.exports = { fetchLinkedinData };
