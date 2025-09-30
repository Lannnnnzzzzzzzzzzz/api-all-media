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
