const path = require("path");

module.exports = {
  mode: "production",
  entry: "./dist/index.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },


  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, "./src/component"),
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, "./dist/component"),
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
