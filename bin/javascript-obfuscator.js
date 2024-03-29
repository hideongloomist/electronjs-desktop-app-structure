const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');
const UglifyJS = require('uglify-js');
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomElementFromArray(arr) {
  // Generate a random index within the bounds of the array length
  const randomIndex = Math.floor(Math.random() * arr.length);
  // Return the element at the randomly selected index
  return arr[randomIndex];
}
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}
// Function to minify JS file
const IdentifierNamesGenerator = ['hexadecimal', 'mangled', 'mangled-shuffled'];
const StringArrayEncoding = ['base64', 'rc4'];
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}
function obfuscatedJSCode(inputJS) {
  const obfuscated = JavaScriptObfuscator.obfuscate(inputJS, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: randomInRange(75, 100) / 100,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: randomInRange(75, 100) / 100,
    identifierNamesGenerator: randomElementFromArray(IdentifierNamesGenerator).toString(),
    identifiersPrefix: `${generateRandomString(randomInRange(1, 5))}_`,
    disableConsoleOutput: false,
    log: true,
    numbersToExpressions: randomInRange(1, 10) > 6,
    renameGlobals: randomInRange(1, 10) > 6,
    rotateStringArray: true,
    selfDefending: true,
    shuffleStringArray: randomInRange(1, 10) > 6,
    simplify: randomInRange(1, 10) > 6,
    splitStrings: randomInRange(1, 10) > 6,
    stringArray: true,
    stringArrayThreshold: randomInRange(75, 100) / 100,
    unicodeEscapeSequence: true,
  }).getObfuscatedCode();
  const minifiedJS = UglifyJS.minify(obfuscated, { mangle: true }).code;
  return minifiedJS;
}
function obfuscateRandomJSFile(filePath) {
  const inputJS = fs.readFileSync(filePath, 'utf8');
  // Depend on what you need, you can create .safe.ts file the edit here to safe.js to you safe file read decode harder
  if (filePath.endsWith('constant.js')) {
    const obfuscatedCode1 = obfuscatedJSCode(inputJS);
    const obfuscatedCode2 = obfuscatedJSCode(obfuscatedCode1);
    const obfuscatedCodeLast = JavaScriptObfuscator.obfuscate(obfuscatedCode2, {
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: randomInRange(75, 100) / 100,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: randomInRange(75, 100) / 100,
      identifierNamesGenerator: randomElementFromArray(IdentifierNamesGenerator).toString(),
      identifiersPrefix: `${generateRandomString(randomInRange(1, 5))}_`,
      disableConsoleOutput: false,
      log: true,
      numbersToExpressions: randomInRange(1, 10) > 6,
      renameGlobals: randomInRange(1, 10) > 6,
      rotateStringArray: true,
      selfDefending: true,
      shuffleStringArray: randomInRange(1, 10) > 6,
      simplify: randomInRange(1, 10) > 6,
      splitStrings: randomInRange(1, 10) > 6,
      stringArray: true,
      stringArrayEncoding: [randomElementFromArray(StringArrayEncoding).toString()],
      stringArrayThreshold: randomInRange(75, 100) / 100,
      unicodeEscapeSequence: true,
    }).getObfuscatedCode();
    const minifiedJS = UglifyJS.minify(obfuscatedCodeLast, { mangle: true }).code;
    fs.writeFileSync(filePath, minifiedJS);
    return;
  }
  const obfuscatedCode = JavaScriptObfuscator.obfuscate(inputJS, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: randomInRange(75, 100) / 100,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: randomInRange(75, 100) / 100,
    identifierNamesGenerator: randomElementFromArray(IdentifierNamesGenerator).toString(),
    identifiersPrefix: `${generateRandomString(randomInRange(1, 5))}_`,
    disableConsoleOutput: false,
    log: true,
    numbersToExpressions: randomInRange(1, 10) > 6,
    renameGlobals: randomInRange(1, 10) > 6,
    rotateStringArray: true,
    selfDefending: true,
    shuffleStringArray: randomInRange(1, 10) > 6,
    simplify: randomInRange(1, 10) > 6,
    splitStrings: randomInRange(1, 10) > 6,
    stringArray: true,
    stringArrayEncoding: [randomElementFromArray(StringArrayEncoding).toString()],
    stringArrayThreshold: randomInRange(75, 100) / 100,
    unicodeEscapeSequence: true,
  }).getObfuscatedCode();
  const minifiedJS = UglifyJS.minify(obfuscatedCode, { mangle: true }).code;
  fs.writeFileSync(filePath, minifiedJS);
  return;
}
// Function to loop through directory and minify files
function obfuscateJSFilesInDirRandom(dirPath) {
  fs.readdirSync(dirPath).forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      obfuscateJSFilesInDirRandom(filePath); // Recursive call for subdirectories
    } else {
      const ext = path.extname(filePath);
      switch (ext) {
        case '.js':
          obfuscateRandomJSFile(filePath);
          break;
        default:
          // Do nothing for other file types
          break;
      }
    }
  });
}
// // Directory path where files are located (public folder in this case)
// const publicFolderPath = path.join(__dirname, '../product/public');
// // Minify files in the public folder
// minifyFilesInDir(publicFolderPath);
// const publicDistPath = path.join(__dirname, '../product/');
// minifyFilesInDir(publicDistPath);
const publicDistPath = path.join(__dirname, '../dist/');
obfuscateJSFilesInDirRandom(publicDistPath);
module.exports = obfuscateJSFilesInDirRandom;
