import path from 'path'
import config from '../config'
const {PORT} = config
const NODE_ENV = process.env.NODE_ENV

let preEntry = [ 'babel-polyfill' ]

if(NODE_ENV === 'development') {
  preEntry = [
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/only-dev-server',
    ...preEntry
  ]
}

const entry = {
  common: preEntry.concat([path.join(__dirname, '..', '/src/scripts', 'index.js')]),
  // alpha: preEntry.concat([path.join(__dirname, '..', '/src/scripts', 'alpha.js')]),
  // beta: preEntry.concat([path.join(__dirname, '..', '/src/scripts', 'beta.js')])
};


export default entry
