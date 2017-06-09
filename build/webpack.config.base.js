const webpack = require("webpack");
const {resolve} = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require("./config");

module.exports = {
    entry: {
        app: [
            "react-hot-loader/patch",
            `webpack-dev-server/client?http://${config.host}:${config.port}`,
            resolve(config.src, './app.jsx')
        ]
    },
    output: {
        path: config.dist,
        publicPath: config.public
    },
    resolve: {
        alias: {
            "@": config.src,
            "@image": resolve(config.src, './assets/image'),
            "@style": resolve(config.src, './assets/style'),
            "@components": resolve(config.src, './components'),
            "@views": resolve(config.src, './views')
        },
        extensions: ['.jsx', '.js', '.json']
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            }
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=100&name=static/[name].[ext]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            title: "react hot server",
            template: resolve(config.template, "./index.html")
        })
    ]
}