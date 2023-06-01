import path from 'path'
import { Configuration } from 'webpack'
import buildDevServer from './config/webpack/buildDevServer'
import buildPlugins from './config/webpack/buildPlugins'
import buildRules from './config/webpack/buildRules'

interface IEnv {
  isDev: boolean
}

export default ({isDev}: IEnv): Configuration => {

	const config: Configuration = {
    mode: isDev ? 'development' : 'production',
    entry: [path.resolve(__dirname, 'src', 'main.tsx')],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
      assetModuleFilename: 'images/[name].[hash][ext]',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      modules: ['node_modules', path.resolve(__dirname, 'src')],
    },
    plugins: buildPlugins(isDev),
    module: {
      rules: buildRules(isDev),
    },
  }

	if (isDev) {
		config.devtool = 'inline-source-map'
		config.devServer = buildDevServer()
	}

	return config
}
