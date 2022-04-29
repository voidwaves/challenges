import { flatten } from './index'

describe('flatten', () => {
  it('returns an empty list given an empty list', () => {
    expect(flatten([])).toStrictEqual([])
  })

  it('returns itself given an already flattened list', () => {
    expect(flatten([1, 2, 3])).toStrictEqual([1, 2, 3])
  })

  it('returns a flattened version given a nested list', () => {
    const nested = ['a', 'b', ['c'], [['d']], [[[['e', 'f']]]]]
    expect(flatten(nested)).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f'])
  })
})
