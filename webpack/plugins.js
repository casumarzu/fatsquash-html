import path from 'path'
import webpack, { optimize } from 'webpack'
const { CommonsChunkPlugin } = optimize
import HtmlPlugin from 'html-webpack-plugin'
import NpmInstallPlugin from 'npm-install-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import colors from 'colors'
import config from '../config'

const {NODE_ENV} = process.env
const {TITLE} = config

let plugins

const Html = (title) => {
  return new HtmlPlugin({
    filename: 'index.html',
    title: title,
    favicon: path.join(__dirname, '..', '/src', 'favicon.ico'),
    template: path.join(__dirname, '..', '/src', '/templates/index.html'),
    chunks: ['common', 'vendors']
  })
}

const Define = (bundle) => {
  return new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify(bundle)
    }
  })
}

const Dev = [
  Define('development'),
  Html(`Dev ${TITLE}`),
  new CommonsChunkPlugin('vendors', 'vendors.js'),
  new NpmInstallPlugin(),
  new webpack.HotModuleReplacementPlugin(),
]

const Optimize = [
  new optimize.DedupePlugin(),
  new optimize.OccurenceOrderPlugin(),
  new optimize.UglifyJsPlugin({ compress:{ warnings: true }}),
  new webpack.NoErrorsPlugin()
]

const Prod = [
  Define('production'),
  Html(TITLE),
  new CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
  new ExtractTextPlugin('bundle.[hash].css', { allChunks: true }),
  ...Optimize
]

const Common = [
  new webpack.ProgressPlugin( (percentage, msg) => {
    percentage = `${(percentage * 100)}%`
    console.log(percentage.cyan, msg.green)
  }),
  new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
  // StyleLint()
]

if(NODE_ENV === 'development') {
  plugins = [ ...Common, ...Dev ]
}else if(NODE_ENV === 'production'){
  plugins = [...Common, ...Prod ]
}

export default plugins


// Experiments in dev!!!
// webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
// webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
// new webpack.DllPlugin({
//   path: path.join(__dirname, "dll", "[name]-manifest.json"),
//   name: "[name]",
//   context: path.resolve(__dirname, "client")
// }),
