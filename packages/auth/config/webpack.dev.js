/** @format */

/** merge two diff webpack config files */
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: "index.html"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./authApp": "./src/bootstrap"
      },
      shared: packageJSON.dependencies
    })
  ]
};

/**
 *Merge commonConfig and devConfig, devConfig will overwrite commong config as passed as second parameter
 */
module.exports = merge(commonConfig, devConfig);
