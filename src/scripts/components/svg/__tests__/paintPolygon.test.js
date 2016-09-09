jest.unmock('../utils/paintPolygon')
import paintPolygon from '../utils/paintPolygon'

describe('paintPolygon', () => {
  it('type coords 1,2,3,4,5,6', () => {
    expect( paintPolygon(1,2,3,4,5,6) )
    .toBe('1,2 3,4 5,6')
  })
  it('type coords 1,2,3,4,5,6,7,8,9,10', () => {
    expect( paintPolygon(1,2,3,4,5,6,7,8,9,10) )
    .toBe('1,2 3,4 5,6 7,8 9,10')
  })
  it('type coords 1,2,3,4,5,6,7', () => {
    expect( paintPolygon(1,2,3,4,5,6,7) )
    .toThrowError('the number of arguments must be even')
  })

})
