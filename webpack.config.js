const webpack = require('webpack');
const path = require('path');

module.exports = {

    // Entry point
    entry: {
        front: './front.js',
        admin: './admin.js',
    },
    // Here out point
    output: {
        path: path.resolve(__dirname, 'public/build/js'),
        filename: "[name]-bundle.js",
    }

};