const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: 'CadApiResponses/index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
    },
};