var path = require('path')
const {CleanWebpackPlugin }= require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
var px2viewport = require('postcss-plugin-pxtoviewport');
module.exports = (opt) => {
    console.log('opt:',opt)
    let url = path.resolve(opt.path, './lib/index.js')
    console.log('url:',url)

  return {
    mode: 'production',
    entry: url,
    output: {
      path: path.resolve(opt.path, './dist'),
      filename: `${opt.name}.js`,
      library: opt.name,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals:["react","antd-mobile"],
    plugins: [
      new CleanWebpackPlugin(),

    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [path.resolve(opt.path, './lib')],
          options: {
            // 指定babel配置文件
            configFile: path.resolve(__dirname, './.babelrc')
          }
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
    optimization: {
      minimize: false
    }
  }
}

