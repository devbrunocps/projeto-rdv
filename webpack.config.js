const path = require('path');

module.exports = {
    entry: './src/renderer/src/index.js', // Substitua pelo caminho do seu arquivo principal
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
