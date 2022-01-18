

import { Wrapped, Thunk, From } from '../../types.ts'

export function New<K, V>(key: Wrapped<K>, val: Wrapped<V>, size: Wrapped<number>): Thunk<Map<K, V>> {
  return () => {
    const data = new Map<K, V>()

    const tgt:number = From(size)
    for (let idx = 0; idx < tgt; idx++) {
      data.set(From(key), From(val))
    }

    return data
  }
}
