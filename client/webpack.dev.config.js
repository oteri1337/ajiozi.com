const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const appRules = [
  {
    test: /\.js$/,
    use: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react-app"]
        }
      }
    ],
    exclude: /(node_modules)/
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: "../../"
        }
      },
      { loader: "css-loader" }
    ]
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
      outputPath: "assets/images/"
    }
  },
  {
    test: /\.(ttf|eot|woff|woff2)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/fonts/"
        }
      }
    ]
  }
];

const entryOne = {
  mode: "production",
  bail: true,
  entry: "./src/Router.web.js",
  target: "web",
  output: {
    path: path.resolve(__dirname, "../public_html/"),
    filename: "assets/javascript/reactapp.js"
  },
  module: {
    rules: appRules
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "/assets/css/reactapp.css"
    })
  ],
  resolve: {
    alias: {
      "react-native$": "react-native-web"
    },
    extensions: [".web.js", ".js"]
  }
};

module.exports = [entryOne];
