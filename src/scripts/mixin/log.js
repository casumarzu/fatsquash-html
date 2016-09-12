import _ from 'lodash'
const id = _.uniqueId()
export default {
  error(...args) {
    console.error.apply(this, args)  // eslint-disable-line no-console
  },
  info(...args) {
    console.info.apply(this, args)  // eslint-disable-line no-console
  },
  group(name, type, ...args) {
    console.group(name)  // eslint-disable-line no-console
    args.forEach( (arg) => {
      console[type](arg) // eslint-disable-line no-console
    })
    console.groupEnd(name)  // eslint-disable-line no-console
  }
}
