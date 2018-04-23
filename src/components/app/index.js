const h = require('react-hyperscript')
const { compose } = require('recompose')
const { connect: connectStore } = require('redux-bundler-react')
const { partial } = require('ramda')
const Login = require('../../pages/login')
const Layout = require('./layout')

module.exports = compose(
  partial(connectStore, [
    'selectRoute',
    'selectAuthenticatedUser'
  ])
)(App)

function App (props) {
  const {
    user,
    route: Page
  } = props

  return (
    h(Layout, [
      user
        ? h(Page)
        : h(Login)
    ])
  )
}
