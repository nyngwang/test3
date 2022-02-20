const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development', // 用 src map 來知道問題來源在哪
  entry: {
    main: path.resolve(__dirname, 'src/js/app.js'), // `__dirname` is the current directory.
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // `name` 會是上面 `entry[key]` 的 key
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    watchFiles: ['src'],
    hot: true,
    open: true,
    port: 8080,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(svg|ico|png|jpe?g|gif)$/, type: 'asset/resource' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheCompression: false,
          },
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Testing htmlWebpackPlugin',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
  ],
}
