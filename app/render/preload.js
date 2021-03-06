/* Javascript injected into the page on-load */
var remote = require('electron').remote;
var is = require('electron-is');

window.IRCCLOUD_DESKTOP_VERSION = remote.app.getVersion();

window.addEventListener('wheel', function (e) {
  // console.log('onwheel');
});

if (is.dev()) {
  window.__devtron = {require: require, process: process};
  require('devtron').install();
}

require('./focus')();
require('./zoom')();
require('./spellcheck')();
require('./irc-url')();
require('./notification')();
require('./user')();
