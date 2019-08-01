const path = require('path');

module.exports = ({ config, mode }) => {
  config.watchOptions = {
    ...config.watchOptions,
    ignored: [
      // ignore all `node_modules` except `@modulz/primitives`
      /node_modules([\\]+|\/)+(?!@modulz\/primitives)/,
      // ignore all `node_modules` inside `@modulz/primitives`
      /\@modulz\/primitives([\\]+|\/)node_modules/,
    ],
  };
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    include: path.resolve(__dirname, '../src'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
