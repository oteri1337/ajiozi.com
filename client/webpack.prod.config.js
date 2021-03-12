const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

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
      { loader: "css-loader" },
      {
        loader: "postcss-loader",
        options: {
          plugins: [require("autoprefixer")]
        }
      }
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
    new HtmlWebpackPlugin({
      title: process.env.APP_NAME,
      template: "./src/assets/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "/assets/css/reactapp.css"
    }),
    new OptimizeCssAssetsPlugin(),
    new AppManifestWebpackPlugin({
      logo: "./src/assets/images/logo.png",
      output: "/assets/pwa/",
      config: {
        appName: process.env.APP_NAME,
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        version: "1.0"
      }
    })
  ],
  resolve: {
    alias: {
      "react-native$": "react-native-web"
    },
    extensions: [".web.js", ".js"]
  }
};

const entryTwo = {
  mode: "production",
  bail: true,
  entry: "./src/assets/modules.js",
  target: "web",
  output: {
    path: path.resolve(__dirname, "../public_html/"),
    filename: "assets/javascript/reactapp-modules.js"
  },
  module: {
    rules: appRules
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "/assets/css/reactapp-modules.css"
    }),
    new OptimizeCssAssetsPlugin()
  ]
};

module.exports = [entryOne, entryTwo];
