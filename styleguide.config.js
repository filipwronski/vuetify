const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    components: 'components/mzn/**/*.vue',
    require: [
        resolve(__dirname, 'styleguide.root.js'),
        resolve(__dirname, 'global.styles.css'),
    ],
    assetsDir: resolve(__dirname, 'static'),
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(css|scss)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.styl$/,
                    use: ['style-loader', 'css-loader', 'stylus-loader'],
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    }],
                },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
        ],
        resolve: {
            alias: {
                '~': __dirname,
            },
        },
    },
    renderRootJsx: resolve(__dirname, 'styleguide.root.js'),
};
