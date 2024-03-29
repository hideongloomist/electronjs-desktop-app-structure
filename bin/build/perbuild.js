const updateFolder = require('../update-folder');
const path = require('path');
//dist
const sourceFolder = path.join(__dirname, `../../dist`);
const targetFolder = path.join(__dirname, `../../build/dist`);
updateFolder(sourceFolder, targetFolder);
//public
const sourceFolder1 = path.join(__dirname, `../../public`);
const targetFolder1 = path.join(__dirname, `../../build/public`);
updateFolder(sourceFolder1, targetFolder1);
