const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const srcDir = path.join(__dirname, "src");
const scriptDir = path.join(srcDir, "scripts");
const reactDir = path.join(srcDir, "react");
const distDir = path.join(__dirname, "dist");

const templateHtml = `
<html>
  <script defer src="{0}"></script>
  <body>
    <div id="root"></div>
  </body>
</html>
`;
// eslint-disable-next-line no-extend-native
String.prototype.format = function () {
  let formatted = this;
  for (const arg in arguments) {
    formatted = formatted.replace("{" + arg + "}", arguments[arg]);
  }
  return formatted;
};

module.exports = {
  mode: "development",
  entry: {
    setting: path.join(reactDir, "setting-index.js"),
    popup: path.join(reactDir, "popup-index.js"),
    addBtn: path.join(scriptDir, "add-button.js"),
  },
  output: {
    path: path.join(distDir),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "setting.html",
      inject: false,
      templateContent: templateHtml.format("setting.js"),
    }),
    new HtmlWebpackPlugin({
      filename: "popup.html",
      inject: false,
      templateContent: templateHtml.format("popup.js"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg|png|jpg|gif$/,
        type: "asset/inline",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
          },
        },
      },
    ],
  },
  devtool: "inline-source-map",
};
