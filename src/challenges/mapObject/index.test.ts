import { mapObject } from './index'

describe('mapObject', () => {
  it('should return an empty object when given an empty object', () => {
    expect(mapObject({})).toStrictEqual({})
  })

  it('should multiply all object properties by 10', () => {
    expect(mapObject({a: 2, b: 3})).toStrictEqual({a: 20, b: 30})
  })
})
