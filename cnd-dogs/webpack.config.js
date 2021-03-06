const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3002,
  },
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'dogs',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
        './Dog': './src/Dog',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};
