/* global io, window */

import style from "./main.css";
const React = require('react');
const ReactDOM = require('react-dom');
const Application = require('./application').default
const feathers = require('@feathersjs/feathers')
const rest = require('@feathersjs/rest-client')
const auth = require('@feathersjs/authentication-client')

const localStorage = window ? window.localStorage : null

const client = feathers()
  .configure(rest('/api').fetch(window.fetch.bind(window)))
  .configure(auth({
    storage: localStorage,
    accessTokenKey: 'minded'
  }))

window.client = client

ReactDOM.render(
  <Application client={client} />,
  document.getElementById('app')
);
