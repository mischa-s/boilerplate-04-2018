const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client');
const authentication = require('@feathersjs/authentication-client');
const io = require('socket.io-client');

const socket = io();

const localStorage = window ? window.localStorage : null

const client = feathers()
  .configure(socketio(socket))
  .configure(authentication({
    storage: localStorage
  }))

window.client = client

module.exports = client
