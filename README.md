![Node build](https://github.com/eritislami/evobot/actions/workflows/node.yml/badge.svg)
![Docker build](https://github.com/eritislami/evobot/actions/workflows/docker.yml/badge.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

![logo](https://cdn.dribbble.com/users/3859/screenshots/2103374/applemusicel.png)

# 🤖 Magic Music-Bot (Discord Music Bot)
> Magic Music-Bot ist ein Discord Music Bot, der mit discord.js erstellt wurde und Command Handler von [discordjs.guide](https://discordjs.guide) verwendet

## Anforderungen

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**  
2.1 **(Optional)** Soundcloud Client ID **[Guide](https://github.com/zackradisic/node-soundcloud-downloader#client-id)**
3. Node.js v14.0.0 or newer

## 🚀 Getting Started

```sh
git clone https://github.com/XSaitoKungX/Magic-Music.git
cd Magic-Music
npm install
```

Folgen Sie nach Abschluss der Installation den Konfigurationsanweisungen und führen Sie dann `node index.js` aus, um den Bot zu starten.

## ⚙️ Konfigurationen

Kopieren oder benennen Sie `config.json.example` in `config.json` um und füllen Sie die Werte aus:

⚠️ **Hinweis: Begehen oder teilen Sie Ihre Token oder API-Schlüssel niemals öffentlich** ⚠️

```json
{
  "TOKEN": "",
  "YOUTUBE_API_KEY": "",
  "SOUNDCLOUD_CLIENT_ID": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "",
  "PRUNING": false,
  "LOCALE": "de",
  "DEFAULT_VOLUME": 100,
  "STAY_TIME": 30
}
```

## 🐬 Docker-Konfiguration

Für diejenigen, die lieber unseren [Docker-Container](https://hub.docker.com/repository/docker/eritislami/evobot) verwenden möchten, können Sie Werte aus `config.json` als Umgebungsvariablen bereitstellen.

```shell
docker run -e "TOKEN=<discord-token>" -e "YOUTUBE_API_KEY=<youtube-key>" eritislami/evobot
```

## 📝 Features & Commands

> Note: The default prefix is '/'

* 🎶 Musik von YouTube über URL abspielen

`mc!play https://www.youtube.com/watch?v=NaFd8ucHLuo`

* 🔎 Musik von YouTube per Suchanfrage abspielen

`mc!play abcdefu`

* 🎶 Musik von Soundcloud über URL abspielen

`mc!play https://soundcloud.com/blackhorsebrigade/pearl-jam-alive`

* 🔎 Suchen und wählen Sie Musik zum Abspielen aus

`mc!search Nico Santos`

Antworten Sie mit der Songnummer oder den durch Komma getrennten Nummern, die Sie spielen möchten

Beispiele: `1` or `1,2,3`

* 📃 YouTube-Wiedergabelisten über URL abspielen

`mc!playlist https://www.youtube.com/watch?v=YlUKcNNmywk&list=PL5RNCwK3GIO13SR_o57bGJCEmqFAwq82c`

* 🔎 Spielen Sie YouTube-Wiedergabelisten über eine Suchanfrage ab

`/playlist linkin park meteora`
* Now Playing (mc!np)
* Queue system (mc!queue, mc!q)
* Loop / Repeat (mc!loop)
* Shuffle (mc!shuffle)
* Volume control (mc!volume, mc!v)
* Lyrics (mc!lyrics, mc!ly)
* Pause (mc!pause)
* Resume (mc!resume, mc!r)
* Skip (mc!skip, mc!s)
* Skip to song # in queue (mc!skipto, mc!st)
* Move a song in the queue (mc!move, mc!mv)
* Remove song # from queue (mc!remove, mc!rm)
* Play an mp3 clip (mc!clip song.mp3) (put the file in sounds folder)
* List all clips (mc!clips)
* Show ping to Discord API (mc!ping)
* Show bot uptime (mc!uptime)
* Toggle pruning of bot messages (mc!pruning)
* Help (mc!help, mc!h)
* Command Handler from [discordjs.guide](https://discordjs.guide/)
* Media Controls via Reactions

<!-- ![reactions](https://i.imgur.com/9S7Omf9.png) -->
<div align="left"><img src="/Images/Search.png"></div><div align="center"><img src="/Images/play.png"></div><div align="right"><img src="/Images/lyrics.png"></div>

<div align="left"><img src="/Images/now playing.png"></div><div align="center"><img src="/Images/queue.png">

## 🌎 Locales

Derzeit verfügbare Gebietsschemata sind:
- English (en)
- Arabic (ar)
- Brazilian Portuguese (pt_br)
- Dutch (nl)
- French (fr)
- German (de)
- Greek (el)
- Indonesian (id)
- Italian (it)
- Japanese (ja)
- Korean (ko)
- Polish (pl)
- Russian (ru)
- Simplified Chinese (zh_cn)
- Singaporean Mandarin (zh_sg)
- Spanish (es)
- Swedish (sv)
- Traditional Chinese (zh_tw)
- Thai (th)
- Turkish (tr)
- Ukrainian (uk)
- Vietnamese (vi)
- Kreuzen Sie [Beitragend](#-Beitragend) an, wenn Sie helfen möchten, weitere Sprachen hinzuzufügen!
- Verwenden Sie für Sprachen bitte das Zwei-Buchstaben-Format [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

## 🤝 Contributing

1. [Fork the repository](https://github.com/XSaitoKungX/Magic-Music/fork)
2. Clone your fork: `git clone https://github.com/your-username/Magic-Music.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Stage changes `git add .`
5. Commit your changes: `cz` OR `npm run commit` do not use `git commit`
6. Push to the branch: `git push origin my-new-feature`
7. Submit a pull request

## 📝 Credits

[@iCrawl](https://github.com/iCrawl) Für das in dieser Anwendung verwendete Warteschlangensystem, das von [@iCrawl/discord-music-bot](https://github.com/iCrawl/discord-music-bot) angepasst wurde
