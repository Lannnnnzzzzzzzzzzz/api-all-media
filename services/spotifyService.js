const axios = require('axios');

async function fetchSpotify(url) {
  try {
    const response = await axios.post(
      'https://api.fabdl.com/spotify/get',
      `url=${encodeURIComponent(url)}`,
      {
        headers: {
          'accept': 'application/json, text/plain, */*',
          'content-type': 'application/x-www-form-urlencoded',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'origin': 'https://spotifydownload.org',
          'referer': 'https://spotifydownload.org/'
        }
      }
    );

    if (!response.data || response.data.result === false) {
      throw new Error("Invalid response from Spotify API");
    }

    const data = response.data.result;

    return {
      title: data.name || data.title,
      album: data.album,
      author: data.artists,
      thumbnail: data.image,
      duration: data.duration_ms ? Math.floor(data.duration_ms / 1000) : null,
      released: data.release_date,
      downloadLinks: [
        {
          url: data.download || null,
          quality: "128kbps",
          extension: "mp3",
          type: "audio"
        }
      ].filter(item => item.url)
    };
  } catch (err) {
    throw new Error(`Spotify fetch failed: ${err.message}`);
  }
}

module.exports = { fetchSpotify };
