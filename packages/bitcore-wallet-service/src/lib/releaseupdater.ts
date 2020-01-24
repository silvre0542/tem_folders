// import express from 'express';
// import glob from 'glob';
// import { ExpressApp } from './expressapp';

// var version_compare = require('locutus/php/info/version_compare');
// var preg_quote = require('locutus/php/pcre/preg_quote');

// var types = {
//   'main.css': './release/main.{version}.css',
//   'main.js': './release/main.{version}.js',
//   'vendor.js': './release/vendor.{version}.js'
// };

// export class ReleaseUpdater {
//   run(req, cb) {
//     try {
//       let versions = req.query.v;
//       let resp = {};
//       Object.keys(versions).forEach(x => {
//         let path = types[x];
//         if (!path) return;

//         let regex = preg_quote(path).replace(
//           '\\{version\\}',
//           '((\\d+\\.)(\\d+\\.)(\\d))'
//         );

//         let files = glob.sync(path.replace('{version}', '*'));
//         let latest, latestUrl;

//         files.forEach(f => {
//           console.log(f);

//           let matches = f.match(regex);
//           if (!matches) return;

//           let ver = matches[1];
//           console.log(ver);
//           if (version_compare(ver, latest)) {
//             latest = ver;
//             latestUrl = req.protocol + '://' + req.get('host') + f.substring(1);
//             console.log(latestUrl);
//           }

//           if (latest && version_compare(latest, versions[x])) {
//             resp[x] = { url: latestUrl, version: latest };
//           }
//         });
//       });
//       cb(null, resp);
//     } catch (ex) {
//       cb(ex.message, null);
//     }
//   }
// }
