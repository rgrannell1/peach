
import { Wrapped, Thunk, From } from '../../types.ts'

/*
 * Construct a wrapped object using a key, value, and size wrapped-value.
 */
export function New<K extends string | number | symbol, V>(key: Wrapped<K>, val: Wrapped<V>, size: Wrapped<number>): Thunk<Record<K, V>> {
  return () => {
    const data: { [P in K]: V } = ({  } as any)

    const tgt = From(size)
    for (let idx = 0; idx < tgt; idx++) {
      data[From(key)] = From(val)
    }

    return data
  }
}
