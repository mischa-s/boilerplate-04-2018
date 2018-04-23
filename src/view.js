const { createRenderer: createStyleRenderer } = require('fela')
const { render } = require('react-dom')
const h = require('react-hyperscript')

const defaultTheme = require('./themes/default')
const Provider = require('./components/app/provider')
const App = require('./components/app')

module.exports = view

function view ({ config, store }) {
  const styleRenderer = createStyleRenderer()
  addStyleSheet('https://fonts.googleapis.com/css?family=Roboto:300,400,500')
  addStyleSheet('https://fonts.googleapis.com/icon?family=Material+Icons')
  addStyleSheet('https://afeld.github.io/emoji-css/emoji.css')

  styleRenderer.renderStatic(`
    html, body, .root {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
    }
  `)

  const domRoot = document.createElement('div')
  domRoot.className = 'root'
  document.body.appendChild(domRoot)

  render(
    h(Provider, {
      store,
      styleRenderer,
      theme: defaultTheme
    }, [
      h(App)
    ]),
    domRoot
  )
}

function addStyleSheet (href) {
  var el = document.createElement('link')
  el.rel = 'stylesheet'
  el.href = href
  document.body.appendChild(el)
}
