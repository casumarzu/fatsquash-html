export default function paintPolygon(...args) {
  let result = ''
  if(args.length % 2 === 0) {
    const middle = [...args]
    middle.splice(0, 1)
    middle.splice(-1, 1)
    const middleStr = middle.reduce( (result, item, i) => {
      if(i === 1 || i % 2) {
        result += ' ' + item
      }else {
        result += ',' + item
      }
      return result
    } )
    result = args[0] + ',' + middleStr + ',' + args[args.length - 1]
  }else {
    throw new Error('the number of arguments must be even')
  }
  return result
}
