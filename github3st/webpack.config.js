const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const { resolve } = require("path");

module.exports = function(env, argv){
    const isEnvDevelopment = argv.mode ==='development' || !argv.mode;
    const isEnvProduction = argv.mode ==='production';

    return {
        mode: isEnvProduction?'production':isEnvDevelopment && 'development',
        devtool: isEnvProduction?'source-map':isEnvDevelopment && 'cheap-module-source-map',
        entry:'./src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname,'dist')
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json'],
            alias: {
              '@': path.resolve('./src')
            }
        },
        module: {
            rules:[
                {
                  test: /\.css$/,
                  include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
                  use: ["style-loader", "css-loader", "postcss-loader"]
                },
                {
                  test: /\.css$/,
                  exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
                  use: ["style-loader", "css-loader?modules", "postcss-loader"]
                },
                {
                  test: /\.less$/,
                  include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
                  use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
                },
                {
                  test: /\.less$/,
                  exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
                  use: ["style-loader", "css-loader?modules", "postcss-loader", "less-loader"]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: ["file-loader"]
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                    loader: "url-loader",
                    options: {
                        limit: 10000
                    }
                },
                {
                    test: /\.js$/,
                    exclude:/node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    enforce: "pre",
                    use: "eslint-loader"
                },

            ]   
        },
        devServer: {
            contentBase: './dist',
            hot:true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "public/index.html"
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin() 
        ]
    }
};