const Jimp = require('jimp');

(async function(){
    const image = await Jimp.read('img/images2.jpg');

    const font = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
    image.print(font, 0, 0, "Water-Mark");

    image.write('watermark/wm-1.jpg');
})();

