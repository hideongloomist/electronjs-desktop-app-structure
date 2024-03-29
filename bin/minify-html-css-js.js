const fs = require('fs');
const path = require('path');
const minify = require('html-minifier').minify;
const CleanCSS = require('clean-css');
const SVGO = require('svgo');
const UglifyJS = require('uglify-js');
// Function to minify HTML file
function minifyHTMLFile(filePath) {
  const inputHtml = fs.readFileSync(filePath, 'utf8');
  const minifiedHtml = minify(inputHtml, {
    collapseWhitespace: true,
    removeComments: true,
  });
  fs.writeFileSync(filePath, minifiedHtml);
}
// Function to minify JS file
function minifyJSFile(filePath) {
  const inputJS = fs.readFileSync(filePath, 'utf8');
  const minifiedJS = UglifyJS.minify(inputJS, { mangle: true }).code;
  fs.writeFileSync(filePath, minifiedJS);
}
// Function to minify CSS file
function minifyCSSFile(filePath) {
  const inputCSS = fs.readFileSync(filePath, 'utf8');
  const minifiedCSS = new CleanCSS().minify(inputCSS).styles;
  fs.writeFileSync(filePath, minifiedCSS);
}
function minifySVGFile(filePath) {
  try {
    // Read the SVG file
    const svgContent = fs.readFileSync(filePath, 'utf8');
    // Create SVGO instance with desired options
    const svgo = new SVGO({
      plugins: [
        {
          name: 'removeDoctype',
          active: true,
        },
        {
          name: 'removeXMLProcInst',
          active: true,
        },
        {
          name: 'removeComments',
          active: true,
        },
        {
          name: 'removeMetadata',
          active: true,
        },
        {
          name: 'removeTitle',
          active: true,
        },
        {
          name: 'removeDesc',
          active: true,
        },
        {
          name: 'removeUselessDefs',
          active: true,
        },
        {
          name: 'removeXMLNS',
          active: false,
        },
        {
          name: 'removeEditorsNSData',
          active: true,
        },
        {
          name: 'removeEmptyAttrs',
          active: true,
        },
        {
          name: 'removeHiddenElems',
          active: true,
        },
        {
          name: 'removeEmptyText',
          active: true,
        },
        {
          name: 'removeEmptyContainers',
          active: true,
        },
        {
          name: 'removeViewBox',
          active: false,
        },
        {
          name: 'cleanupEnableBackground',
          active: true,
        },
        {
          name: 'convertStyleToAttrs',
          active: true,
        },
        {
          name: 'convertColors',
          params: {
            currentColor: false,
          },
          active: true,
        },
        {
          name: 'convertPathData',
          active: true,
        },
        {
          name: 'convertTransform',
          active: true,
        },
        {
          name: 'removeUnknownsAndDefaults',
          active: true,
        },
        {
          name: 'removeNonInheritableGroupAttrs',
          active: true,
        },
        {
          name: 'removeUselessStrokeAndFill',
          active: true,
        },
        {
          name: 'removeUnusedNS',
          active: true,
        },
        {
          name: 'cleanupIDs',
          active: true,
        },
        {
          name: 'cleanupNumericValues',
          active: true,
        },
        {
          name: 'cleanupListOfValues',
          active: true,
        },
        {
          name: 'moveElemsAttrsToGroup',
          active: true,
        },
        {
          name: 'moveGroupAttrsToElems',
          active: true,
        },
        {
          name: 'collapseGroups',
          active: true,
        },
        {
          name: 'removeRasterImages',
          active: false,
          params: {
            keepDataURI: false,
          },
        },
        {
          name: 'mergePaths',
          active: true,
          params: {
            collapseRepeated: true,
            force: true,
            leadingZero: false,
            lineToCurveThreshold: 0,
            moveElemsAttrs: true,
            moveGroupAttrsToElems: true,
            removeEmptyAttrs: true,
            removeEmptyContainers: true,
            removeEmptyText: true,
            removeUnusedNS: true,
            removeUselessStrokeAndFill: true,
            sortAttrs: true,
          },
        },
        {
          name: 'convertShapeToPath',
          active: true,
        },
        {
          name: 'sortAttrs',
          active: true,
        },
        {
          name: 'removeDimensions',
          active: false,
        },
        {
          name: 'removeAttrs',
          active: false,
        },
      ],
    });
    // Optimize the SVG content
    svgo
      .optimize(svgContent, { path: filePath })
      .then((result) => {
        // Write the optimized SVG content back to the file
        fs.writeFileSync(filePath, result.data, 'utf8');
      })
      .catch((error) => {});
  } catch (error) {}
}
// Function to loop through directory and minify files
function minifyFilesInDir(dirPath) {
  fs.readdirSync(dirPath).forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      minifyFilesInDir(filePath); // Recursive call for subdirectories
    } else {
      const ext = path.extname(filePath);
      switch (ext) {
        case '.js':
          minifyJSFile(filePath);
          break;
        case '.html':
          minifyHTMLFile(filePath);
          break;
        case '.css':
          minifyCSSFile(filePath);
          break;
        case '.svg':
          minifySVGFile(filePath);
          break;
        default:
          // Do nothing for other file types
          break;
      }
    }
  });
}
module.exports = minifyFilesInDir;
