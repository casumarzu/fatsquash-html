import _ from 'lodash'

export default function calc(sum, percent, time) {
  let result = sum
  for(let i = 0; i < time; i++) {
    result += result * percent / 100
  }
  return result
}
