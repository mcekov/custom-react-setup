const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

let mode = 'development'

process.env.NODE_ENV === 'production'
  ? (mode = 'production')
  : (mode = 'development')

module.exports = {
  mode: mode,

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        /* parser: {
					dataUrlCondition: {
						maxSize: 30 * 1024,
					},
				}, */
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },

  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: process.env.STATS || 'disabled' }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },

  devtool: 'source-map',
  devServer: {
    port: process.env.PORT,
    static: {
      directory: path.join(__dirname, 'dist'),
      // directory: path.join(__dirname, 'public'),
    },

    // Default is true
    /* hot: true, */
  },
}
