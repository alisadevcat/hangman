const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
  mode: "development",
  entry: {main: path.resolve(__dirname, './js/app.js')},
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    publicPath: "auto",
    // assetModuleFilename: "assets/images/[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },,
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg|mp4)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg/,
        type: "asset/inline",
        generator: {
          dataUrl: content => {
            content = content.toString();
            return svgToMiniDataURI(content);
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext]",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "app.css",
    }),
    // new FaviconsWebpackPlugin('./assets/images/icons/coffee-cup.ico')
  ],
};
