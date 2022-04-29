import { fibonacci } from './index'

describe('fibonacci', () => {
  it('returns expected values for the given inputs', () => {
    const inputs = [0, 1, 2, 3, 4, 5]
    const result = [0, 1, 1, 2, 3, 5]
    expect(inputs.map(fibonacci)).toStrictEqual(result)
  })
})
