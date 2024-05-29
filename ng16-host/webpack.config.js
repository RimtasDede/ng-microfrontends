const { shareAll, share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const config = withModuleFederationPlugin({
  library: { type: 'module' },
  remotes: {
    'ng16-remote1': 'http://localhost:4201/remoteEntry.js',
    'ng14-remote1': 'http://localhost:4203/remoteEntry.js',
  },
  // shared: {
  //   ...shareAll({
  //     singleton: false,
  //     strictVersion: false,
  //     requiredVersion: 'auto',
  //   }),
  // },
  shared: share({
    "@angular/core": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
    "@angular/common": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
    "@angular/router": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
    "@angular/common/http": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
  }),

});

module.exports = {
  ...config,
  output: {
    ...config.output,
    scriptType: 'text/javascript',
  },
};
