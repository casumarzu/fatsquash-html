
import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const NODE_ENV = process.env.NODE_ENV
const include = path.join(__dirname, '..', '/src')
const exclude = /(node_modules)/

// File loaders
const imageLoader = {
  test: /.jpe?g$|.gif$|.png$|.svg$/,
  loaders: [
    'file-loader?hash=sha512&digest=hex&name=[name].[hash].[ext]',
    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
  ]
}

const urlLoader = {
  test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
  loader: 'url-loader?limit=100000'
}
const fontLoader = {
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  loader: 'file?name=fonts/[name].[ext]'
}

const fileLoader = (loader, lang) => {
  return {
    test: lang,
    loader,
    include,
    exclude
  }
}

const videoLoader = fileLoader('file', /\.(webm|mp4)$/)
const jadeLoader = fileLoader('pug', /\.jade?$/)

const files = [
  imageLoader, fontLoader, videoLoader
]

// Scripts Loaders

const jsLoader = (loader, lang) => {
  let loaders = [loader]
  if(NODE_ENV === 'development') loaders = ['react-hot', loader]
  return {
    test: lang,
    loaders,
    include,
    exclude
  }
}

const babelLoader   = jsLoader('babel-loader', /\.js?$|\.jsx?$/)
const coffeeLoader  = jsLoader('coffee-jsx-loader', /\.coffee?$/)
const tsLoader      = jsLoader('ts-loader!ts-jsx-loader', /\.ts?$/)

const scripts = [babelLoader, coffeeLoader, tsLoader]

// Style loaders
const styleLoader = (loader, lang) => {
  loader = '!css'
  + '?modules'
  + '&sourceMap'
  + '&importLoaders=1'
  + '&localIdentName=[local]'
  + '!postcss'
  + loader

  if(NODE_ENV === 'development'){
    loader = 'style-loader' + loader
  }else if(NODE_ENV === 'production'){
    loader = ExtractTextPlugin.extract('style-loader', loader);
  }

  return {
    test: lang,
    loader
  }
}

const cssLoader  = styleLoader('', /\.css?$|\.scss$|\.sass$/);
const stylLoader = styleLoader('!stylus', /\.styl?$/)
// const scssLoader = styleLoader('', /\.scss$|\.sass$/)
const lessLoader = styleLoader('!less', /\.less?$/)
const sssLoader =  styleLoader('?parser=sugarss', /\.sss?$/);

const styles = [cssLoader, stylLoader, lessLoader]

export default [...scripts, ...styles, ...files]
