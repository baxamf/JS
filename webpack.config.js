const path = require('path');

module.exports = {
  mode: 'production',
  entry: "./src/main.js",
  devServer: {
    static: './dist',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
}