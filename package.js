Package.describe({
  name: 'mozfet:materialize-icons',
  summary: 'Dynamic Materialize Icons ',
  version: '0.0.2',
  git: 'https://github.com/mozfet/meteor-autoform-materialize-icons.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4');
  api.use(['templating', 'blaze', 'underscore'], 'client');
  api.use('ecmascript@0.7.2');
  api.addFiles([
    'index.js'
  ], 'client');
});
