var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 8080
  },
 

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
