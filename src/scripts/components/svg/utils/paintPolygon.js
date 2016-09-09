export default function paintPolygon(...args) {
  let result = ''
  if(args.length % 2 === 0) {
    const middleArr = [...args]
    middleArr.splice(0, 1)
    middleArr.splice(-1, 1)
    const middle = middleArr.reduce( (result, item, i) => {
      let seporator = ','
      if(i === 1 || i % 2) seporator = ' '
      return [result, seporator, item].join('')
    } )
    const first = args[0]
    const last = args[args.length - 1]
    result = `${first},${middle},${last}`
  }else {
    throw new Error('the number of arguments must be even')
  }
  return result
}
