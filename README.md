# bad-apple-nodejs
Plays bad apple in NodeJS command line (other videos too but not too well)

## Installation
### Works on linux and windows (scripts only for linux)
#### You need to have ffmpeg, nodejs and npm installed
```sh
sh ffmpeg.sh
Fps? video FPS
Filename? dir/filename
# wait until ffmpeg finishes
sh start.sh # starts playing
```
---

## Config
```json
{
    "chars": [" ","░", "▒", "▓", "█"],
    "fps": 30,
    "join": ""
}
```

## Chars
Ascii characters that will represent pixels

## FPS
The fps that the frames will be played at

## Join
The spacing between pixels
