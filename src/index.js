/* global io, window */

import style from "./main.css";
const React = require('react');
const ReactDOM = require('react-dom');
const Application = require('./application').default
const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client');
const authentication = require('@feathersjs/authentication-client');
const io = require('socket.io-client');

const socket = io('http://localhost:3030/');

const client = feathers()
  .configure(socketio(socket))
  .configure(authentication({
    storage: window.localStorage
  }))
window.client = client

ReactDOM.render(
  <Application client={client} />,
  document.getElementById('app')
);
