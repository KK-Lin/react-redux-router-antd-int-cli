const webpack = require("webpack");
const {resolve} = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require("./config");

module.exports = {
    entry: {
        app: [
            "react-hot-loader/patch",
            `webpack-dev-server/client?http://${config.host}:${config.port}`,
            resolve(config.src, './app.js')
        ]
    },
    output: {
        path: config.dist,
        publicPath: config.public,
        filename: "js/[name].[chunkhash].js"
    },
    resolve: {
        alias: {
            "@": config.src
        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            }
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=100&name=/static/[name].[ext]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            title: "react hot server"
        })
    ]
}