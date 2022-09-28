const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  entry: {index: path.resolve(__dirname, "src", "index.js") },
  output: {path: path.resolve(__dirname, "build")}
};