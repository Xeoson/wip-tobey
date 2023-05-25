import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'

export default (isDev: boolean): RuleSetRule[] => [
  {
    test: /\.(s?css)$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[path]-[hash]',
          },
        },
      },
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
