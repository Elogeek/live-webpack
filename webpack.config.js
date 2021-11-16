const webpack = require('webpack');
const path = require('path');

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
    }
}