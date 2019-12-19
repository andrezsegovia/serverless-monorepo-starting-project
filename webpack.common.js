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
        filename: 'CadApiResponse.js',
        path: path.resolve(__dirname, 'dist'),
    },
};