import HtmlWebpackPlugin from "html-webpack-plugin";
import { join } from "path";

const srcDir = join(__dirname, "src");
const scriptDir = join(srcDir, "scripts");
const reactDir = join(srcDir, "react");
const distDir = join(__dirname, "dist");

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
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  let formatted = this;
  for (const arg in arguments) {
    formatted = formatted.replace("{" + arg + "}", arguments[arg]);
  }
  return formatted;
};

export const mode = "development";
export const entry = {
  setting: join(reactDir, "setting-index.tsx"),
  popup: join(reactDir, "popup-index.tsx"),
  addBtn: join(scriptDir, "add-button.ts"),
};
export const output = {
  path: join(distDir),
  filename: "[name].js",
};
export const plugins = [
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
];
export const module = {
  rules: [
    {
      test: /\.jsx?/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    },
    {
      test: /\.tsx?$/,
      use: ["babel-loader", "ts-loader"],
    },
    {
      test: /\.ts?$/,
      use: "ts-loader",
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
};
export const resolve = {
  extensions: [".js", ".jsx", ".ts", ".tsx"],
};
export const devtool = "inline-source-map";
