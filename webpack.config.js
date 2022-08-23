const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.ts',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        open: true,
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },

      plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',

            templateParameters: {
                name: 'Aleksandras Gavėnas',
              },
        })
    ],
  };