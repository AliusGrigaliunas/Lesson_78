const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
module.exports = merge(commonConfig,{
   mode: 'development',

   devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  });