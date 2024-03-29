const minifyFilesInDir = require('../minify-html-css-js.js');
const path = require('path');
//dist
const targetFolder = path.join(__dirname, `../../build/dist`);
minifyFilesInDir(targetFolder);
//public
const targetFolder1 = path.join(__dirname, `../../build/public`);
minifyFilesInDir(targetFolder1);
