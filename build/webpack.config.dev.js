const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const config = require("./config");


module.exports = merge(base, {
    devServer: {
        hot: true,
        host: config.host,
        port: config.port,
        contentBase: config.dist,
        publicPath: config.public,
        noInfo: true
    },
    module: {
        rules: [{
            test: /\.(less|css)$/,
            loader: 'style-loader!css-loader!less-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]


});
