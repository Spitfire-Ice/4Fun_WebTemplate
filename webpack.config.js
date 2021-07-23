const MiniCssExtrzctPlugin = require("mini-css-extract-plugin");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtrzctPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_mosules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },

  plugins: [new MiniCssExtrzctPlugin()],

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};