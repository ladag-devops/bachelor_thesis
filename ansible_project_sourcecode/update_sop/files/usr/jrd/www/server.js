'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
    config = require('./config/config'),
    mongoose = require('mongoose'),
    chalk = require('chalk');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
mongoose.Promise = Promise;
console.log(config.db);
var db = mongoose.connect(config.db, function(err) {
  if (err) {
    console.error(chalk.red('Could not connect to MongoDB!'));
    console.log(chalk.red(err));
  }
});

// Init the express application
var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

// Create socket.io proxy server
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({
  target: {
    host: 'localhost',
    port: 3002
  },
  ws: true,
  xfwd: true
});
proxy.on('error', function (err) {
  console.log('proxy:', err);
});

// Start the app by listening on <port>
var server = app.listen(config.port);
server.on('error', function (err) {
  console.log('server:', err);
});

// Proxy websocket
server.on('upgrade', function (req, socket, head) {
  proxy.ws(req, socket, head);
});
app.locals.proxy = proxy;

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('MEAN.JS application started on port ' + config.port);
