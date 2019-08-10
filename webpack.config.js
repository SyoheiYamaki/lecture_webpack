const path = require('path');

// absolute path
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  // target for bundle 
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  }
}
