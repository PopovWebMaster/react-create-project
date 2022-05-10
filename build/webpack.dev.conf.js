const webpack =  require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

/*
    Не удалять! может пригодится
    const CONSTANTS = require('./CONSTANTS');
*/

const devWebpackConfig = merge( baseWebpackConfig, {

    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        port: 8081,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin( 
            {
                filename: '[file].map'
            } 
        ),
        new webpack.DefinePlugin({
            'IS_DEVELOPMENT': JSON.stringify( true ),
            'IS_PRODUCTION': JSON.stringify( false ),
        }),
    ]
} );

module.exports = new Promise( ( resolve, reject ) => {
    resolve( devWebpackConfig )
} );