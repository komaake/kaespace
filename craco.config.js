const CracoEsbuildPlugin = require('craco-esbuild');
const { addAfterLoader, loaderByName } = require('@craco/craco');
const webpack = require('webpack');
require('module-alias/register');

module.exports = {
    plugins: [{ plugin: CracoEsbuildPlugin }],
    webpack: {
        configure(webpackConfig) {
            addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
                test: /\.mdx?$/,
                loader: require.resolve('@mdx-js/loader'),
            });
            addAfterLoader(webpackConfig, loaderByName('source-map-loader'), {
                test: [/\.js?$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
                enforce: 'pre',
                exclude: /node_modules/,
                use: ['source-map-loader'],
            });
            webpackConfig.plugins = webpackConfig.plugins || [];
            webpackConfig.plugins.push(
                new webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],
                })
            );

            webpackConfig.resolve = webpackConfig.resolve || {};
            webpackConfig.resolve.fallback =
                webpackConfig.resolve.fallback || {};
            webpackConfig.resolve.fallback.stream =
                require.resolve('stream-browserify');
            webpackConfig.resolve.fallback.crypto =
                require.resolve('crypto-browserify');
            webpackConfig.resolve.fallback.buffer = require.resolve('buffer');

            return webpackConfig;
        },
    },
};
