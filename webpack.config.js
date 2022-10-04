// webpack.config.js

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'chat.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),

        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
        allowedHosts: 'all',

    },
    watchOptions: {
        poll: true // Or you can set a value in milliseconds.
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader',
                    // 'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader',
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'style-[hash].css',
        }),
    ]
};


