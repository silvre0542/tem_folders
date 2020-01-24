'use strict';

var express = require('express');
var glob = require('glob');
var version_compare = require('locutus/php/info/version_compare');
var preg_quote = require('locutus/php/pcre/preg_quote');
//var path = require('path');

var types = {
  'css/main.css': './release/css/main.{version}.css',
  'js/main.js': './release/js/main.{version}.js'
};

function ReleaseUpdater() {}

ReleaseUpdater.prototype.init = function(app, router) {
  app.use('/release', express.static('release'));
  router.get('/ver', function(req, res) {
    var updater = new ReleaseUpdater();
    updater.run(req, function(err, data) {
      if (err) return returnError(err, res, req);
      res.json(data);
      res.end();
    });
  });
};

ReleaseUpdater.prototype.run = function(req, cb) {
  var self = this;
  try {
    let versions = req.query.v;
    let resp = {};
    Object.keys(versions).forEach(x => {
      let path = types[x];
      if (!path) return;

      let regex = preg_quote(path).replace(
        '\\{version\\}',
        '((\\d+\\.)(\\d+\\.)(\\d))'
      );

      let files = glob.sync(path.replace('{version}', '*'));
      let latest, latestUrl;

      files.forEach(f => {
        console.log(f);

        let matches = f.match(regex);
        if (!matches) return;

        let ver = matches[1];
        console.log(ver);
        if (version_compare(ver, latest)) {
          latest = ver;
          latestUrl = req.protocol + '://' + req.get('host') + f.substring(1);
          console.log(latestUrl);
        }

        if (latest && version_compare(latest, versions[x])) {
          resp[x] = { url: latestUrl, version: latest };
        }
      });
    });
    cb(null, resp);
  } catch (ex) {
    cb(ex.message, null);
  }
};

module.exports = ReleaseUpdater;
