const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const srcDir = path.join(__dirname, "src");
const scriptDir = path.join(srcDir, "scripts");
const htmlDir = path.join(srcDir, "html");
const distDir = path.join(__dirname, "dist");

module.exports = {
  mode: "none",
  entry: {
    addImageBtn: path.join(scriptDir, "add-image-button.js"),
  },
  output: {
    path: path.join(distDir, "scripts"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      filename: path.join(distDir, "html", "options.html"),
      template: path.join(htmlDir, "options.html"),
    }),
  ],
  devtool: "inline-source-map",
};
