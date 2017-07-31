const webpack = require('webpack');

let PROD = false;

module.exports = {
    entry: './src/app/css/style.css',
    output: {
        path: 'build/app/css/',
        filename: 'build.css'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    }
};