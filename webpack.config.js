var path = require('path');
var root = path.resolve(__dirname);

module.exports = {
    entry: {
        app: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                include: root
            }
        ]
    }
};
