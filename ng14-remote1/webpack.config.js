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

const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const config = withModuleFederationPlugin({
  name: 'ng14-remote1',
  exposes: {
    './Module': './src/app/pokemon/pokemon.module.ts',
    './Component': './src/app/pokemon/pokemon/pokemon.component.ts',
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
    publicPath: 'http://localhost:4203/',
  },
};

module.exports = newConfig;
