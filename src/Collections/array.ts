
import { Wrapped, Thunk, From } from '../../types.ts'


export function New<V>(val: Wrapped<V>, size: Wrapped<number>): Thunk<V[]> {
  return () => {
    const data: V[] = []

    const tgt = From(size)
    for (let idx = 0; idx < tgt; idx++) {
      data[idx] = From(val)
    }

    return data
  }
}


export function Repeat<T>(val: Wrapped<T>, size: Wrapped<number>): Thunk<T[]> {
  return (): T[] => {
    let parts: T[] = []

    let tgt = From(size)
    for (let idx = 0; idx < tgt; idx++) {
      parts[idx] = From(val)
    }

    return parts
  }
}
