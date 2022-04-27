import { filterByKeywords } from './index'

describe('filterByKeywords', () => {
  test('finds nothing in empty list', () => {
    expect(filterByKeywords([], ['apples'])).toStrictEqual([])
  })

  test('finds nothing without a keyword', () => {
    expect(filterByKeywords(['apple pie'], [])).toStrictEqual([])
  })

  test('finds all deserts containing fruits', () => {
    const deserts = ['apple pie', 'cherry cake', 'cookies', 'caramel']
    const fruits = ['apple', 'cherry']
    expect(filterByKeywords(deserts, fruits)).toStrictEqual(['apple pie', 'cherry cake'])
  })
})
