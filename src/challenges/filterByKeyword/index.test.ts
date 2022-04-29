import { filterByKeywords } from './index'

describe('filterByKeywords', () => {
  it('finds nothing in empty list', () => {
    expect(filterByKeywords([], ['apples'])).toStrictEqual([])
  })

  it('finds nothing without a keyword', () => {
    expect(filterByKeywords(['apple pie'], [])).toStrictEqual([])
  })

  it('finds all deserts containing fruits', () => {
    const deserts = ['apple pie', 'cherry cake', 'cookies', 'caramel']
    const fruits = ['apple', 'cherry']
    expect(filterByKeywords(deserts, fruits)).toStrictEqual(['apple pie', 'cherry cake'])
  })
})
