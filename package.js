/* jshint ignore:start */
Package.describe({
  name: 'okc:web3',
  version: '0.18.3',
  summary: 'okc JavaScript API, middleware to talk to a okc node over RPC',
  git: 'https://github.com/ChakeraHu/huntdogs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "xmlhttprequest": "1.7.0"
});


Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  // api.use('3stack:bignumber@2.0.0', 'client');

  api.export(['Web3', 'BigNumber'], ['client', 'server']);

  api.addFiles('dist/web3.js', ['client', 'server']);
  api.addFiles('package-init.js', ['client', 'server']);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('test');
//   api.addFiles('test-tests.js');
// });
/* jshint ignore:end */
