
const config = require('../webpack.config')(
  'development',
  { mode: 'development' }
)

// Remove the old webpack-hot-middleware client
config.entry = config.entry.filter(
  (entry) => !entry.startsWith('webpack-hot-middleware/client')
)

// webpack-dev-server will provide HMR
config.plugins = config.plugins.filter(
  (plugin) => plugin.constructor.name !== 'HotModuleReplacementPlugin'
)


config.devServer = {
  host: '0.0.0.0',
  port: 8002,
  public: 'localhost:8082',
  hot: true,
  historyApiFallback: true,
  watchOptions: {
    poll: 1000
  }
}


module.exports = config
