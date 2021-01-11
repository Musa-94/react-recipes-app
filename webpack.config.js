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
            { test: /\.jsx?$/, use: 'babel-loader' },
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
