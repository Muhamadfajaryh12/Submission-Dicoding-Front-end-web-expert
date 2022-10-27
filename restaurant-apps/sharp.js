const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/heros');
const destination = path.resolve(__dirname, 'dist/heros');
const targetLogo = path.resolve(__dirname, 'src/public/logo');
const destinationLogo = path.resolve(__dirname, 'dist/logo');
if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}
if (!fs.existsSync(destinationLogo)) {
  fs.mkdirSync(destinationLogo);
}

fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-dekstop.jpg`,
      ));
    sharp(`${target}/${image}`)
      .resize(240)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-mobile.jpg`,
      ));
  });
fs.readdirSync(targetLogo)
  .forEach((image) => {
    sharp(`${targetLogo}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        `${destinationLogo}/${image.split('.').slice(0, -1).join('.')}-dekstop.png`,
      ));
    sharp(`${targetLogo}/${image}`)
      .resize(120)
      .toFile(path.resolve(
        __dirname,
        `${destinationLogo}/${image.split('.').slice(0, -1).join('.')}-mobile.png`,
      ));
  });
