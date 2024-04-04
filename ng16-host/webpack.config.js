const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const config = withModuleFederationPlugin({
  remotes: {
    'ng16-remote1': 'http://localhost:4201/remoteEntry.js',
    'ng14-remote1': 'http://localhost:4203/remoteEntry.js',
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});

module.exports = {
  ...config,
  output: {
    ...config.output,
    scriptType: 'text/javascript',
  },
};
