import {Configuration} from 'webpack-dev-server'

export default (): Configuration => ({historyApiFallback: true, hot: true})