const fs = require('fs');
const path = require('path');
function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }
  const files = fs.readdirSync(source);
  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);
    if (fs.statSync(sourcePath).isDirectory()) {
      copyFolderRecursiveSync(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, path.join(target, file));
    }
  });
}
function removeFolder(folderPath) {
  fs.access(folderPath, fs.constants.F_OK, (err) => {
    if (err) {
    } else {
      // Remove the folder
      fs.rmdir(folderPath, { recursive: true }, (err) => {
        if (err) {
          console.error('Error:', err);
        } else {
        }
      });
    }
  });
}
function baseUpdateFolder(source, target, callback) {
  removeFolder(target);
  setTimeout(() => {
    if (typeof callback === 'function') {
      callback(source, target);
    }
  }, 1000);
}
function updateFolder(source, target) {
  baseUpdateFolder(source, target, copyFolderRecursiveSync);
}
module.exports = updateFolder;
