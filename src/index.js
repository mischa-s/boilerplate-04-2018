
const React = require('react');
const ReactDOM = require('react-dom');
const Application = require('./application')
const client = require('./client')

ReactDOM.render(
  <Application client={client} />,
  document.getElementById('app')
);
