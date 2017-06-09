const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const base = require('./webpack.config.base');
const config = require("./config");

const extractText = new ExtractTextPlugin({
    allChunks: false,
    filename: 'styles/[contenthash].css'
});

module.exports = merge(base, {
    output: {
        filename: "js/[name].[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: extractText.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?modules&localIdentName=[name]-[local]-[hash:5]', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        extractText,
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new UglifyJSPlugin(),
    ]
});
