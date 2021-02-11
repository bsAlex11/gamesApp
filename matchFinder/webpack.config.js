const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const path = require('path');
const packageJson = require('./package.json');

const mode = process.env.NODE_ENV.trim() === 'production' ? 'production' : 'development'

module.exports = {
  mode: mode,
  devtool: 'source-map',
  entry: './src/index.tsx',
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8081,
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
          MiniCssExtractPlugin.loader,
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
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
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
      name: 'matchFinder',
      filename: 'remoteEntry.js',
      exposes: {
        './MatchFinderApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    }),
  ]
};
