const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader", // 4. Inject styles into DOM if link does not work
          MiniCssExtractPlugin.loader, // 3. Link styles into DOM
          "css-loader", // 2. Convert css into commonjs
          "sass-loader", // 1. Convert sass into regular css
        ],
      },
      {
        test: /\.(woff|woff2|otf|ttf)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts"
          },
        },
      },
      {
        test: /\.(svg|jpg|png|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images"
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body"
    }),
  ],
};
