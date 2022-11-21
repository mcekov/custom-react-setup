const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";

process.env.NODE_ENV === "production"
	? (mode = "production")
	: (mode = "development");

module.exports = {
	mode: mode,

	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},

	plugins: [new MiniCssExtractPlugin()],

	resolve: {
		extensions: [".js", ".jsx"],
	},

	devtool: "source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		// Default is true
		/* hot: true, */
	},
};
