const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const { TRUE } = require('node-sass');

module.exports = {
  mode: 'development',
  // watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  entry: './src/js/app.js',
  output: {
    publicPath: '../',
    path: path.resolve(__dirname, 'assets'),
    filename: 'js/app.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename : 'fonts/[name][ext]'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    }),
  ],
};