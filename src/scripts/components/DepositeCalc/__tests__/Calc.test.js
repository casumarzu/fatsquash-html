jest.unmock('../utils/Calc')
import Calc from '../utils/Calc'

describe('DepositeCalc', () => {
  it('Ввод 1000000, 3 года и 10%', () => {
    expect( Calc(1000000, 10, 3) ).toBe(1331000)
  })
  it('Ввод 1000000, 4 года и 10%', () => {
    expect( Calc(1000000, 7, 4) ).toBe(1310796.01)
  })
})
