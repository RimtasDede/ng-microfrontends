const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const config = withModuleFederationPlugin({
  name: 'ng16-remote1',
  exposes: {
    './Module': './src/app/fruits/fruits.module.ts',
    './Component': './src/app/fruits/fruits/fruits.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

const newConfig = {
  ...config,
  output: {
    ...config.output,
    scriptType: 'text/javascript',
    publicPath: 'http://localhost:4201/',
  },
};

module.exports = newConfig;

// const { shareAll, share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// const config = withModuleFederationPlugin({
//   name: 'mfe1',
//   filename: 'remoteEntry.js',
//   exposes: {
//     './Component': './src/app/app.component.ts',
//   },
//   shared:
//   share({
//     '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//     '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//     '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//     '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//   }),
//   // {
//   //   ...shareAll({
//   //     singleton: true,
//   //     strictVersion: true,
//   //     requiredVersion: 'auto',
//   //   }),
//   // },
// });

// console.log('conf', config);

// module.exports = {
//   ...config,
//   output: {
//     ...config.output,
//     uniqueName: 'mfe1',
//     // filename: '[name].[contenthash].js',
//     scriptType: 'text/javascript',
//     publicPath: 'http://localhost:4201/',
//   },
//   // experiments: {
//   //   ...config.experiments,
//   //   // topLevelAwait: true,
//   // },
//   optimization: {
//     runtimeChunk: false,
//     splitChunks: false,
//     minimize: true,
//   },
// };
