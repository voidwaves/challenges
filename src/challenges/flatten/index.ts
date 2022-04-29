
// flatten array of unknown depth

type Nested<Type> = Type | Nested<Type>[]

export const flatten = <Type>(nested: Nested<Type>[]): Type[] => {
  return []
}
