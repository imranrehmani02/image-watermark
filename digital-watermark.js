const dw = require('digital-watermarking');

let srcFileName = 'img/images2.jpg';

let waterMarkText = 'digital-12299/wM';

let fontSize = 0.6;
let enCodeFileName = 'digital-watermark/en-dig-wm-2.jpg';

 async function run()
 {
    await dw.transformImageWithText(srcFileName, waterMarkText, fontSize, enCodeFileName);

    //Decode image
    let deCodeFileName = 'digital-watermark/de-dig-wm-2.jpg';
    await dw.getTextFormImage(enCodeFileName, deCodeFileName);

 }
 run();