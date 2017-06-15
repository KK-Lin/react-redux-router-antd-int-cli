const webpack = require("webpack");
const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require("./config");


function resolveSrc(src) {
    return resolve(config.src, src)
}

module.exports = {
    entry: {
        app: [
            "react-hot-loader/patch",
            `webpack-dev-server/client?http://${config.host}:${config.port}`,
            resolve(config.src, './entry/app.jsx')
        ]
    },
    output: {
        path: config.dist,
        publicPath: config.public
    },
    resolve: {
        alias: {
            "@": config.src,
            "@image": resolveSrc('./assets/image'),
            "@style": resolveSrc('./assets/style'),
            "@components": resolveSrc('./components'),
            "@containers": resolveSrc('./containers'),
            "@views": resolveSrc('./views'),
            "@entry": resolveSrc('./entry'),
            "@store": resolveSrc('./store'),
            "@api": resolveSrc('./api')
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
                    presets: ['env', 'react'],
                    plugins: [
                        "transform-decorators-legacy", ["import", {
                            libraryName: "antd",
                            style: true
                        }]
                    ]
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