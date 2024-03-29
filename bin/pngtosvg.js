const fs = require('fs');
const potrace = require('potrace');
const path = require('path');
function pngToSvg(inputFilePath, outputFilePath) {
  // Configuration options for Potrace
  const options = {
    color: '#4f6cb0', // Specify the color in hexadecimal format (e.g., red)
  };
  // Read input PNG file
  const inputPng = fs.readFileSync(inputFilePath);
  // Convert PNG buffer to SVG
  potrace.trace(inputPng, options, (err, svg) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    // Write SVG to output file
    fs.writeFileSync(outputFilePath, svg);
    console.log('Conversion successful. SVG file saved as', outputFilePath);
  });
}
// Example usage:
// const input = path.join(__dirname, '../public/img/background/background1.png');
// const output = path.join(__dirname, '../public/img/background/background1.svg');
// pngToSvg(input, output);
const input = path.join(__dirname, '../build/build/icon.png');
const output = path.join(__dirname, '../build/build/icon.svg');
pngToSvg(input, output);
