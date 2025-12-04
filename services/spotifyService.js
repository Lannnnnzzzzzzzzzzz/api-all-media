const axios = require('axios');

async function fetchSpotify(url) {
  try {
    const response = await axios.get('https://api.spotifydown.com/download/' + encodeURIComponent(url), {
      headers: {
        'accept': 'application/json',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'origin': 'https://spotifydown.com',
        'referer': 'https://spotifydown.com/'
      },
      timeout: 30000
    });

    if (!response.data || !response.data.success) {
      throw new Error("Invalid response from Spotify API");
    }

    const data = response.data;

    return {
      title: data.metadata?.title || "Spotify Track",
      album: data.metadata?.album,
      author: data.metadata?.artists,
      thumbnail: data.metadata?.cover,
      duration: data.metadata?.duration,
      released: data.metadata?.releaseDate,
      downloadLinks: [
        {
          url: data.link,
          quality: "128kbps",
          extension: "mp3",
          type: "audio"
        }
      ]
    };
  } catch (err) {
    throw new Error(`Spotify fetch failed: ${err.message}`);
  }
}

module.exports = { fetchSpotify };
