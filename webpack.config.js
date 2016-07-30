var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/components/App.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  plugins: [new HtmlWebpackPlugin({
    appMountId: 'app',
    title: 'React Chat !2',
    inject: true
  })],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
