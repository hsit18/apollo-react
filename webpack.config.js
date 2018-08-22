const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 8000;
const productionEnv = process.env.NODE_ENV === 'production';

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    devtool: productionEnv ? 'source-map' : 'cheap-module-source-map',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    devServer: {
        port: PORT,
        contentBase: path.join(__dirname, './dist'),
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            App: path.resolve(__dirname, 'src/'),
        },
        extensions: ['.js', '.jsx', '.md', '.scss', '.less'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                }],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader', // creates style nodes from JS strings
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader', // compiles Sass to CSS
                }],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new webpack.DefinePlugin({
            API_HOST: JSON.stringify('http://localhost:3001'),
            GITHUB_API_HOST: JSON.stringify('https://api.github.com'),
        }),
    ],
};
