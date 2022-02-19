const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // 用 src map 來知道問題來源在哪
  entry: {
    main: path.resolve(__dirname, 'src/app.js'), // `__dirname` is the current directory.
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // `name` 會是上面 `entry[key]` 的 key
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    watchFiles: ['public'],
    hot: true,
    open: true,
    port: 8080,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Testing htmlWebpackPlugin',
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
}
