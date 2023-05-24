import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import DotenvWebpackPlugin from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { WebpackPluginInstance } from 'webpack'

export default (isDev: boolean): WebpackPluginInstance[] =>
  [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[path].[name].css' : '[name].[contenthash].css',
      chunkFilename: isDev ? '[path].[id].css' : '[id].[contenthash].css',
    }),
    new DotenvWebpackPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean) as WebpackPluginInstance[]
