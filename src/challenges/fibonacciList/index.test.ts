import { fibonacciList } from './index'

describe('fibonacciList', () => {
  it('returns a list with the first fibonacci number when given 0', () => {
    expect(fibonacciList(0)).toStrictEqual([0])
  })

  it('returns a list with the first two fibonacci number when given 1', () => {
    expect(fibonacciList(1)).toStrictEqual([0, 1])
  })

  it('returns a list with the first seven fibonacci numbers when given 7', () => {
    expect(fibonacciList(7)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13])
  })
})
