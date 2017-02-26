const { resolve } = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './web/client.js',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'web/assets'),
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  context: resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          plugins: [['import', { libraryName: 'antd' }]],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader']),
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=[name].[hash].[ext]'
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new ExtractTextPlugin("[name].bundle.css"),
  ],
}
