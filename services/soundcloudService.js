const axios = require("axios");

async function fetchSoundcloudData(url) {
  try {
    const response = await axios.post(
      "https://api.fabdl.com/soundcloud/get",
      `url=${encodeURIComponent(url)}`,
      {
        headers: {
          "accept": "application/json, text/plain, */*",
          "content-type": "application/x-www-form-urlencoded",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "origin": "https://soundclouddownload.org",
          "referer": "https://soundclouddownload.org/"
        }
      }
    );

    if (!response.data || response.data.result === false) {
      throw new Error("Invalid response from SoundCloud API");
    }

    const data = response.data.result;

    return {
      status: "ok",
      title: data.name || data.title,
      artist: data.artist || data.author,
      thumbnail: data.image || data.thumb,
      duration: data.duration,
      downloads: [
        {
          url: data.download || null,
          quality: "Original",
          type: "audio",
          extension: "mp3"
        }
      ].filter(item => item.url)
    };
  } catch (error) {
    throw new Error(`SoundCloud API request failed: ${error.message}`);
  }
}

module.exports = { fetchSoundcloudData };
