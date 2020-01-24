#!/usr/bin/env node

var spawn = require('child_process').spawn;
var async = require('async');

var scripts = [
  'messagebroker/messagebroker.js',
  'bcmonitor/bcmonitor.js',
  'emailservice/emailservice.js',
  'pushnotificationsservice/pushnotificationsservice.js',
  'fiatrateservice/fiatrateservice.js',
  'bws.js'
];

var curPort = 46000;

async.eachSeries(scripts, function(script, callback) {
  console.log(`Spawning ${script}`);

  var node;
  let script2 = './ts_build/' + script;
  // node = spawn('node', ['--inspect=' + curPort, script]);
  if (script2.indexOf('bws') > -1)
    node = spawn('node', ['--inspect-brk=' + curPort, script2]);
  else node = spawn('node', ['--inspect=' + curPort, script2]);

  curPort++;
  node.stdout.on('data', data => {
    console.log(`${data}`);
  });
  node.stderr.on('data', data => {
    console.error(`${data}`);
  });

  callback();
});
