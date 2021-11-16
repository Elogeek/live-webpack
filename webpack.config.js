const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    // Entry point
    entry: {
        front: './assets/front.js',
        admin: './assets/admin.js',
    },
    // Here out point
    output: {
        path: path.resolve(__dirname, 'public/build/js'),
        filename: "[name]-bundle.js",
    },
    module: {
        // Rules files css
        rules: [
            {
                // tous le code css se trouve dans mon head de ma console avec style-loader
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                    {
                        // mtnt le code css ne se retrouve plus dans le head (mais il renvoie le bon chemin dans la console)
                        loader: "css-loader",
                        options: {
                            import: true,
                            url: true,
                            sourceMap: true,
                        }
                    }
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    // Importe le css dans un fichier css portant le même nom par défault
    plugins: [].concat([new MiniCssExtractPlugin({
        filename: "../css/[name]-bundle.css"
    })]),

};