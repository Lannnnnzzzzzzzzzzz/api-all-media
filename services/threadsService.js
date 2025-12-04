const axios = require("axios");
const cheerio = require("cheerio");

async function threadsDownloader(url) {
  try {
    const response = await axios.post(
      "https://v3.saveig.app/api/ajaxSearch",
      new URLSearchParams({
        q: url,
        t: "media",
        lang: "en"
      }),
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "accept": "*/*"
        }
      }
    );

    if (response.data.status !== "ok" || !response.data.data) {
      throw new Error("Invalid response from Threads API");
    }

    const $ = cheerio.load(response.data.data);

    const downloads = [];
    $(".download-items__btn").each((i, el) => {
      const downloadUrl = $(el).attr("href");
      const quality = $(el).text().trim();
      if (downloadUrl) {
        downloads.push({
          url: downloadUrl,
          quality: quality
        });
      }
    });

    const thumbnail = $(".download-items__thumb img").attr("src") || null;

    return {
      status: "ok",
      thumbnail: thumbnail,
      downloads: downloads
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = threadsDownloader;
