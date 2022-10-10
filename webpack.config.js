const { merge } = require('webpack-merge'); //[1]

const commonConfig = require('./webpack.common'); //[2]

module.exports = (env) => {
    console.log(env);
    let confgFileName = ''
    if(typeof  env.production !== 'undefined'){
        confgFileName = 'production.js';
    }else{
        confgFileName = 'development.js';
    }
    const config = require('./webpack.' + confgFileName); //[3]
    return merge(commonConfig, config); //[4]
};
// const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// console.log(__dirname, '/api/');
// module.exports = {
//     mode: 'development',
//     devtool: 'source-map',
//     entry: './src/index.ts',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'chat.bundle.js'
//     },
//     resolve: {
//         extensions: ['.ts', '.js', '.json'],
//         alias: {
//             '~': path.resolve(__dirname, 'src/'),
//         },
//     },
//     devServer: {
//         static: {
//             directory: path.join(__dirname, 'dist'),
//
//         },
//         compress: true,
//         port: 9000,
//         historyApiFallback: true,
//         allowedHosts: 'all',
//
//     },
//     watchOptions: {
//         poll: true // Or you can set a value in milliseconds.
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: [
//                     {
//                         loader: 'ts-loader',
//                         options: {
//                             configFile: path.resolve(__dirname, 'tsconfig.json'),
//                         },
//                     },
//                 ],
//                 exclude: /(node_modules)/
//             },
//             {
//                 test: /\.(sa|sc|c)ss$/,
//                 use: [
//                     {
//                         loader: MiniCssExtractPlugin.loader,
//                         options: {},
//                     },
//                     'css-loader'
//                 ],
//             },
//             {
//                 test: /\.hbs$/,
//                 use: [
//                     'handlebars-loader',
//                 ],
//             },
//         ]
//     },
//     plugins: [
//         new CleanWebpackPlugin(),
//         new HtmlWebpackPlugin({
//             template: 'src/index.html',
//             filename: 'index.html',
//             minify: {
//                 collapseWhitespace: true,
//                 removeComments: true,
//                 removeRedundantAttributes: true,
//                 useShortDoctype: true,
//             },
//         }),
//         new MiniCssExtractPlugin({
//             filename: 'style-[hash].css',
//         }),
//     ]
// };
//
//
