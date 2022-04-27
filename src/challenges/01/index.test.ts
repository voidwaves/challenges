import { sum } from './index'

describe('sum', () => {
  test('empty list yields 0', () => {
    expect(sum([])).toStrictEqual(0)
  })

  test('list to be summed up', () => {
    expect(sum([1, 2, 3, -2])).toStrictEqual(4)
  })
})
