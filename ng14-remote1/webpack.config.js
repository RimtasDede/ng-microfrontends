// const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// module.exports = withModuleFederationPlugin({

//   name: 'ng14-remote1',

//   exposes: {
//     './Component': './src/app/app.component.ts',
//   },

//   shared: {
//     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//   },

// });

// const { shareAll, share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// const config = withModuleFederationPlugin({
//   name: 'ng14-remote1',
//   exposes: {
//     './Module': './src/app/pokemon/pokemon.module.ts',
//     './Component': './src/app/pokemon/pokemon/pokemon.component.ts',
//   },
//   shared: share({
//     "@angular/core": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
//     "@angular/common": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
//     "@angular/router": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
//     "@angular/common/http": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
//   }),
  // shared: {
  //   ...shareAll({
  //     singleton: true,
  //     strictVersion: true,
  //     requiredVersion: 'auto'
  //   }),
  // },
// });

// console.log(config);

// const newConfig = {
//   ...config,
//   output: {
//     ...config.output,
//     scriptType: 'text/javascript',
//     publicPath: 'http://localhost:4203/',
//   },
// };

// module.exports = newConfig;



const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { share, SharedMappings } = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new SharedMappings();

sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  []
);

module.exports = {
  output: {
    uniqueName: 'ng14-remote1',
    scriptType: 'text/javascript',
    publicPath: 'http://localhost:4203/',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ng14-remote1',
      library: { type: 'module' },
      filename: 'remoteEntry.js',
      exposes: {
      //   './Module': './src/app/pokemon/pokemon.module.ts',
      //   './Component': './src/app/pokemon/pokemon/pokemon.component.ts',
        './Component': './src/bootstrap.ts',
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
      // shared: share({
      //   "@angular/core": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
      //   "@angular/common": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
      //   "@angular/router": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
      //   "@angular/common/http": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
      //   ...sharedMappings.getDescriptors()
      // }),
    }),
    sharedMappings.getPlugin(),
  ],
};
