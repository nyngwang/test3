const path = require('path')

module.exports = {
  mode: 'development', // 用 src map 來知道問題來源在哪
  entry: {
    main: path.resolve(__dirname, './src/mycode.js'), // `__dirname` is the current directory.
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // `name` 會是上面 `entry[key]` 的 key
  },
}
