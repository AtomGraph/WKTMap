const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: './src/com/atomgraph/linkeddatahub/client/WKTMap.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts' ],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  output: {
    library: ["WKTMap"],
    libraryTarget: "window",
    filename: 'WKTMap.js',
    path: path.resolve(__dirname, 'dist')
  }
};