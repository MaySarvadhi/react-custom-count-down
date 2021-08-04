const path = require("path");

module.exports = {
  // bundling mode
  mode: "production",

  // entry files
  entry: "./dist/index.ts",

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  // file resolutions
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },

  // loaders
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
