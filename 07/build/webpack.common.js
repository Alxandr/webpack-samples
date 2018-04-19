const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = (...segments) => path.resolve(__dirname, '..', ...segments);

module.exports = {
  entry: resolve('src', 'main'),

  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/',
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
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
            },
          },
        ],
      },
    ],
  },
};
