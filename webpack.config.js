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
    extensions: [".ts", ".js"],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
