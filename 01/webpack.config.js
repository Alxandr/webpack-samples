const path = require('path');

const resolve = (...segments) => path.resolve(__dirname, ...segments);

const config = {
  mode: 'development',

  entry: resolve('src', 'main.js'),
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/assets/',
    library: ['Comp', '[name]'],
    libraryTarget: 'umd',
  },
};

// module.exports = config;

module.exports = env => {
  console.log(`Env: ${env}`);

  return config;
};
