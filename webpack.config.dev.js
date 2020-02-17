const path = require('path');
var px2viewport = require('postcss-plugin-pxtoviewport');
const prefixer = require('postcss-prefixer');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode:'production',
  entry: path.join(__dirname, "examples/src/index.js"),
  output: {
    path: path.join(__dirname, "examples/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
      test:/\.js/,
      loader:'babel-loader',
      options: {
        // 指定babel配置文件
        configFile: path.resolve(__dirname, './.babelrc')
      },
      exclude:/node_modules/
    },
    {
      test: /\.(less|css)$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: false,
          }
        },
        "less-loader",
        {
          loader: require.resolve('postcss-loader'),
          options: {
              ident: 'postcss',
              plugins: () => [
                  
                  px2viewport({
                    viewportWidth: 750,
                    viewportHeight: 1334,
                    unitPrecision: 5,
                    viewportUnit: 'rem',
                    selectorBlackList: ['am-'],
                    minPixelValue: 1,
                    mediaQuery: true,
                  }),
                  
                  
              ],
          }
      }
      ]
    },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "examples/src/index.html"),
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 5001
  },
  optimization: {
    minimize: true
  }
};