const updateFolder = require('./update-folder');
const path = require('path');
//bootstrap
const sourceFolder = path.join(__dirname, `../node_modules/bootstrap/scss`);
const targetFolder = path.join(__dirname, `../vendors/bootstrap`);
updateFolder(sourceFolder, targetFolder);
const sourceFolder1 = path.join(__dirname, `../node_modules/bootstrap/dist/js`);
const targetFolder1 = path.join(__dirname, `../public/vendors/bootstrap`);
updateFolder(sourceFolder1, targetFolder1);
//fortawesome
const sourceFolder2 = path.join(__dirname, `../node_modules/@fortawesome/fontawesome-free/css`);
const targetFolder2 = path.join(__dirname, `../public/vendors/fortawesome/css`);
updateFolder(sourceFolder2, targetFolder2);
const sourceFolder3 = path.join(__dirname, `../node_modules/@fortawesome/fontawesome-free/svgs`);
const targetFolder3 = path.join(__dirname, `../public/vendors/fortawesome/svgs`);
updateFolder(sourceFolder3, targetFolder3);
const sourceFolder4 = path.join(
  __dirname,
  `../node_modules/@fortawesome/fontawesome-free/webfonts`,
);
const targetFolder4 = path.join(__dirname, `../public/vendors/fortawesome/webfonts`);
updateFolder(sourceFolder4, targetFolder4);
//jquery
const sourceFolder5 = path.join(__dirname, `../node_modules/jquery/dist`);
const targetFolder5 = path.join(__dirname, `../public/vendors/jquery`);
updateFolder(sourceFolder5, targetFolder5);
//jquery-easing
const sourceFolder6 = path.join(__dirname, `../node_modules/jquery-easing/dist`);
const targetFolder6 = path.join(__dirname, `../public/vendors/jquery-easing`);
updateFolder(sourceFolder6, targetFolder6);
//xlsx
const sourceFolder7 = path.join(__dirname, `../node_modules/xlsx/dist`);
const targetFolder7 = path.join(__dirname, `../public/vendors/xlsx`);
updateFolder(sourceFolder7, targetFolder7);
