//webpack ./public/app.js ./public/bundle.js

var webpack = require('webpack');
var path = require('path');

module.exports ={
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals:{
        jquery: 'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':        'jquery',
            'jQuery':   'jquery'
        })
    ],
    output: {
        path: __dirname + '/public',
        filename: './js/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories:[
            'node_modules',            
            './app/actions',
            './app/api',
            './app/components',            
            './app/locales',
            './app/reducers',
            './app/store',
            './app/styles/img',
            './app/styles/fonts'
        ],

        alias:{            
            Main:           'app/components/Main.jsx',
            Nav:            'app/components/Nav.jsx',           
            appStyles:      'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {   
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&minetype=application/font-woff&name=./fonts/[name].[ext]" 
            },
            {   
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader?name=./fonts/[name].[ext]" 
            }

        ]        
    },
    sassLoader:{
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    }
};