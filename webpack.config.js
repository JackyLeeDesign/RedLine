const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    // `path` is the folder where Webpack will place your bundles
    path: path.resolve(__dirname, "./dist"),
    // `publicPath` is where Webpack will load your bundles from (optional)
    publicPath: "/dist/",
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]"
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.csv$/,
        loader: "csv-loader",
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
