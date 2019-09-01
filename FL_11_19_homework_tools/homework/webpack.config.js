const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: {
    app: './src/js/index.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
        ]
      }
    ]
  },
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new PrettierPlugin()
  ]
}