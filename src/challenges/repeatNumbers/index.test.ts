import { repeatNumbers } from './index'

describe('repeatNumbers', () => {
  it('returns an array containing one given 1', () => {
    expect(repeatNumbers(1)).toStrictEqual([1])
  })

  it('returns a list with every number repeating as oftern as its value', () => {
    expect(repeatNumbers(3)).toStrictEqual([1, 2, 2, 3, 3, 3])
  })
})
