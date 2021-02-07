const path = require('path');
const CssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            { test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            'transform-node-env-inline',
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-transform-async-to-generator',
                            '@babel/plugin-transform-modules-commonjs',
                            '@babel/plugin-proposal-optional-chaining',
                            '@babel/plugin-transform-react-inline-elements',
                            '@babel/plugin-proposal-nullish-coalescing-operator',
                            '@babel/plugin-syntax-object-rest-spread',
                            '@babel/plugin-proposal-class-properties'
                        ]
                    },
                },
            },
            { test: /\.(png|jpg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            },
            { test: /\.less$/, use: [CssExtractPlugin.loader, 'css-loader', 'less-loader'] },
            { test: /\.css$/, use: [CssExtractPlugin.loader, 'css-loader'] }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html'
        }),
        new CssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new CleanWebpackPlugin(),
    ]
}
