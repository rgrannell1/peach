
import { Wrapped, Thunk, From } from '../../types.ts'

export function _Set<V>(val: Wrapped<V>, size: Wrapped<number>): Thunk<Set<V>> {
  return () => {
    const data = new Set<V>()

    const tgt = From(size)
    for (let idx = 0; idx < tgt; idx++) {
      data.add(From(val))
    }

    return data
  }
}
