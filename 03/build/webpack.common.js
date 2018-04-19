const path = require('path');

const resolve = (...segments) => path.resolve(__dirname, '..', ...segments);

module.exports = {
  entry: resolve('src', 'main'),

  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/assets/',
    library: ['Comp', '[name]'],
    libraryTarget: 'umd',
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
};
