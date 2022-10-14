/** @format */

const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/marketing/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");

const domain = process.env.PROCESS_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contentpath].js",
    publicPath: "/marketing/latest/"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: { "./marketingApp": "./src/bootstrap" },
      shared: packageJSON.dependencies
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
