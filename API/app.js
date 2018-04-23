const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('winston');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const knex = require('./knex');

const authentication = require('./authentication');

const { join } = require('path')
const { readFileSync } = require('fs')
let indexHtml = readFileSync(join(__dirname, '../public/index.html'), 'utf8')

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// Enable CORS, security, compression, and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (app.get('env') === 'development') {
  indexHtml = indexHtml.replace('bundle.js', 'http://localhost:8080/bundle.js')
}
app.use((req, res, next) => {
  // const { pathname } = Url.parse(req.url)
  // const matches = matchRoutes(routes, pathname)
  // if (matches.length === 0) return next()
  // res.setHeader('content-type', 'text/html')
  res.end(indexHtml)
})

// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

app.configure(knex);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);
// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
