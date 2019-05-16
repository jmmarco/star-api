const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // Tell devServer where to look for files:
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/public',
  },
  module: {
    rules: [
      // CSS Rule
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // Font Rule
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      // Images rule
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Star Wars API',
      template: './src/index.html'
    })
  ]
}