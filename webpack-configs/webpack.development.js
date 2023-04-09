const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = () => ({
  mode: 'development',	
  devtool: 'source-map',
  devServer: {
    open: true,
    port: 9000
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
});
