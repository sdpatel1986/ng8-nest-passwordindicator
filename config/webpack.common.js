var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('src', 'tsconfig.json') }
          } , 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: [
          'file-loader?name=/images/[name].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } }
      ],
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      }
    ],
    exprContextCritical: false
  },

  optimization: { 
    runtimeChunk: 'single', 
    splitChunks: { 
      chunks: 'all', 
      cacheGroups: { 
        default: { 
          enforce: true, 
          priority: 1 
        }, 
        vendors: { 
          test: /[\\/]node_modules[\\/]/, 
          priority: 2, 
          name: 'vendors', 
          enforce: true, 
          chunks: 'all' 
        },
      } 
    } 
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['app', 'vendor', 'polyfills']
    // }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

