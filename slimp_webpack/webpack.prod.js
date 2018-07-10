const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const publicPath = '/';

module.exports = {
    mode:"production",                         //production生产development开发
    devtool:false,
    entry:{                                     //配置入口文件的地址
        index: './src/main/index.js',
    },
    output: {                                   //配置出口文件的地址
        path: path.join(__dirname,'../dist'),   //处理完的文件放到哪里
        filename: 'js/[main].[chunkhash:8].js', //以及叫什么名字
        chunkFilename: 'js/[name].[chunkhash:8].js',
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
                    MiniCssExtractPlugin.loader,//注意！这里将style-loader替换掉用于抽离css,它会将抽离出来的样式表在需要的时候以link引入
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
                test:/\.(html|htm)$/,
                use:'html-withimg-loader',
                include:path.join(__dirname,'./src'),
                exclude:/node_modules/
            },
        ]
    },
    plugins: [//配置插件
        new CleanWebpackPlugin(path.join(__dirname,'../dist'), {
            root: path.join(__dirname,'../'),
            verbose: true
        }),                                         //清理dist文件夹
        new HtmlWebpackPlugin({
            template: 'src/main/index.html',
            minify: {                               // 对html文件进行压缩
                removeAttributeQuotes: true         // 移除双引号
            }
        }),
        new MiniCssExtractPlugin({                  //抽离css
            filename: "style/[name].[chunkhash:8].css",
            chunkFilename: "style/[id].[chunkhash:8].css"
        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '../public'),       // 从哪里复制
            to: path.join(__dirname, '../dist', 'public')  // 复制到哪里
        }]),
        new UglifyjsWebpackPlugin(),                        //压缩JS
        new OptimizeCSSAssetsPlugin({})                     //压缩css
    ],
};