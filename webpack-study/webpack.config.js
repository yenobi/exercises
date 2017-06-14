//to know environment - prod or dev 
//const NODE_ENV = process.env.NODE_ENV || 'dev';
const NODE_ENV = 'prod';
const webpack = require('webpack');


module.exports = {
    entry: "./home.js",
    output: {
        filename: "build.js",
        library: 'lib'
    },
    
    watch: NODE_ENV == 'dev',
    
//    not to wait for redactor
    watchOptions: {
        aggregateTimeput: 100
    },
    
    devtool: NODE_ENV == 'dev' ? 'eval' : 'source-map',
    
    plugins: [
        new webpack.DefinePlugin(
        {
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    
    module: {
        loaders: [
            {
        test: /\.js$/,
        loader: 'babel-loader'
        }
        ]
    }
};

//module.exports = {
//    entry: "./js/index.js",
//    output: {
//        path: "./js/",
//        filename: PROD ? 'bundle.min.js' : 'bundle.js'
//    },
//    module: {
//        loaders: [
//            { test: /\.html$/, loader: "html" },
//        ]
//    },
//    plugins: PROD ? [
//        new webpack.optimize.UglifyJsPlugin({
//            compress: { warnings: false }
//        })
//    ] : []
//};