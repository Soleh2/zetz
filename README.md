## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/melcanz/melcanz-bot.git
cd melcanz-bot
npm i
node .
```

---------

## UNTUK PENGGUNA TERMUX
```
$ pkg update && upgrade -y
$ apt update && upgrade -y
$ pkg install ffmpeg
$ pkg install nodejs-lts
$ pkg install git
$ git clone https://github.com/melcanz/melcanz-bot.git
$ cd melcanz-bot
$ npm i
$ npm start
```
---------
## UNTUK PENGGUNA HEROKU

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/mcollina/heroku-buildpack-imagemagick.git

---------

## Arguments `node . [--options] [<session name>]` 

### `--session <nama file>`

menggunakan session dari nama file yang berbeda, default `session.data.json`

contoh nama file `ameys.json` maka penggunaannya `node . --session 'ameys'`

### `--prefix <prefix>`

* `prefixes` dipisahkan oleh masing-masing karakter
Setel awalan

### `--server`

Digunakan untuk [heroku](https://heroku.com/) atau pindai melalui situs web

### `--db <json-server-url>`

menggunakan db eksternal alih-alih db lokal, disarankan menggunakan mongodb
contoh Server `https://json-server.nurutomo.repl.co/`
kode: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

server harus memiliki spesifikasi seperti ini

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

Jika qr unicode kecil tidak mendukung

### `--img`

Aktifkan pemeriksa gambar melalui terminal

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------
<a href="https://melcanz.com/"><img src="https://telegra.ph/file/18b6f5487ffdcc5aa93a5.jpg" width="100" height="100"></a> | [![Melcanz](https://github.com/melcanz.png?size=100)](https://github.com/melcanz) | [![Ariffb](https://github.com/ariffb25.png?size=100)](https://github.com/ariffb25) 
----|----|----
[Melcanz API](https://melcanz.com/) | [Melcanz](https://github.com/melcanz) | [Ariffb](https://github.com/ariffb25) 
Powered by Melcanz API | Owner of Melcanz API | punya amel
