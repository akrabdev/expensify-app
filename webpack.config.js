const path = require("path");

const ExtractTextPlugin = require('extract-text-webpack-plugin');// imported
const CSSExtract = new ExtractTextPlugin('styles.css');//new instance
// then we will tweak use array below
//
//we wont use style-loader as it handle inlinining of styles
module.exports = (env) => {
  const isProduction = env === 'production';  
  return {
  
    entry: './src/app.js', 
     
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js' 
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
        },
      {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
              sourceMap: true
              }
            },
            {
              loader: 'scss-loader',
              options: {
                sourceMap: true
              }
            }
            
          ]
        })
      }]
      
      
  
  },

  plugins: [
    CSSExtract
  ],

  devtool: isProduction ? 'source-map' : 'inline-source-map',
  
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }};
};


