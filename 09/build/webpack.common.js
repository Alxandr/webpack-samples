const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

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
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browsers: ['last 2 versions'],
              },
              plugins: () => [autoprefixer],
              sourceMap: true,
            },
          },
          {
            loader: 'stylus-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
};
