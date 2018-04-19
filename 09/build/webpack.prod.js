const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin');
const { minify } = require('html-minifier');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',

  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  output: {
    // cache-busting
    filename: '[name].[chunkhash].js',
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].css',
    }),

    new MiniHtmlWebpackPlugin({
      context: {
        title: 'Awesome Webpack!',
        body: {
          raw: '<div id="root"></div>',
        },
      },

      template: ctx =>
        // TODO: could be better - puts scripts at the end of body. Could you async instead
        minify(require('@vxna/mini-html-webpack-template')(ctx), {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        }),
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});
