const merge = require('webpack-merge');
const common = require('./webpack.config');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        allowedHosts: [
            '.ngrok.io',
            '.vk.com'
        ],
        host: '0.0.0.0',
        port: 10880,
        publicPath: '/',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: "styleTag"
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: { }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                autoprefixer()
                            ],
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            injectType: "styleTag"
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {}
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                autoprefixer()
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                PUBLIC_URL: JSON.stringify('')
            },
        })
    ]
});