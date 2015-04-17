var Path = require('path');
var webpack =require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        Path.resolve(__dirname, 'src/boot.js')
    ],
    output: {
        path: Path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: Path.join(__dirname, 'src/')
        },
        {
            test: /\.css$/, loader: 'style!css'
        },
        {
            test: /\.less$/, loader: 'style!css!less'
        },
        {
          test: /\.(html|png)$/,
          loader: "file?name=[path][name].[ext]&context=./src"
        },
        {
          test: /\.(ttf|eot|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=8192"
        }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};