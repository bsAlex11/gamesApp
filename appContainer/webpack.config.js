const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');
const packageJson = require('./package.json');

const mode = process.env.NODE_ENV.trim() === 'production' ? 'production' : 'development';

module.exports = {
  mode: mode,
  target: 'web',
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
                "@babel/preset-typescript"
              ],
              plugins: [
                [
                  "@babel/plugin-transform-runtime"
                ]
              ]
            }
          }
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { 
            loader: MiniCssExtractPlugin.loader,
            options: { 
              publicPath: '',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            }
          },
          'postcss-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                ],
              }
            },
          },
          'sass-loader',
        ]
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader' 
      },
      {
        test: /\.png|jpe?g|gif|svg$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new ForkTsCheckerWebpackPlugin({
      async: true,
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}",
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new Dotenv({
      path: './.env.development'
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        gameFinderRemote: 'gameFinder@http://localhost:8081/remoteEntry.js'
      },
      shared: packageJson.dependencies
    }),
  ]
};
