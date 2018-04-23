const { composeBundles } = require('redux-bundler')

const config = require('../config')
const createClient = require('./client')

const appBundle = {
  name: 'app',
  getExtraArgs: (store) => {
    return {
      config,
      client: createClient(config)
    }
  }
}

module.exports = composeBundles(
  appBundle,
  require('./routes'),
  require('./bundles/authentication'),
  require('./bundles/users'),
)
