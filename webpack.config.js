const {resolve} = require('path')
const Html = require('html-webpack-plugin')

module.exports = () => ({
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },  
  mode: 'development',  
  plugins: [
    new Html({template: 'index.html'})
  ]
})

const isImage = /\.(png|jpg|jpeg|gif|svg)$/