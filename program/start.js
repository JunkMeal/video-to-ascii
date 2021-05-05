const {chars, fps, join} = require("../config.json")
let frame = 1;
let maxframes = require("fs").readdirSync(__dirname+"/frames/").length
const Jimp = require("jimp")
var setTitle = require('console-title');
setTitle(`Video to Ascii NodeJS | fps: ${fps} | frame: ${frame} | Made by JunkMeal`);
s()
async function s(){
    frame++;
    setTitle(`Video to Ascii NodeJS | fps: ${fps} | frame: ${frame} | Made by JunkMeal`)
    let number = frame.toString();
    if(frame < 10) number = "00"+frame;
    else if(frame < 100) number = "0"+frame;
    Jimp.read(`frames/frame${number}.jpg`, function (err, image) {
        let pixels = [] 
        let x = 0;
        let y = 0;
        while(y !== 36){
         const {r,g,b} = Jimp.intToRGBA(image.getPixelColor(x, y))
         const relativeLuminance = (0.2126*r + 0.7152*g + 0.0722*b); 
         let index = Math.floor(relativeLuminance / (255 / chars.length));
         if(chars[index]) pixels.push(chars[index])
         else pixels.push(chars[0])
         if(x !== 50) x++;
         else {
             x = 0;
             y++;
             pixels.push("\n")
         }
        }
        //console.clear()
        process.stdout.write("\u001b[0;0H")
        process.stdout.write(join+pixels.join(join))
        if(frame !== maxframes) setTimeout(s,1000 / fps)
    });
}
