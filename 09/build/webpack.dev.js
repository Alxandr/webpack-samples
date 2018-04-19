const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin');

const resolve = (...segments) => path.resolve(__dirname, '..', ...segments);

module.exports = env =>
  merge(common, {
    mode: 'development',

    devServer: {
      contentBase: resolve('dist'),
    },

    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),

      ...(env === 'development'
        ? [
            new MiniHtmlWebpackPlugin({
              context: {
                title: 'Awesome Webpack!',
                body: {
                  raw: '<div id="root"></div>',
                },
              },

              template: require('@vxna/mini-html-webpack-template'),
            }),
          ]
        : []),
    ],
  });
