const { createRouteBundle } = require('redux-bundler')

module.exports = createRouteBundle({
  '/': require('./pages/application'),
  '*': require('./components/app/not-found')
})
