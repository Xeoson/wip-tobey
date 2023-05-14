const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const DotenvWebpackPlugin = require("dotenv-webpack");
const ESlintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "images/[name].[hash][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new MiniCssExtractPlugin(),
    new DotenvWebpackPlugin(),
    new ESlintPlugin(),
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ca]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        exclude: "/node_modules/",
      },
      { test: /\.(ts|tsx)$/, use: "babel-loader", exclude: "/node_modules/" },
      {
        test: /\.(png|jpg|webp|ttf)$/,
        type: "asset",
        exclude: "/node_modules/",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
