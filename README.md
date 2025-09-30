# api-all-media

[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)](https://www.javascript.com/)

## Description

This repository contains the `api-all-media` project. No description provided.

## Key Features and Highlights

- Utilizes JavaScript as its primary language
- Provides various functionalities related to media
- Incorporates dependencies such as Axios, Cheerio, Cors, Express, and Metadownloader

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Features

- Download media from popular platforms:
  - CapCut
  - Douyin
  - Facebook & Instagram ( meta )
  - LinkedIn
  - Pinterest
  - Reddit
  - Soundcloud
  - Spotify
  - Threads
  - TikTok
  - Twitter ( X )
  - YouTube

3. Example API request to download Instagram media:

```
GET https://lnns-apis-allmedia.vercel.app//api/tiktok/download?url=https://www.tiktok.com/@xeightmare/video/7553205135766293771?is_from_webapp=1&sender_device=pc
```

Response:

```json
{
  "success": true,
  "data": {
    // media download info here
  }
}"status": "ok",
    "title": "makasih mbg",
    "thumbnail": "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oUjBSIm3S20AGwxYSgicAiaCIgBBPofkNIPLvA~tplv-tiktokx-360p.webp?dr=1363&refresh_token=7e178bee&x-expires=1759287600&x-signature=X0mgUPqTH9SJSY%2FswQ8wf42tCO0%3D&t=bacd0480&ps=d97f9a4f&shp=d05b14bd&shcp=1d1a97fc&idc=maliva&s=AWEME_DETAIL&sc=feed_cover&biz_tag=tt_video",
    "downloads": [
      {
        "text": "Download MP4 [1]",
        "url": "https://dl.snapcdn.app/get?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3YxNi1jb2luLnRpa3Rva2Nkbi5jb20vMjNkZDc3N2JmNDBmZGY5MmJjZmJmYzU1NmIzYmFmZWMvNjhkYmE0ZWMvdmlkZW8vdG9zL3VzZWFzdDJhL3Rvcy11c2Vhc3QyYS12ZS0wMDY4YzAwNC9vNENFb2kyUUlmTkkwQVlQU1JHYW5TQ3BTQXFCQ0FpM2tQQ2dhdi8_YT0wJmJ0aT1PVUJ6T1RnN1FHbzZPalpBTDNBakxUQXpZQ014TkROZyZjaD0wJmNyPTEzJmRyPTAmZXI9MCZscj1hbGwmbmV0PTAmY2Q9MCU3QzAlN0MwJTdDJmN2PTEmYnI9MzQyOCZidD0xNzE0JmNzPTAmZHM9NiZmdD1LTEVkLmlxVDBtbzBQREQxVFd6YVE5dkJPc1c0SkUuQ34mbWltZV90eXBlPXZpZGVvX21wNCZxcz0wJnJjPU5UZ3pOVGM4TjJobE9EbzVOVGxuT2tCcE16TndibkE1Y25FNE5qTXpOemN6TTBBdUxsOHVOakl5WGpJeEwxOWdNVFkyWVNNd2NtVTBNbVEwY3paaExTMWtNVFp6Y3clM0QlM0QmdnZwbD0xJmw9MjAyNTA5MzAxMTM3MzgzNEVCNjA4QjE0NEU4NjU3ODFCMSZidGFnPWUwMDBiMDAwMCIsImZpbGVuYW1lIjoiVGlrRG93bmxvYWRlci5pb183NTUzMjA1MTM1NzY2MjkzNzcxLm1wNCIsIm5iZiI6MTc1OTIwMzQ2MCwiZXhwIjoxNzU5MjA3MDYwLCJpYXQiOjE3NTkyMDM0NjB9.s7b-jdRHIrDuZXLgOzWggDbVYzHTguGJ2fDD9h2bo-U"
      },
      {
        "text": "Download MP4 [2]",
        "url": "https://v16-coin.tiktokcdn.com/23dd777bf40fdf92bcfbfc556b3bafec/68dba4ec/video/tos/useast2a/tos-useast2a-ve-0068c004/o4CEoi2QIfNI0AYPSRGanSCpSAqBCAi3kPCgav/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=13&dr=0&er=0&lr=all&net=0&cd=0%7C0%7C0%7C&cv=1&br=3428&bt=1714&cs=0&ds=6&ft=KLEd.iqT0mo0PDD1TWzaQ9vBOsW4JE.C~&mime_type=video_mp4&qs=0&rc=NTgzNTc8N2hlODo5NTlnOkBpMzNwbnA5cnE4NjMzNzczM0AuLl8uNjIyXjIxL19gMTY2YSMwcmU0MmQ0czZhLS1kMTZzcw%3D%3D&vvpl=1&l=2025093011373834EB608B144E865781B1&btag=e000b0000"
      },
      {
        "text": "Download MP4 HD",
        "url": "https://dl.snapcdn.app/get?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3YxNi50b2tjZG4uY29tLzUwM2UzMGU0NDE2OTc1NzEyMWI5NjRiNmU3M2NiNjZjLzY4ZDFlMzAwLzc1NTMyMDUxMzU3NjYyOTM3NzFfb3JpZ2luYWwubXA0P2RsPTEiLCJmaWxlbmFtZSI6IlRpa0Rvd25sb2FkZXIuaW9fNzU1MzIwNTEzNTc2NjI5Mzc3MV9oZC5tcDQiLCJuYmYiOjE3NTkyMDM0NjAsImV4cCI6MTc1OTIwNzA2MCwiaWF0IjoxNzU5MjAzNDYwfQ.Xun9H1fD3ihS_I_7j1sG7QQztW_4-qzPgimijhkzs0Y"
      },
      {
        "text": "Download MP3",
        "url": "https://dl.snapcdn.app/get?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3YxNi1pZXMtbXVzaWMudGlrdG9rY2RuLmNvbS83MGZjZmU1MThiNzk0ODZhNzIyZjUzMjllZjM5ZjYzMS82OGU0OGIzOC92aWRlby90b3MvdXNlYXN0MmEvdG9zLXVzZWFzdDJhLXYtMjdkY2Q3L29zZVM4RkVta0RVaGZTUXlQQVJ2SnFtNVFmNWZOR0ZFdm1ZNEhOLz9hPTU4Mzk2NSZidGk9T1VCek9UZzdRR282T2paQUwzQWpMVEF6WUNNeE5ETmcmY2g9MCZjcj0wJmRyPTAmZXI9MCZscj1kZWZhdWx0JmNkPTAlN0MwJTdDMCU3QzAmYnI9MjUwJmJ0PTEyNSZmdD1LTEUzLV9xVDBtbzBQREQxVFd6YVE5dkJPc1c0SkUuQ34mbWltZV90eXBlPWF1ZGlvX21wZWcmcXM9NiZyYz1aRGc0TjJobk9UVTNhVE5rT0RnNk9VQnBhblk0WjNnNWNuRTJiak16TnpVOE0wQXpZeTgxTURCaVhqQXhZek5oWG1CallTTm9iWEV3TW1SemNITmdMUzFrTVRaemN3JTNEJTNEJnZ2cGw9MSZsPTIwMjUwOTMwMTEzNzM4MzRFQjYwOEIxNDRFODY1NzgxQjEmYnRhZz1lMDAwYjgwMDAmc2hwPWQwNWIxNGJkJnNoY3A9LSIsImZpbGVuYW1lIjoiVGlrRG93bmxvYWRlci5pb183NTUzMjA1MTM1NzY2MjkzNzcxLm1wMyIsIm5iZiI6MTc1OTIwMzQ2MCwiZXhwIjoxNzU5MjA3MDYwLCJpYXQiOjE3NTkyMDM0NjB9.gfe6d-GbEOO1OIa9Gsp9VR9qWNgNBzTfgTQfp6i0lDc"
      }
    ]
  }
}
```

---

## API Endpoints

| Endpoint                   | Description                       | Method |
| -------------------------- | --------------------------------- | ------ |
| `/api/capcut/download`     | Download CapCut media             | GET    |
| `/api/douyin/download`     | Download Douyin media             | GET    |
| `/api/linkedin/download`   | Download LinkedIn media           | GET    |
| `/api/meta/download`       | Download Facebook/Instagram media | GET    |
| `/api/pinterest/download`  | Download Pinterest media          | GET    |
| `/api/reddit/download`     | Download Reddit media             | GET    |
| `/api/soundcloud/download` | Download Soundcloud media         | GET    |
| `/api/spotify/download`    | Download Spotify media            | GET    |
| `/api/threads/download`    | Download Threads media            | GET    |
| `/api/tiktok/download`     | Download TikTok media             | GET    |
| `/api/twitter/download`    | Download Twitter media            | GET    |
| `/api/youtube/download`    | Download YouTube media            | GET    |

**~~See the full interactive API docs with Swagger at `/api-docs`.~~**

## Dependencies

The project has the following dependencies:

- Axios: ^1.6.8
- Cheerio: ^1.0.0-rc.12
- Cors: ^2.8.5
- Express: ^4.18.2
- Metadownloader: ^1.0.0

## Contributing

Contributions are welcome! To contribute to `api-all-media`, follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
