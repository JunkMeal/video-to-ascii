# video-to-ascii
Plays bad apple (or other videos) in NodeJS command line (other videos too but not too well)

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
    "join": "",
    "color": true
}
```

## Chars
Ascii characters that will represent pixels

## FPS
The fps that the frames will be played at

## Join
The spacing between pixels

## Color
Enables colors
