module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_mosules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },

  devtool: false,
  devServer: {
    contentBase: "./dist",

  },
};