const path = require('path');

// absolute path
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  // target for bundle 
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // execute in reserve order
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    // setting of document root
    contentBase: outputPath
  }
}
