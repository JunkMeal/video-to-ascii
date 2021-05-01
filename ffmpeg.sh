read -p "FPS? "  fps
read -p "Filename? "  filename
rm -rf ./program/frames/
mkdir ./program/frames/
ffmpeg -i $filename -vf scale=50:36 output.mp4
ffmpeg -i output.mp4 -r $fps/1 program/frames/frame%03d.jpg
rm -f output.mp4
