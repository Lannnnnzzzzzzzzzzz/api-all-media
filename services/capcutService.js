const axios = require("axios");
const cheerio = require("cheerio");

async function fetchCapcutData(url) {
  try {
    const response = await axios.post(
      "https://ssscap.net/api/download/get-url",
      { url: url },
      {
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "origin": "https://ssscap.net",
          "referer": "https://ssscap.net/"
        },
        timeout: 30000
      }
    );

    if (!response.data || !response.data.url) {
      throw new Error("Invalid response from CapCut API");
    }

    return {
      status: "ok",
      title: response.data.title || "CapCut Video",
      description: response.data.description || null,
      thumbnail: response.data.coverUrl || response.data.cover || null,
      author: response.data.authorName || null,
      downloads: [
        {
          url: response.data.url,
          quality: "Original",
          type: "video"
        }
      ]
    };
  } catch (error) {
    throw new Error(`Capcut API request failed: ${error.message}`);
  }
}

module.exports = { fetchCapcutData };
