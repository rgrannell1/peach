
import { Wrapped, Thunk, From } from '../../types.ts'

export function Repeat(val: Wrapped<string>, size: Wrapped<number>): Thunk<string> {
  return () => {
    let parts = []

    let tgt = From(size)
    for (let idx = 0; idx < tgt; idx++) {
      parts[idx] = From(val)
    }

    return parts.join('')
  }
}
