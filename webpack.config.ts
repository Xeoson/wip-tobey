import path from 'path'
import { Configuration } from 'webpack'
import buildDevServer from './config/webpack/buildDevServer'
import buildPlugins from './config/webpack/buildPlugins'
import buildRules from './config/webpack/buildRules'

export const isDev = process.env.NODE_ENV !== 'production'

const config: Configuration = {
  mode: isDev ? 'development' : 'production',
  entry: [path.resolve(__dirname, 'src', 'main.tsx')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true,
    assetModuleFilename: 'images/[name].[hash][ext]',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: buildPlugins(),
  module: {
    rules: buildRules(),
  },
  devServer: buildDevServer(),
}

export default config
