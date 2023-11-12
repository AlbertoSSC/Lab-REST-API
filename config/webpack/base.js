const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const helpers = require('./helpers');

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath('src'),
    resolve: {
      alias: {
        '@images': helpers.resolveFromRootPath('src/assets/images'),
        common: helpers.resolveFromRootPath('src/common'),
        core: helpers.resolveFromRootPath('src/core'),
        layouts: helpers.resolveFromRootPath('src/layouts'),
        pods: helpers.resolveFromRootPath('src/pods'),
        scenes: helpers.resolveFromRootPath('src/scenes'),
        'common-app': helpers.resolveFromRootPath('src/common-app'),
        assets: helpers.resolveFromRootPath('src/assets'),
      },
      modules: [helpers.resolveFromRootPath('src'), 'node_modules'],
      extensions: ['.js', '.ts', '.tsx'],
    },
    entry: {
      app: ['regenerator-runtime/runtime', './index.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                context: 'src',
              },
            },
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
      }),
      process.env.NODE_ENV === 'production' &&
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: 'stats/report.html',
          openAnalyzer: false,
        }),
    ].filter(Boolean),
  }
);
