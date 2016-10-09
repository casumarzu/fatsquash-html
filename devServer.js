import webpack from 'webpack'
import webpackConfig from './webpack.config.babel'
import WebpackDevServer from 'webpack-dev-server'
import config from './config'
const {PORT} = config

function proxyConfig(url) {
  return {
    target: {
      host: 'run.skbx.ru',
      protocol: 'http:',
      path: '/'+ url +'/',
      secure: false,
      port: 80
    },
    rewrite: function(req) {
      var rx = new RegExp('^\/' + url);
      req.url = req.url.replace(rx, '');
    },
    changeOrigin: true,
    secure: false
  }
}

const server = new WebpackDevServer(webpack(webpackConfig), {
  contentBase: './src',
  hot: true,
  quiet: false,
  historyApiFallback: true,
  proxy: {
    '/api/*': proxyConfig('api'),
    '/uploads/*': proxyConfig('uploads')
  },
  stats: {
    colors: true,
    progress: true
  }
});

server.listen(PORT, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + PORT);
});
