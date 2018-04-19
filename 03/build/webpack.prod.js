const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',

  output: {
    // cache-busting
    filename: '[name].[chunkhash].js',
  },
});
