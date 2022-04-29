import { range } from './index'

describe('range', () => {
  it('generates a list with one entry if start and end are equal', () => {
    expect(range(1, 1)).toEqual([1])
    expect(range(0, 0)).toEqual([0])
    expect(range(-1, -1)).toEqual([-1])
  })

  it('generates an ascending list if start is smaller than end', () => {
    expect(range(0, 1)).toEqual([0, 1])
    expect(range(1, 3)).toEqual([1, 2, 3])

    expect(range(-1, 0)).toEqual([-1, 0])
    expect(range(-3, -1)).toEqual([-3, -2, -1])

    expect(range(-1, 1)).toEqual([-1, 0, 1])
    expect(range(-2, 2)).toEqual([-2, -1, 0, 1, 2])
  })

  it('generates an descending list if start is larger than end', () => {
    expect(range(1, 0)).toEqual([1, 0])
    expect(range(3, 1)).toEqual([3, 2, 1])

    expect(range(0, -1)).toEqual([0, -1])
    expect(range(-1, -3)).toEqual([-1, -2, -3])

    expect(range(1, -1)).toEqual([1, 0, -1])
    expect(range(2, -2)).toEqual([2, 1, 0, -1, -2])
  })
})
