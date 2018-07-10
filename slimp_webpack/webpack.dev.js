const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const publicPath = '/';

module.exports = {
    mode:"development",                         //production生产development开发
    entry:{                                     //配置入口文件的地址
        index: './src/main/index.js',
    },
    output: {                                   //配置出口文件的地址
        path: path.join(__dirname,'../dist'),   //处理完的文件放到哪里
        filename: 'js/[name].js',               //以及叫什么名字
        chunkFilename: 'js/[name].chunk.js',
        publicPath: publicPath                  //可以替换掉url-loader处理的图片路径为publicPath
    },
    module: {                                   //配置模块,主要用来配置不同文件的加载器
        rules: [
            {
                test:/\.(js|jsx)$/,             //匹配文件
                use:'babel-loader',             //使用babel转换语法
                exclude:/node_modules/          //排除目录，webpack4必须配置此项
            },
            {
                test:/\.(css|scss|sass)$/,
                use:[
                    'style-loader',             //最后style-loader将生成style标签加入head中
                    'css-loader',               //将css文件交给“css-loader”去处理
                    'postcss-loader',           //将在这里自动加入前缀，然后交给css-loader处理
                    'sass-loader'               //遇到css文件先交给sass-loader处理，然后交给postcss-loader
                ],
                exclude:/node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|bmp|eot|woff|woff2|ttf)$/,
                loader: {
                    loader: 'url-loader',
                    options: {
                        limit: 5 * 1024,        // 图片大小 > limit 使用file-loader, 反之使用url-loader
                        name: 'media/[name].[hash:8].[ext]',
                    }
                }
            },
            {
                test:/\.(html|html)$/,
                use:'html-withimg-loader',
                include:path.join(__dirname,'./src'),
                exclude:/node_modules/
            },
        ]
    },
    plugins: [//配置插件
        new HtmlWebpackPlugin({
            template: 'src/main/index.html'
        })
    ],
    devServer:{
        // contentBase:path.resolve(__dirname,'dist'),// 配置开发服务运行时的文件根目录
        host:'localhost',                           // 开发服务器监听的主机地址
        compress:true,                              // 开发服务器是否启动gzip等压缩
        port:3000,                                  // 开发服务器监听的端口
    }
};