const axios = require("axios");

async function redditDownloader(url) {
  try {
    const jsonUrl = url.replace(/\/$/, '') + '.json';

    const response = await axios.get(jsonUrl, {
      headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      timeout: 30000
    });

    if (!response.data || !response.data[0]?.data?.children?.[0]?.data) {
      throw new Error("Invalid response from Reddit");
    }

    const postData = response.data[0].data.children[0].data;
    const downloads = [];

    if (postData.secure_media?.reddit_video) {
      const videoData = postData.secure_media.reddit_video;
      if (videoData.fallback_url) {
        downloads.push({
          quality: `${videoData.height}p`,
          url: videoData.fallback_url,
          type: "video"
        });
      }
    }

    if (postData.media?.reddit_video) {
      const videoData = postData.media.reddit_video;
      if (videoData.fallback_url) {
        downloads.push({
          quality: `${videoData.height}p`,
          url: videoData.fallback_url,
          type: "video"
        });
      }
    }

    if (postData.url && (postData.url.endsWith('.mp4') || postData.url.includes('v.redd.it'))) {
      downloads.push({
        quality: "Original",
        url: postData.url,
        type: "video"
      });
    }

    if (downloads.length === 0) {
      throw new Error("No video found in this Reddit post");
    }

    const uniqueDownloads = Array.from(new Map(downloads.map(item => [item.url, item])).values());

    return {
      status: "ok",
      title: postData.title || "Reddit Video",
      author: postData.author || "Unknown",
      thumbnail: postData.thumbnail && postData.thumbnail !== "default" ? postData.thumbnail : null,
      downloads: uniqueDownloads
    };
  } catch (err) {
    throw new Error(`Reddit download failed: ${err.message}`);
  }
}

module.exports = redditDownloader;
