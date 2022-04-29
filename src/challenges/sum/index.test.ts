import { sum } from './index'

describe('sum', () => {
  it('returns 0 given an empty list', () => {
    expect(sum([])).toStrictEqual(0)
  })

  it('returns the sum given a list of numbers', () => {
    expect(sum([1, 2, 3, -2])).toStrictEqual(4)
  })
})
