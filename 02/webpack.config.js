const path = require('path');
const merge = require('webpack-merge');

const resolve = (...segments) => path.resolve(__dirname, ...segments);

const common = {
  entry: resolve('src', 'main.js'),

  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/assets/',
    library: ['Comp', '[name]'],
    libraryTarget: 'umd',
  },
};

const dev = merge(common, {
  mode: 'development',
});

const prod = merge(common, {
  mode: 'production',

  output: {
    // cache-busting
    filename: '[name].[chunkhash].js',
  },
});

module.exports = env => {
  if (env === 'full') {
    console.log('Mode: full');
    return [prod, dev];
  }

  // default to dev
  if (env === 'production') {
    console.log('Mode: prod');
    return prod;
  }

  console.log('Mode: dev');
  return dev;
};
