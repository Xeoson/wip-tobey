import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
import { isDev } from '../../webpack.config'

export default (): RuleSetRule[] => [
  {
    test: /\.(s?css)$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
    exclude: '/node_modules/',
  },
  {
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [isDev && require.resolve('react-refresh/babel')].filter(
            Boolean
          ),
        },
      },
    ],
    exclude: '/node_modules/',
  },
  {
    test: /\.(png|jpe?g|webp|ttf)$/,
    type: 'asset',
    exclude: '/node_modules/',
  },
  {
    test: /\.svg$/i,
    issuer: /\.tsx?$/,
    use: ['@svgr/webpack'],
  },
]
